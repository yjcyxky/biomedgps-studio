(ns rapex.tasks.core
  (:require [rapex.tasks.core-specs :as specs]
            [ring.util.http-response :refer [ok not-found]]
            ;; Chats
            [rapex.tasks.boxplot :as boxplot]
            [rapex.tasks.boxplot-multiple-organs :as boxplot-multiple-organs]))

(def ^:private chart-manifests (atom [boxplot/manifest
                                      boxplot-multiple-organs/manifest]))


(def ^:private chart-ui-schemas (atom {:boxplot boxplot/ui-schema
                                       :boxplot-organs boxplot-multiple-organs/ui-schema}))

(defn list-charts
  []
  {:summary    "Get all the available charts."
   :parameters {}
   :responses  {200 {:body specs/list-chart-response}
                404 {:body {:msg string?
                            :context any?}}
                400 {:body {:msg string?
                            :context any?}}
                500 {:body {:msg string?
                            :context any?}}}
   :handler    (fn [{{{:keys [page page_size]} :query} :parameters}]
                 (let [page     (if (nil? page) 1 page)
                       page_size (if (nil? page_size) 10 page_size)]
                   (ok {:total (count @chart-manifests)
                        :page page
                        :page_size page_size
                        :data (->> (drop (* (- page 1) page_size) @chart-manifests)
                                   (take page_size))})))})

(defn get-chart-ui-schema
  []
  {:summary    "Get the ui schema of a chart."
   :parameters {:path {:chart_name string?}}
   :responses  {200 {:body any?}
                404 {:body {:msg string?
                            :context any?}}
                400 {:body {:msg string?
                            :context any?}}
                500 {:body {:msg string?
                            :context any?}}}
   :handler    (fn [{{{:keys [chart_name]} :path} :parameters}]
                 (let [ui-schema (get @chart-ui-schemas (keyword chart_name))]
                   (if ui-schema
                     (ok ui-schema)
                     (not-found {:msg "No such chart."
                                 :context nil}))))})

(def routes
  [""
   {:swagger {:tags ["Visualization for Omics Data"]}}

   ["/charts"
    {:get (list-charts)}]

   ["/charts/ui-schema/:chart_name"
    {:get (get-chart-ui-schema)}]

   ["/charts/boxplot"
    {:post (boxplot/post-boxplot!)}]

   ["/charts/boxplot-organs"
    {:post (boxplot-multiple-organs/post-boxplot!)}]])
declare class SNAPIPAScorecard {
  /**
   * Add a query parameter to filter the returned scores.
   * @param uuid Enter a colon-separated list of sys_id values to specify which indicators,
   * breakdowns, aggregates, and domains to query. The parameter follows this
   * format:&lt;indicator sys_id&gt;:&lt;breakdown sys_id&gt;:&lt;element
   * sys_id&gt;:&lt;lvl-2 breakdown sys_id&gt;:&lt;lvl-2 element sys_id&gt;:&lt;aggregate
   * sys_id&gt;:&lt;domain_sys_id&gt;
   * The parameter must begin with the sys_id of an indicator record.
   * Optionally, you can append the sys_id values of a breakdown and breakdown element
   * to group the response based on the breakdown, and the sys_id of an aggregate to
   * apply that aggregate. You can use a breakdown with an aggregate, or use only
   * one.
   * For information about obtaining the sys_id values of records, see Unique record identifier (sys_id).
   *
   * Note: If an indicator is configured to use a
   * Default time series, all Analytics Hubs for that indicator use the selected aggregate.
   * @param breakdown Enter the sys_id of a breakdown to return chart information
   * organized as defined by the breakdown. For example, enter the sys_id of a priority
   * breakdown to return separate task chart information for each priority value, such as
   * Number of open incidents / Priority / 2 - High.
   * @param breakdown_relation Specify the sys_id of a breakdown relation to break down the returned data
   * using that relation. You can view available breakdown relations by setting the
   * include_available_breakdowns parameter to
   * true.
   * @param elements_filter Specify the sys_id of an elements filter to apply that filter to the returned
   * data.
   * @param display Set to true to return only
   * indicators that are displayed on the Analytics Hub. Set this parameter to all to return all indicators. This
   * parameter is true by default.
   * @param favorites Set to true to return only
   * indicators that are favorites of the querying user.
   * @param key Set to true to return results only
   * for key indicators.
   * @param target Set to true to return results only
   * for indicators that have a target set on the Analytics Hub.
   * @param contains Enter a comma-separated list of names or descriptions to
   * return results only from indicators with a matching value.
   * @param tags Enter an indicator group sys_id to return the indicators in that group. Do not
   * use uuid with this parameter.
   * @param per_page Enter the maximum number of indicators each query can
   * return on a page. By default this value is 10, and the maximum is 100.
   * @param page Specify the page number. For example, when querying 20 Analytics Hubs with the default per_page value (10), specify a page value of 2 to retrieve Analytics Hubs 11-20.
   * @param sortby Specify the value to use when sorting results. Valid values
   * for this parameter are value, change, changeperc, gap, gapperc, duedate, name, order,
   * default, group, indicator_group, frequency, target, date, trend, bullet, and
   * direction. By default, queries sort records by value.
   * @param sortdir Specify the sort direction, ascending or descending. By
   * default, queries sort records in descending order. Set this parameter to
   * asc to sort in ascending order.
   * @param display_value Data retrieval operation for reference and choice fields.Based on this
   * value, the display value and/or the actual value in the database are retrieved.
   * true returns display values for all of the fields.
   *
   * false returns actual values from the database. If a value
   * is not specified, this parameter defaults to false.
   *
   * all returns both actual and display values.
   *
   *
   *
   * @param exclude_reference_link Set to true to hide additional
   * information provided for reference fields, such as the URI to the reference
   * resource.
   * @param include_scores Set to
   * true to return indicator scores for the entire time range
   * selected on the Analytics Hub. If a value is not specified, this parameter defaults to false and returns only
   * the most recent score value.To constrain the date range of the scores that are returned, combine this
   * parameter with the from and to
   * parameters.
   * @param from Specify the earliest date to
   * return scores from. Only scores from this date or later are returned. The date
   * format must match the ISO-8601 standard.This parameter requires that include_scores is set to
   * true.
   * @param to Specify the latest date to return
   * scores from. Only scores from this date or earlier are returned. The date format
   * must match the ISO-8601 standard. This parameter requires that include_scores is set to
   * true.
   * @param step Specify a numeric value to skip scores, based on the
   * indicator frequency. For example, specify a value of 3 to return only scores from
   * every third day for a daily indicator, or from every third week for a weekly
   * indicator.
   * @param limit Specify the maximum number of scores to return.
   * @param include_available_breakdowns Set to true to return all available
   * breakdowns for an indicator. If a value is not specified, this parameter defaults to
   * false and returns no breakdowns.
   * @param include_available_aggregates Set to true to return all possible
   * aggregates for an indicator, including aggregates that have already been applied. If a
   * value is not specified, this parameter defaults to false and returns no
   * aggregates.
   * @param include_realtime Set this parameter to true to return
   * the realtime_enabled element which indicates if real-time scores are enabled for the
   * indicator, and the realtime_value element which contains the real-time score value.
   * This parameter is not supported for formula indicators.
   * @param include_target_color_scheme Set this parameter to true to return
   * the target_color_scheme element that contains the minimum and maximum values, and the
   * color of each section of the target color scheme for the Analytics Hub.
   * @param include_forecast_scores Set this parameter to
   * true to return the forecast_scores element that contains an
   * array of date-value pairs that define the forecast data for the Analytics Hub.This paramater requires that the include_scores
   * parameter is also set to true.
   * @param include_trendline_scores Set this parameter to
   * true to return the trendline_scores element that contains
   * an array of date-value pairs that define the Analytics Hub trendline.This paramater requires that the include_scores
   * parameter is also set to true.
   */
  addParam(
    uuid: string | undefined,
    breakdown: string,
    breakdown_relation: string,
    elements_filter: string,
    display: string,
    favorites: string,
    key: string,
    target: string,
    contains: string,
    tags: string,
    per_page: string,
    page: string,
    sortby: string,
    sortdir: string,
    display_value: string,
    exclude_reference_link: string,
    include_scores: string,
    from: string,
    to: string,
    step: string,
    limit: string,
    include_available_breakdowns: string,
    include_available_aggregates: string,
    include_realtime: string,
    include_target_color_scheme: string,
    include_forecast_scores: string,
    include_trendline_scores: string
  ): void;
  /**
   * Perform a query based on the specified parameters and return the results as an
   * object.
   */
  query(): any;
  /**
   * Get the last query result as an object.
   */
  result(): any;
}
export { SNAPIPAScorecard };

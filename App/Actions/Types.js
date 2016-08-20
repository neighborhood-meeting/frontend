// A list of all actions in the system.
import { createTypes } from 'reduxsauce'

export default createTypes(`
  LOGIN_ATTEMPT
  LOGIN_SUCCESS
  LOGIN_FAILURE

  LOGOUT

  STARTUP

  TEMPERATURE_REQUEST
  TEMPERATURE_RECEIVE
  TEMPERATURE_FAILURE

  REGIONS_REQUEST
  REGIONS_RECEIVE
  REGIONS_FAILURE

  REGION_REQUEST
  REGION_RECEIVE
  REGION_FAILURE

  ARTICLE_REQUEST
  ARTICLE_RECEIVE
  ARTICLE_FAILURE
`)

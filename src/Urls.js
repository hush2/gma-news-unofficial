const base = 'https://data.gmanews.tv/zgmanews_contents/'
const n = 1

export default {
  sconfig: base + `specialconfig_v1.json.gz`,
  headlines: base + `get_headlinesv2_1.json.gz`,
  news: base + `get_news${n}.json.gz`,
  sports: base + `get_sports${n}.json.gz`,
  money: base + `get_economy${n}.json.gz`,
  scitech: base + `get_scitech${n}.json.gz`,
  showbiz: base + `get_showbiz${n}.json.gz`,
  lifestyle: base + `get_lifestyle${n}.json.gz`,
  opinion: base + `get_opinion${n}.json.gz`,
  hashtag: base + `get_hashtag${n}.json.gz`,
  serbisyo: base + `get_serbisyopubliko${n}.json.gz`,
  video: base + `get_video${n}.json.gz`,
  photo: base + `get_photo${n}.json.gz`,
}

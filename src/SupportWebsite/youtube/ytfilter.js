import { InsFilter } from '../../filter/InsFilter.js'
import { InitYT } from './InitYT.js'

export const ytfilter = InsFilter('Youtube', /www\.youtube\.com/, 'https://www.youtube.com', InitYT)

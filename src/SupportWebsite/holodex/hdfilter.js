import { InsFilter } from '../../filter/InsFilter.js'
import { InitHD } from './InitHD.js'

export const hdfilter = InsFilter('Holodex', /holodex\.net/, 'https://holodex.net', InitHD)
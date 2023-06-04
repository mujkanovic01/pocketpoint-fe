const players = {
    'p-001': {
        id: 'p-001',
        name: 'John Doe',
        age: 25,
        code: 'de',
        wins: 23,
        losses: 8,
        winPercentage: 74,
    },
    'p-002': {
        id: 'p-002',
        name: 'Jane Smith',
        age: 27,
        code: 'it',
        wins: 15,
        losses: 12,
        winPercentage: 56,
    },
    'p-003': {
        id: 'p-003',
        name: 'David Johnson',
        age: 30,
        code: 'fr',
        wins: 19,
        losses: 10,
        winPercentage: 66,
    },
    'p-004': {
        id: 'p-004',
        name: 'Emily Williams',
        age: 23,
        code: 'es',
        wins: 14,
        losses: 13,
        winPercentage: 52,
    },
    'p-005': {
        id: 'p-005',
        name: 'Michael Brown',
        age: 26,
        code: 'pl',
        wins: 18,
        losses: 11,
        winPercentage: 62,
    },
    'p-006': {
        id: 'p-006',
        name: 'Sarah Taylor',
        age: 29,
        code: 'pt',
        wins: 20,
        losses: 9,
        winPercentage: 69,
    },
    'p-007': {
        id: 'p-007',
        name: 'Daniel Martinez',
        age: 24,
        code: 'nl',
        wins: 17,
        losses: 12,
        winPercentage: 59,
    },
    'p-008': {
        id: 'p-008',
        name: 'Olivia Davis',
        age: 28,
        code: 'se',
        wins: 16,
        losses: 11,
        winPercentage: 59,
    },
    'p-009': {
        id: 'p-009',
        name: 'Matthew Anderson',
        age: 31,
        code: 'ch',
        wins: 21,
        losses: 8,
        winPercentage: 72,
    },
    'p-010': {
        id: 'p-010',
        name: 'Sophia Thomas',
        age: 22,
        code: 'gr',
        wins: 12,
        losses: 15,
        winPercentage: 44,
    },
    'p-011': {
        id: 'p-011',
        name: 'James Rodriguez',
        age: 25,
        code: 'ru',
        wins: 25,
        losses: 5,
        winPercentage: 83,
    },
    'p-012': {
        id: 'p-012',
        name: 'Emma Lee',
        age: 27,
        code: 'fi',
        wins: 19,
        losses: 10,
        winPercentage: 66,
    },
    'p-013': {
        id: 'p-013',
        name: 'Benjamin Clark',
        age: 30,
        code: 'cz',
        wins: 8,
        losses: 18,
        winPercentage: 31,
    },
    'p-014': {
        id: 'p-014',
        name: 'Ava Scott',
        age: 23,
        code: 'at',
        wins: 14,
        losses: 12,
        winPercentage: 54,
    },
    'p-015': {
        id: 'p-015',
        name: 'Christopher Walker',
        age: 26,
        code: 'ua',
        wins: 10,
        losses: 16,
        winPercentage: 38,
    },
    'p-016': {
        id: 'p-016',
        name: 'Mia Lewis',
        age: 29,
        code: 'ro',
        wins: 16,
        losses: 11,
        winPercentage: 59,
    },
    'p-017': {
        id: 'p-017',
        name: 'William Rodriguez',
        age: 24,
        code: 'hu',
        wins: 18,
        losses: 9,
        winPercentage: 67,
    },
    'p-018': {
        id: 'p-018',
        name: 'Amelia Garcia',
        age: 28,
        code: 'no',
        wins: 22,
        losses: 7,
        winPercentage: 76,
    },
    'p-019': {
        id: 'p-019',
        name: 'Ethan Martinez',
        age: 31,
        code: 'dk',
        wins: 11,
        losses: 16,
        winPercentage: 41,
    },
    'p-020': {
        id: 'p-020',
        name: 'Charlotte Allen',
        age: 22,
        code: 'bg',
        wins: 10,
        losses: 18,
        winPercentage: 36,
    },
    'p-021': {
        id: 'p-021',
        name: 'Daniel Wilson',
        age: 25,
        code: 'gb',
        wins: 16,
        losses: 13,
        winPercentage: 55,
    },
    'p-022': {
        id: 'p-022',
        name: 'Sofia Thompson',
        age: 27,
        code: 'ie',
        wins: 14,
        losses: 16,
        winPercentage: 46,
    },
    'p-023': {
        id: 'p-023',
        name: 'Elijah Hall',
        age: 30,
        code: 'be',
        wins: 20,
        losses: 10,
        winPercentage: 66,
    },
    'p-024': {
        id: 'p-024',
        name: 'Avery Turner',
        age: 23,
        code: 'hr',
        wins: 12,
        losses: 17,
        winPercentage: 41,
    },
    'p-025': {
        id: 'p-025',
        name: 'Harper Harris',
        age: 26,
        code: 'tr',
        wins: 18,
        losses: 12,
        winPercentage: 60,
    },
    'p-026': {
        id: 'p-026',
        name: 'Sebastian King',
        age: 29,
        code: 'rs',
        wins: 15,
        losses: 15,
        winPercentage: 50,
    },
    'p-027': {
        id: 'p-027',
        name: 'Aria Morgan',
        age: 24,
        code: 'si',
        wins: 11,
        losses: 18,
        winPercentage: 37,
    },
    'p-028': {
        id: 'p-028',
        name: 'Carter Cook',
        age: 28,
        code: 'cy',
        wins: 19,
        losses: 11,
        winPercentage: 63,
    },
    'p-029': {
        id: 'p-029',
        name: 'Leo Adams',
        age: 31,
        code: 'sk',
        wins: 16,
        losses: 14,
        winPercentage: 53,
    },
    'p-030': {
        id: 'p-030',
        name: 'Grace Parker',
        age: 22,
        code: 'ee',
        wins: 13,
        losses: 16,
        winPercentage: 45,
    },
    'p-031': {
        id: 'p-031',
        name: 'Jackson Turner',
        age: 25,
        code: 'lv',
        wins: 19,
        losses: 10,
        winPercentage: 65,
    },
    'p-032': {
        id: 'p-032',
        name: 'Luna Powell',
        age: 27,
        code: 'lt',
        wins: 15,
        losses: 14,
        winPercentage: 52,
    },
    'p-033': {
        id: 'p-033',
        name: 'Mateo Scott',
        age: 30,
        code: 'lu',
        wins: 10,
        losses: 19,
        winPercentage: 34,
    },
    'p-034': {
        id: 'p-034',
        name: 'Penelope Sanchez',
        age: 23,
        code: 'mt',
        wins: 17,
        losses: 12,
        winPercentage: 58,
    },
    'p-035': {
        id: 'p-035',
        name: 'Ryan Mitchell',
        age: 26,
        code: 'md',
        wins: 14,
        losses: 15,
        winPercentage: 48,
    },
    'p-036': {
        id: 'p-036',
        name: 'Stella Flores',
        age: 29,
        code: 'mc',
        wins: 12,
        losses: 17,
        winPercentage: 41,
    },
    'p-037': {
        id: 'p-037',
        name: 'Luke Green',
        age: 24,
        code: 'lu',
        wins: 20,
        losses: 10,
        winPercentage: 66,
    },
    'p-038': {
        id: 'p-038',
        name: 'Violet Ross',
        age: 28,
        code: 'cy',
        wins: 16,
        losses: 14,
        winPercentage: 53,
    },
    'p-039': {
        id: 'p-039',
        name: 'Gabriel Cooper',
        age: 31,
        code: 'sk',
        wins: 13,
        losses: 16,
        winPercentage: 45,
    },
    'p-040': {
        id: 'p-040',
        name: 'Zoe Turner',
        age: 22,
        code: 'ee',
        wins: 18,
        losses: 11,
        winPercentage: 62,
    },
    'p-041': {
        id: 'p-041',
        name: 'Henry Ramirez',
        age: 25,
        code: 'lv',
        wins: 15,
        losses: 14,
        winPercentage: 52,
    },
    'p-042': {
        id: 'p-042',
        name: 'Lily Martinez',
        age: 27,
        code: 'lt',
        wins: 11,
        losses: 17,
        winPercentage: 39,
    },
    'p-043': {
        id: 'p-043',
        name: 'Wyatt Gray',
        age: 30,
        code: 'lu',
        wins: 20,
        losses: 9,
        winPercentage: 69,
    },
    'p-044': {
        id: 'p-044',
        name: 'Evelyn Butler',
        age: 23,
        code: 'mt',
        wins: 13,
        losses: 16,
        winPercentage: 45,
    },
    'p-045': {
        id: 'p-045',
        name: 'Owen Torres',
        age: 26,
        code: 'md',
        wins: 16,
        losses: 13,
        winPercentage: 55,
    },
    'p-046': {
        id: 'p-046',
        name: 'Hazel Collins',
        age: 29,
        code: 'mc',
        wins: 14,
        losses: 15,
        winPercentage: 48,
    },
    'p-047': {
        id: 'p-047',
        name: 'Levi Reed',
        age: 24,
        code: 'is',
        wins: 19,
        losses: 10,
        winPercentage: 65,
    },
    'p-048': {
        id: 'p-048',
        name: 'Bella Bell',
        age: 28,
        code: 'dk',
        wins: 17,
        losses: 12,
        winPercentage: 58,
    },
    'p-049': {
        id: 'p-049',
        name: 'Logan Hughes',
        age: 31,
        code: 'bg',
        wins: 12,
        losses: 17,
        winPercentage: 41,
    },
    'p-050': {
        id: 'p-050',
        name: 'Scarlett Morgan',
        age: 22,
        code: 'gb',
        wins: 14,
        losses: 15,
        winPercentage: 48,
    },

    'p-051': {
        id: 'p-051',
        name: 'Lucas Walker',
        age: 25,
        code: 'ua',
        wins: 18,
        losses: 11,
        winPercentage: 62,
    },
    'p-052': {
        id: 'p-052',
        name: 'Chloe Lewis',
        age: 27,
        code: 'ro',
        wins: 13,
        losses: 16,
        winPercentage: 45,
    },
    'p-053': {
        id: 'p-053',
        name: 'Alexander Rodriguez',
        age: 30,
        code: 'hu',
        wins: 15,
        losses: 14,
        winPercentage: 52,
    },
    'p-054': {
        id: 'p-054',
        name: 'Aria Scott',
        age: 23,
        code: 'at',
        wins: 19,
        losses: 10,
        winPercentage: 65,
    },
    'p-055': {
        id: 'p-055',
        name: 'Samuel Garcia',
        age: 26,
        code: 'se',
        wins: 16,
        losses: 13,
        winPercentage: 55,
    },
    'p-056': {
        id: 'p-056',
        name: 'Nora Anderson',
        age: 29,
        code: 'ch',
        wins: 17,
        losses: 12,
        winPercentage: 58,
    },
    'p-057': {
        id: 'p-057',
        name: 'Henry Johnson',
        age: 24,
        code: 'fi',
        wins: 20,
        losses: 9,
        winPercentage: 69,
    },
    'p-058': {
        id: 'p-058',
        name: 'Ava Taylor',
        age: 28,
        code: 'cz',
        wins: 12,
        losses: 17,
        winPercentage: 41,
    },
    'p-059': {
        id: 'p-059',
        name: 'Matthew Wilson',
        age: 31,
        code: 'be',
        wins: 14,
        losses: 15,
        winPercentage: 48,
    },
    'p-060': {
        id: 'p-060',
        name: 'Luna Martinez',
        age: 22,
        code: 'hr',
        wins: 11,
        losses: 18,
        winPercentage: 38,
    },
    'p-061': {
        id: 'p-061',
        name: 'Oliver Turner',
        age: 25,
        code: 'md',
        wins: 16,
        losses: 13,
        winPercentage: 55,
    },
    'p-062': {
        id: 'p-062',
        name: 'Lily Flores',
        age: 27,
        code: 'mc',
        wins: 14,
        losses: 15,
        winPercentage: 48,
    },
    'p-063': {
        id: 'p-063',
        name: 'Elijah Green',
        age: 30,
        code: 'lu',
        wins: 17,
        losses: 12,
        winPercentage: 58,
    },
    'p-064': {
        id: 'p-064',
        name: 'Avery Ross',
        age: 23,
        code: 'mt',
        wins: 19,
        losses: 10,
        winPercentage: 65,
    },
    'p-065': {
        id: 'p-065',
        name: 'Benjamin Mitchell',
        age: 26,
        code: 'md',
        wins: 13,
        losses: 16,
        winPercentage: 45,
    },
    'p-066': {
        id: 'p-066',
        name: 'Ella Thompson',
        age: 29,
        code: 'mc',
        wins: 15,
        losses: 14,
        winPercentage: 52,
    },
    'p-067': {
        id: 'p-067',
        name: 'Mason Turner',
        age: 24,
        code: 'is',
        wins: 18,
        losses: 11,
        winPercentage: 62,
    },
    'p-068': {
        id: 'p-068',
        name: 'Scarlett Bell',
        age: 28,
        code: 'dk',
        wins: 16,
        losses: 13,
        winPercentage: 55,
    },
    'p-069': {
        id: 'p-069',
        name: 'Ethan Hughes',
        age: 31,
        code: 'bg',
        wins: 17,
        losses: 12,
        winPercentage: 58,
    },
    'p-070': {
        id: 'p-070',
        name: 'Victoria Morgan',
        age: 22,
        code: 'gb',
        wins: 20,
        losses: 9,
        winPercentage: 69,
    },
    'p-071': {
        id: 'p-071',
        name: 'Lucas Ramirez',
        age: 25,
        code: 'ua',
        wins: 12,
        losses: 17,
        winPercentage: 41,
    },
    'p-072': {
        id: 'p-072',
        name: 'Grace Lewis',
        age: 26,
        code: 'ro',
        wins: 15,
        losses: 14,
        winPercentage: 52,
    },
    'p-073': {
        id: 'p-073',
        name: 'Samuel Garcia',
        age: 29,
        code: 'hu',
        wins: 16,
        losses: 13,
        winPercentage: 55,
    },
    'p-074': {
        id: 'p-074',
        name: 'Aurora Davis',
        age: 24,
        code: 'no',
        wins: 18,
        losses: 11,
        winPercentage: 62,
    },
    'p-075': {
        id: 'p-075',
        name: 'Dylan Martinez',
        age: 28,
        code: 'se',
        wins: 17,
        losses: 12,
        winPercentage: 58,
    },
    'p-076': {
        id: 'p-076',
        name: 'Zoe Anderson',
        age: 31,
        code: 'ch',
        wins: 14,
        losses: 15,
        winPercentage: 48,
    },
    'p-077': {
        id: 'p-077',
        name: 'Caleb Thomas',
        age: 22,
        code: 'gr',
        wins: 13,
        losses: 16,
        winPercentage: 45,
    },
    'p-078': {
        id: 'p-078',
        name: 'Hannah Rodriguez',
        age: 25,
        code: 'ru',
        wins: 16,
        losses: 13,
        winPercentage: 55,
    },
    'p-079': {
        id: 'p-079',
        name: 'Nathan Lee',
        age: 27,
        code: 'fi',
        wins: 15,
        losses: 14,
        winPercentage: 52,
    },
    'p-080': {
        id: 'p-080',
        name: 'Audrey Clark',
        age: 30,
        code: 'cz',
        wins: 17,
        losses: 12,
        winPercentage: 58,
    },
    'p-081': {
        id: 'p-081',
        name: 'Henry Scott',
        age: 23,
        code: 'at',
        wins: 19,
        losses: 10,
        winPercentage: 65,
    },
    'p-082': {
        id: 'p-082',
        name: 'Addison Walker',
        age: 26,
        code: 'ua',
        wins: 14,
        losses: 15,
        winPercentage: 48,
    },
    'p-083': {
        id: 'p-083',
        name: 'Scarlett Garcia',
        age: 24,
        code: 'hu',
        wins: 16,
        losses: 13,
        winPercentage: 55,
    },
    'p-084': {
        id: 'p-084',
        name: 'Ethan Davis',
        age: 28,
        code: 'no',
        wins: 18,
        losses: 11,
        winPercentage: 62,
    },
    'p-085': {
        id: 'p-085',
        name: 'Lily Martinez',
        age: 31,
        code: 'se',
        wins: 17,
        losses: 12,
        winPercentage: 58,
    },
    'p-086': {
        id: 'p-086',
        name: 'Jackson Anderson',
        age: 22,
        code: 'ch',
        wins: 14,
        losses: 15,
        winPercentage: 48,
    },
    'p-087': {
        id: 'p-087',
        name: 'Chloe Thomas',
        age: 25,
        code: 'gr',
        wins: 13,
        losses: 16,
        winPercentage: 45,
    },
    'p-088': {
        id: 'p-088',
        name: 'Elijah Rodriguez',
        age: 27,
        code: 'ru',
        wins: 16,
        losses: 13,
        winPercentage: 55,
    },
    'p-089': {
        id: 'p-089',
        name: 'Mia Lee',
        age: 30,
        code: 'fi',
        wins: 15,
        losses: 14,
        winPercentage: 52,
    },
    'p-090': {
        id: 'p-090',
        name: 'Owen Clark',
        age: 23,
        code: 'cz',
        wins: 17,
        losses: 12,
        winPercentage: 58,
    },
    'p-091': {
        id: 'p-091',
        name: 'Hazel Scott',
        age: 26,
        code: 'at',
        wins: 19,
        losses: 10,
        winPercentage: 65,
    },
    'p-092': {
        id: 'p-092',
        name: 'Carter Walker',
        age: 29,
        code: 'ua',
        wins: 14,
        losses: 15,
        winPercentage: 48,
    },
    'p-093': {
        id: 'p-093',
        name: 'Ava Turner',
        age: 24,
        code: 'lt',
        wins: 16,
        losses: 13,
        winPercentage: 55,
    },
    'p-094': {
        id: 'p-094',
        name: 'Henry Scott',
        age: 27,
        code: 'lu',
        wins: 15,
        losses: 14,
        winPercentage: 52,
    },
    'p-095': {
        id: 'p-095',
        name: 'Luna Sanchez',
        age: 30,
        code: 'mt',
        wins: 18,
        losses: 11,
        winPercentage: 62,
    },
    'p-096': {
        id: 'p-096',
        name: 'Eli Mitchell',
        age: 23,
        code: 'md',
        wins: 17,
        losses: 12,
        winPercentage: 58,
    },
    'p-097': {
        id: 'p-097',
        name: 'Violet Flores',
        age: 26,
        code: 'mc',
        wins: 14,
        losses: 15,
        winPercentage: 48,
    },
    'p-098': {
        id: 'p-098',
        name: 'Gabriel Green',
        age: 29,
        code: 'is',
        wins: 13,
        losses: 16,
        winPercentage: 45,
    },
    'p-099': {
        id: 'p-099',
        name: 'Zoe Ross',
        age: 24,
        code: 'dk',
        wins: 16,
        losses: 13,
        winPercentage: 55,
    },
    'p-100': {
        id: 'p-100',
        name: 'Henry Cooper',
        age: 27,
        code: 'ee',
        wins: 15,
        losses: 14,
        winPercentage: 52,
    },
    'p-101': {
        id: 'p-101',
        name: 'Lily Turner',
        age: 30,
        code: 'lv',
        wins: 17,
        losses: 12,
        winPercentage: 58,
    },
    'p-102': {
        id: 'p-102',
        name: 'Wyatt Martinez',
        age: 23,
        code: 'lt',
        wins: 19,
        losses: 10,
        winPercentage: 65,
    },
    'p-103': {
        id: 'p-103',
        name: 'Evelyn Butler',
        age: 26,
        code: 'lu',
        wins: 14,
        losses: 15,
        winPercentage: 48,
    },
    'p-104': {
        id: 'p-104',
        name: 'Owen Torres',
        age: 29,
        code: 'md',
        wins: 16,
        losses: 13,
        winPercentage: 55,
    },
    'p-105': {
        id: 'p-105',
        name: 'Hazel Collins',
        age: 24,
        code: 'mc',
        wins: 15,
        losses: 14,
        winPercentage: 52,
    },
    'p-106': {
        id: 'p-106',
        name: 'Levi Reed',
        age: 27,
        code: 'is',
        wins: 18,
        losses: 11,
        winPercentage: 62,
    },
    'p-107': {
        id: 'p-107',
        name: 'Bella Bell',
        age: 30,
        code: 'dk',
        wins: 17,
        losses: 12,
        winPercentage: 58,
    },
    'p-108': {
        id: 'p-108',
        name: 'Logan Hughes',
        age: 23,
        code: 'bg',
        wins: 14,
        losses: 15,
        winPercentage: 48,
    },
    'p-109': {
        id: 'p-109',
        name: 'Scarlett Morgan',
        age: 26,
        code: 'gb',
        wins: 13,
        losses: 16,
        winPercentage: 45,
    },
    'p-110': {
        id: 'p-110',
        name: 'Ava Turner',
        age: 29,
        code: 'lt',
        wins: 16,
        losses: 13,
        winPercentage: 55,
    },
    'p-111': {
        id: 'p-111',
        name: 'Henry Scott',
        age: 24,
        code: 'lu',
        wins: 15,
        losses: 14,
        winPercentage: 52,
    },
}
export default players;
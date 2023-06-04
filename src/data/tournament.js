const matches = {
    '1': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 4,
        scoreRight: 9,
        winner: null,
        player1: {
            id: 'p-001',
            name: 'John Doe',
            age: 25,
            code: 'de',
            wins: 23,
            losses: 8,
            winPercentage: 74
        },
        player2: {
            id: 'p-002',
            name: 'Jane Smith',
            age: 27,
            code: 'it',
            wins: 15,
            losses: 12,
            winPercentage: 56
        }
    },
    '2': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 8,
        scoreRight: 9,
        winner: null,
        player1: {
            id: 'p-003',
            name: 'David Johnson',
            age: 30,
            code: 'fr',
            wins: 19,
            losses: 10,
            winPercentage: 66
        },
        player2: {
            id: 'p-004',
            name: 'Emily Williams',
            age: 23,
            code: 'es',
            wins: 14,
            losses: 13,
            winPercentage: 52
        }
    },
    '3': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 9,
        scoreRight: 1,
        winner: null,
        player1: {
            id: 'p-005',
            name: 'Michael Brown',
            age: 26,
            code: 'pl',
            wins: 18,
            losses: 11,
            winPercentage: 62
        },
        player2: {
            id: 'p-006',
            name: 'Sarah Taylor',
            age: 29,
            code: 'pt',
            wins: 20,
            losses: 9,
            winPercentage: 69
        }
    },
    '4': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 9,
        scoreRight: 1,
        winner: null,
        player1: {
            id: 'p-007',
            name: 'Daniel Martinez',
            age: 24,
            code: 'nl',
            wins: 17,
            losses: 12,
            winPercentage: 59
        },
        player2: {
            id: 'p-008',
            name: 'Olivia Davis',
            age: 28,
            code: 'se',
            wins: 16,
            losses: 11,
            winPercentage: 59
        }
    },
    '5': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 6,
        scoreRight: 9,
        winner: null,
        player1: {
            id: 'p-009',
            name: 'Matthew Anderson',
            age: 31,
            code: 'ch',
            wins: 21,
            losses: 8,
            winPercentage: 72
        },
        player2: {
            id: 'p-010',
            name: 'Sophia Thomas',
            age: 22,
            code: 'gr',
            wins: 12,
            losses: 15,
            winPercentage: 44
        }
    },
    '6': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 8,
        scoreRight: 9,
        winner: null,
        player1: {
            id: 'p-011',
            name: 'James Rodriguez',
            age: 25,
            code: 'ru',
            wins: 25,
            losses: 5,
            winPercentage: 83
        },
        player2: {
            id: 'p-012',
            name: 'Emma Lee',
            age: 27,
            code: 'fi',
            wins: 19,
            losses: 10,
            winPercentage: 66
        }
    },
    '7': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 9,
        scoreRight: 1,
        winner: null,
        player1: {
            id: 'p-013',
            name: 'Benjamin Clark',
            age: 30,
            code: 'cz',
            wins: 8,
            losses: 18,
            winPercentage: 31
        },
        player2: {
            id: 'p-014',
            name: 'Ava Scott',
            age: 23,
            code: 'at',
            wins: 14,
            losses: 12,
            winPercentage: 54
        }
    },
    '8': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 8,
        scoreRight: 9,
        winner: null,
        player1: {
            id: 'p-015',
            name: 'Christopher Walker',
            age: 26,
            code: 'ua',
            wins: 10,
            losses: 16,
            winPercentage: 38
        },
        player2: {
            id: 'p-016',
            name: 'Mia Lewis',
            age: 29,
            code: 'ro',
            wins: 16,
            losses: 11,
            winPercentage: 59
        }
    },
    '9': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 5,
        scoreRight: 9,
        winner: null,
        player1: {
            id: 'p-017',
            name: 'William Rodriguez',
            age: 24,
            code: 'hu',
            wins: 18,
            losses: 9,
            winPercentage: 67
        },
        player2: {
            id: 'p-018',
            name: 'Amelia Garcia',
            age: 28,
            code: 'no',
            wins: 22,
            losses: 7,
            winPercentage: 76
        }
    },
    '10': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 9,
        scoreRight: 0,
        winner: null,
        player1: {
            id: 'p-019',
            name: 'Ethan Martinez',
            age: 31,
            code: 'dk',
            wins: 11,
            losses: 16,
            winPercentage: 41
        },
        player2: {
            id: 'p-020',
            name: 'Charlotte Allen',
            age: 22,
            code: 'bg',
            wins: 10,
            losses: 18,
            winPercentage: 36
        }
    },
    '11': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 7,
        scoreRight: 9,
        winner: null,
        player1: {
            id: 'p-021',
            name: 'Daniel Wilson',
            age: 25,
            code: 'gb',
            wins: 16,
            losses: 13,
            winPercentage: 55
        },
        player2: {
            id: 'p-022',
            name: 'Sofia Thompson',
            age: 27,
            code: 'ie',
            wins: 14,
            losses: 16,
            winPercentage: 46
        }
    },
    '12': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 7,
        scoreRight: 9,
        winner: null,
        player1: {
            id: 'p-023',
            name: 'Elijah Hall',
            age: 30,
            code: 'be',
            wins: 20,
            losses: 10,
            winPercentage: 66
        },
        player2: {
            id: 'p-024',
            name: 'Avery Turner',
            age: 23,
            code: 'hr',
            wins: 12,
            losses: 17,
            winPercentage: 41
        }
    },
    '13': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 9,
        scoreRight: 8,
        winner: null,
        player1: {
            id: 'p-025',
            name: 'Harper Harris',
            age: 26,
            code: 'tr',
            wins: 18,
            losses: 12,
            winPercentage: 60
        },
        player2: {
            id: 'p-026',
            name: 'Sebastian King',
            age: 29,
            code: 'rs',
            wins: 15,
            losses: 15,
            winPercentage: 50
        }
    },
    '14': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 9,
        scoreRight: 2,
        winner: null,
        player1: {
            id: 'p-027',
            name: 'Aria Morgan',
            age: 24,
            code: 'si',
            wins: 11,
            losses: 18,
            winPercentage: 37
        },
        player2: {
            id: 'p-028',
            name: 'Carter Cook',
            age: 28,
            code: 'cy',
            wins: 19,
            losses: 11,
            winPercentage: 63
        }
    },
    '15': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 9,
        scoreRight: 2,
        winner: null,
        player1: {
            id: 'p-029',
            name: 'Sebastian White',
            age: 25,
            code: 'hr',
            wins: 13,
            losses: 15,
            winPercentage: 46
        },
        player2: {
            id: 'p-030',
            name: 'Grace Parker',
            age: 22,
            code: 'ee',
            wins: 13,
            losses: 16,
            winPercentage: 45
        }
    },
    '16': {
        isStarted: false,
        isFinished: true,
        scoreLeft: 6,
        scoreRight: 9,
        winner: null,
        player1: {
            id: 'p-031',
            name: 'Jackson Turner',
            age: 25,
            code: 'lv',
            wins: 19,
            losses: 10,
            winPercentage: 65
        },
        player2: {
            id: 'p-032',
            name: 'Ava Edwards',
            age: 27,
            code: 'hr',
            wins: 14,
            losses: 14,
            winPercentage: 50
        }
    },
    '17': {
            isStarted: false,
            isFinished: false,
            scoreLeft: 0,
            scoreRight: 0,
            winner: null,
            player1: {
                id: 'p-002',
                name: 'Jane Smith',
                age: 27,
                code: 'it',
                wins: 15,
                losses: 12,
                winPercentage: 56
            },
            player2: {
                id: 'p-004',
                name: 'Emily Williams',
                age: 23,
                code: 'es',
                wins: 14,
                losses: 13,
                winPercentage: 52
            }
        },
        '18': {
            isStarted: false,
            isFinished: false,
            scoreLeft: 0,
            scoreRight: 0,
            winner: null,
            player1: {
                id: 'p-005',
                name: 'Michael Brown',
                age: 26,
                code: 'pl',
                wins: 18,
                losses: 11,
                winPercentage: 62
            },
            player2: {
                id: 'p-007',
                name: 'Daniel Martinez',
                age: 24,
                code: 'nl',
                wins: 17,
                losses: 12,
                winPercentage: 59
            }
        },
        '19': {
            isStarted: false,
            isFinished: false,
            scoreLeft: 0,
            scoreRight: 0,
            winner: null,
            player1: {
                id: 'p-010',
                name: 'Sophia Thomas',
                age: 22,
                code: 'gr',
                wins: 12,
                losses: 15,
                winPercentage: 44
            },
            player2: {
                id: 'p-012',
                name: 'Emma Lee',
                age: 27,
                code: 'fi',
                wins: 19,
                losses: 10,
                winPercentage: 66
            }
        },
        '20': {
            isStarted: false,
            isFinished: false,
            scoreLeft: 0,
            scoreRight: 0,
            winner: null,
            player1: {
                id: 'p-013',
                name: 'Benjamin Clark',
                age: 30,
                code: 'cz',
                wins: 8,
                losses: 18,
                winPercentage: 31
            },
            player2: {
                id: 'p-016',
                name: 'Mia Lewis',
                age: 29,
                code: 'ro',
                wins: 16,
                losses: 11,
                winPercentage: 59
            }
        },
        '21': {
            isStarted: false,
            isFinished: false,
            scoreLeft: 0,
            scoreRight: 0,
            winner: null,
            player1: {
                id: 'p-018',
                name: 'Amelia Garcia',
                age: 28,
                code: 'no',
                wins: 22,
                losses: 7,
                winPercentage: 76
            },
            player2: {
                id: 'p-019',
                name: 'Ethan Martinez',
                age: 31,
                code: 'dk',
                wins: 11,
                losses: 16,
                winPercentage: 41
            }
        },
        '22': {
            isStarted: false,
            isFinished: false,
            scoreLeft: 0,
            scoreRight: 0,
            winner: null,
            player1: {
                id: 'p-021',
                name: 'Daniel Wilson',
                age: 25,
                code: 'gb',
                wins: 16,
                losses: 13,
                winPercentage: 55
            },
            player2: {
                id: 'p-023',
                name: 'Elijah Hall',
                age: 30,
                code: 'be',
                wins: 20,
                losses: 10,
                winPercentage: 66
            }
        },
        '23': {
            isStarted: false,
            isFinished: false,
            scoreLeft: 0,
            scoreRight: 0,
            winner: null,
            player1: {
                id: 'p-025',
                name: 'Harper Harris',
                age: 26,
                code: 'tr',
                wins: 18,
                losses: 12,
                winPercentage: 60
            },
            player2: {
                id: 'p-028',
                name: 'Carter Cook',
                age: 28,
                code: 'cy',
                wins: 19,
                losses: 11,
                winPercentage: 63
            }
        },
        '24': {
            isStarted: false,
            isFinished: false,
            scoreLeft: 0,
            scoreRight: 0,
            winner: null,
            player1: {
                id: 'p-029',
                name: 'Sebastian White',
                age: 25,
                code: 'hr',
                wins: 13,
                losses: 15,
                winPercentage: 46
            },
            player2: {
                id: 'p-032',
                name: 'Ava Edwards',
                age: 27,
                code: 'hr',
                wins: 14,
                losses: 14,
                winPercentage: 50
            }
        }
}

export default matches
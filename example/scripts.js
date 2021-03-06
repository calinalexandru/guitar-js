var chordBmOptions = {
    'title': 'Bm',
    'statusString': ['open', 'open', 'open', 'open', 'open', 'closed'],
    'chord': [{
        'fret': 1,
        'barre': {
            'from': 1,
            'to': 6
        }
    }, {
        'fret': 2,
        'string': 2
    }, {
        'fret': 3,
        'string': 3
    }, {
        'fret': 3,
        'string': 4
    }]
};

Guitar.chord('test', chordBmOptions);
Guitar.tooltipChord('test-tooltip', chordBmOptions);


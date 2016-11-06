/**
 * Dark blue theme for Highcharts JS
 * @author Torstein H淡nsi
 */

Highcharts.theme = {
	colors: ["#CC0000", "#0066CC", "#3399CC", "#0066CC", "#1F949A", "#82914E", "#86777F", "#42A07B"],
	chart: {
		backgroundColor: '#FFFFFF',
		borderColor: '#000000',
		borderWidth: 0,
		className: 'dark-container',
		plotBackgroundColor: '#FFFFFF',
		plotBorderColor: '#FFFFFF',
		plotBorderWidth: 1
	},
	title: {
		style: {
			color: '#000000',
			font: '12px "Trebuchet MS", Verdana, sans-serif'
		}
	},
	subtitle: {
		style: {
			color: '#000000',
			font: 'bold 12px "Trebuchet MS", Verdana, sans-serif'
		}
	},
	xAxis: {
		gridLineColor: '#000000',
		gridLineWidth: 0,
		labels: {
			style: {
				fontSize: '10px',
				color: '#000000'
			}
		},
		lineColor: '#727272',
		tickColor: '#727272',
		title: {
			style: {
				color: '#000000',
				fontWeight: 'bold',
				fontSize: '12px',
				fontFamily: 'Trebuchet MS, Verdana, sans-serif'

			}
		}
	},
	yAxis: {
		gridLineColor: '#E4E4E4',
		labels: {
			style: {
				color: '#000000'
			}
		},
		lineColor: '#727272',
		minorTickInterval: null,
		tickColor: '#FAFAFA',
		tickWidth: 1,
		title: {
			style: {
				color: '#000000',
				fontWeight: 'normal',
				fontSize: '12px',
				fontFamily: 'Trebuchet MS, Verdana, sans-serif'
			}
		}
	},
	tooltip: {
		backgroundColor: '#FFFFFF',
		borderColor: '#000000',
		style: {
			color: '#000000'
		}
	},
	toolbar: {
		itemStyle: {
			color: '#000000'
		}
	},
	plotOptions: {
		line: {
			dataLabels: {
				color: '#000000'
			},
			marker: {
				lineColor: '#000000'
			}
		},
		spline: {
			marker: {
				lineColor: '#000000'
			}
		},
		scatter: {
			marker: {
				lineColor: '#000000'
			}
		},
		candlestick: {
			lineColor: '000000'
		}
	},
	legend: {
		itemStyle: {
			font: '9pt Trebuchet MS, Verdana, sans-serif',
			color: '#000000'
		},
		itemHoverStyle: {
			color: '#000000'
		},
		itemHiddenStyle: {
			color: '#000000'
		}
	},
	credits: {
		style: {
			color: '#000000'
		}
	},
	labels: {
		style: {
			color: '#000000'
		}
	},

	navigation: {
		buttonOptions: {
			backgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#606060'],
					[0.6, '#333333']
				]
			},
			borderColor: '#000000',
			symbolStroke: '#C0C0C0',
			hoverSymbolStroke: '#FFFFFF'
		}
	},

	exporting: {
		buttons: {
			exportButton: {
				symbolFill: '#55BE3B'
			},
			printButton: {
				symbolFill: '#7797BE'
			}
		}
	},

	// scroll charts
	rangeSelector: {
		buttonTheme: {
			fill: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
				[0, 'rgb(255, 255, 255)'],
				[1, 'rgb(211, 211, 211)']
				]
			},
			stroke: '#000000',
			style: {
				color: '#000000',

				fontSize: '8pt'
			},
			states: {
				hover: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.4, '#BBB'],
							[0.6, '#888']
						]
					},
					stroke: '#000000',
					style: {
						color: 'white'
					}
				},
				select: {
					fill: {
						linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
						stops: [
							[0.1, '#000'],
							[0.3, '#333']
						]
					},
					stroke: '#000000',
					style: {
						color: 'white'
					}
				}
			}
		},
		inputStyle: {
			backgroundColor: '#333',
			color: 'silver'
		},
		labelStyle: {
			color: '#000000'
		}
	},

	navigator: {
		handles: {
			backgroundColor: '#CCCCCC',
			borderColor: '#000000'
		},
		outlineColor: '#000000',
		maskFill: 'rgba(16, 16, 16, 0.2)',
		series: {
			color: '#C9C9C9',
			lineColor: '#A2B5CD'
		}
	},

	scrollbar: {
		barBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		barBorderColor: '#CCC',
		buttonArrowColor: '#CCC',
		buttonBackgroundColor: {
				linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
				stops: [
					[0.4, '#888'],
					[0.6, '#555']
				]
			},
		buttonBorderColor: '#CCC',
		rifleColor: '#FFF',
		trackBackgroundColor: {
			linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
			stops: [
				[0, '#CFCFCF'],
				[1, '#CDC9C9']
			]
		},
		trackBorderColor: '#666'
	},

	// special colors for some of the
	legendBackgroundColor: 'rgba(0, 0, 0, 0.5)',
	legendBackgroundColorSolid: 'rgb(35, 35, 70)',
	dataLabelsColor: '#444',
	textColor: '#C0C0C0',
	maskColor: 'rgba(255,255,255,0.3)'
};

// Apply the theme
var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

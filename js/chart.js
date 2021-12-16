/*!--------------------------------------------------------------------------------

 Theme Name: Frontend Seed 5
 Author:     trungnghia112 <trungnghia112@gmail.com>

 -----------------------------------------------------------------------------------*/
;(function () {
  'use strict'

  /* function test() {
    var colorPalette = [
        '#5470c6',
        '#91cc75',
        '#fac858',
        '#ee6666',
        '#73c0de',
        '#3ba272',
        '#fc8452',
        '#9a60b4',
        '#ea7ccc',
        '#dc69aa',
        '#07a2a4',
        '#9a7fd1',
        '#588dd5',
        '#f5994e',
        '#c05050',
        '#59678c',
        '#c9ab00',
        '#7eb00a',
        '#6f5553',
        '#c14089'
      ],
      option = {
        title: { text: '', subtext: '', x: 'center' },
        color: colorPalette,
        tooltip: {
          trigger: 'item',
          zlevel: 0,
          z: 60,
          show: !0,
          showContent: !0,
          triggerOn: 'mousemove|click',
          alwaysShowContent: !1,
          displayMode: 'single',
          renderMode: 'auto',
          confine: null,
          showDelay: 0,
          hideDelay: 100,
          transitionDuration: 0.4,
          enterable: !1,
          backgroundColor: '#B9B8CE',
          shadowBlur: 10,
          textStyle: { color: '#000', fontSize: 14 },
          shadowColor: 'rgba(0, 0, 0, .2)',
          shadowOffsetX: 1,
          shadowOffsetY: 2,
          borderRadius: 4,
          borderWidth: 1,
          formatter: function (e) {
            return `<strong>${e.name}</strong>${e.data.desc}`
          }
        },
        legend: { left: 'center', bottom: 0, textStyle: { color: '#B9B8CE' } },
        toolbox: { show: !1, feature: { saveAsImage: { show: !0 } } },
        series: [
          {
            name: 'Tokenomics',
            type: 'pie',
            radius: ['20%', '50%'],
            center: ['50%', '50%'],
            avoidLabelOverlap: !0,
            data: [
              {
                value: 5,
                name: 'Seed Sale 5%',
                desc: '<br />6% at TGE<br />Lock for 3 months,<br />Linear vesting for 20 months'
              },
              {
                value: 10,
                name: 'Private Sale 10%',
                desc: '<br />8% at TGE<br />Lock for 2 months,<br />Linear vesting for 18 months'
              },
              {
                value: 1,
                name: 'Public Sale 1%',
                desc: '<br />25% at TGE<br />Vesting 25% in the 3rd, 5th, 7th month'
              },
              {
                value: 8,
                name: 'Liquidity 8%',
                desc: '<br />Liquidity listing'
              },
              {
                value: 13,
                name: 'Team 14%',
                desc: '<br />Lock for 12 months<br />Linear vesting for 18 months'
              },
              {
                value: 3,
                name: 'Advisor 3%',
                desc: '<br />Lock for 12 months<br />Linear vesting for 18 months'
              },
              {
                value: 18,
                name: 'Ecosystem 18%',
                desc: '<br />Ecosystem growth<br/>Linear vesting for 36 months'
              },
              {
                value: 13,
                name: 'Development 13%',
                desc: '<br />Game development<br />Linear vesting for 24 months'
              },
              {
                value: 20,
                name: 'Incentive 20%',
                desc: '<br />Game incentive<br />Lock 1 month<br/>Linear vesting for 24 months'
              },
              {
                value: 8,
                name: 'Marketing 8%',
                desc: '<br/>Lock for 1 month<br/>Linear vesting for 20 months'
              }
            ],
            label: {
              rotate: 0,
              show: !0,
              overflow: 'truncate',
              position: 'outer',
              alignTo: 'none',
              edgeDistance: '25%',
              bleedMargin: 10,
              distanceToLabelLine: 5,
              textStyle: {
                color: '#B9B8CE',
                fontFamily: "'Press Start 2P', cursive",
                fontSize: autoFontSize(),
                fontWeight: 'bold'
              },
              formatter: function (e) {
                return `${e.name}`
              }
            },
            labelLine: {
              show: !0,
              length: 20,
              length2: 20,
              smooth: !0,
              minTurnAngle: 90,
              maxSurfaceAngle: 90,
              lineStyle: { width: 2 }
            },
            itemStyle: {
              borderColor: '#17052c',
              borderWidth: 2,
              borderRadius: 10,
              emphasis: {
                shadowBlur: 0,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0)'
              }
            }
          }
        ]
      }

    var option = {
      title: {
        text: '',
        subtext: '',
        x: 'center'
      },
      color: colorPalette,
      tooltip: {
        trigger: 'item',
        zlevel: 0,
        z: 60,
        show: !0,
        showContent: !0,
        triggerOn: 'mousemove|click',
        alwaysShowContent: !1,
        displayMode: 'single',
        renderMode: 'auto',
        confine: null,
        showDelay: 0,
        hideDelay: 100,
        transitionDuration: 0.4,
        enterable: !1,
        backgroundColor: '#B9B8CE',
        shadowBlur: 10,
        textStyle: {
          color: '#000',
          fontSize: 14
        },
        shadowColor: 'rgba(0, 0, 0, .2)',
        shadowOffsetX: 1,
        shadowOffsetY: 2,
        borderRadius: 4,
        borderWidth: 1,
        formatter: function (e) {
          return `<strong>${e.name}</strong>${e.data.desc}`
        }
      },
      legend: {
        left: 'center',
        bottom: 0,
        textStyle: {
          color: '#B9B8CE'
        }
      },
      toolbox: {
        show: !1,
        feature: {
          saveAsImage: {
            show: !0
          }
        }
      },
      series: [
        {
          name: 'Tokenomics',
          type: 'pie',
          radius: ['20%', '50%'],
          center: ['50%', '50%'],
          avoidLabelOverlap: !0,
          data: [
            {
              value: 5,
              name: 'Seed Sale 5%',
              desc: '<br />6% at TGE<br />Lock for 3 months,<br />Linear vesting for 20 months'
            },
            {
              value: 10,
              name: 'Private Sale 10%',
              desc: '<br />8% at TGE<br />Lock for 2 months,<br />Linear vesting for 18 months'
            },
            {
              value: 1,
              name: 'Public Sale 1%',
              desc: '<br />25% at TGE<br />Vesting 25% in the 3rd, 5th, 7th month'
            },
            {
              value: 8,
              name: 'Liquidity 8%',
              desc: '<br />Liquidity listing'
            },
            {
              value: 13,
              name: 'Team 14%',
              desc: '<br />Lock for 12 months<br />Linear vesting for 18 months'
            },
            {
              value: 3,
              name: 'Advisor 3%',
              desc: '<br />Lock for 12 months<br />Linear vesting for 18 months'
            },
            {
              value: 18,
              name: 'Ecosystem 18%',
              desc: '<br />Ecosystem growth<br/>Linear vesting for 36 months'
            },
            {
              value: 13,
              name: 'Development 13%',
              desc: '<br />Game development<br />Linear vesting for 24 months'
            },
            {
              value: 20,
              name: 'Incentive 20%',
              desc: '<br />Game incentive<br />Lock 1 month<br/>Linear vesting for 24 months'
            },
            {
              value: 8,
              name: 'Marketing 8%',
              desc: '<br/>Lock for 1 month<br/>Linear vesting for 20 months'
            }
          ],
          label: {
            rotate: 0,
            show: !0,
            overflow: 'truncate',
            position: 'outer',
            alignTo: 'none',
            edgeDistance: '25%',
            bleedMargin: 10,
            distanceToLabelLine: 5,
            textStyle: {
              color: '#B9B8CE',
              fontFamily: "'Press Start 2P', cursive",
              fontSize: autoFontSize(),
              fontWeight: 'bold'
            },
            formatter: function (e) {
              return `${e.name}`
            }
          },
          labelLine: {
            show: !0,
            length: 20,
            length2: 20,
            smooth: !0,
            minTurnAngle: 90,
            maxSurfaceAngle: 90,
            lineStyle: {
              width: 2
            }
          },
          itemStyle: {
            borderColor: '#17052c',
            borderWidth: 2,
            borderRadius: 10,
            emphasis: {
              shadowBlur: 0,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0)'
            }
          }
        }
      ]
    }
  } */

  function tokenChart() {
    var chartDom = document.getElementById('js-token-chart')
    var myChart = echarts.init(chartDom)
    var option

    var colorPalette = [
      '#55ae7e',
      '#e0d261',
      '#68deef',
      '#362f9f',
      '#fef0ae',
      '#982e1d',
      '#d88362'
    ]

    /* var data = [
      ////////////////////////////////////////
      { value: 5, name: 'Reserve', desc: 'Locked for 12 months' },
      { value: 20, name: 'Token Sale', desc: 'Unlocked as per token release schedule' },
      { value: 19, name: 'Team', desc: '1 year fully locked,<br> then vest linearly over 1 year' },
      { value: 35, name: 'Ecosystem/Staking/Airdrop', desc: 'Strategic release as per game including airdrop, rewards' },
      { value: 4, name: 'Advisors', desc: '6 months fully locked,<br> then linear distribution over 12 months' },
      { value: 5, name: 'Liquidity', desc: 'Locked on CEX/DEX' },
      { value: 12, name: 'Marketing/Partnership', desc: '1 month fully locked, 15% month 2,<br> then released at 5% per month' }
      // ////////////////////////////////////////
    ] */
    var data = [
      ////////////////////////////////////////
      {
        value: 20,
        name: 'Token Sale',
        desc: 'Unlocked as per token release schedule'
      },
      {
        value: 12,
        name: 'Marketing/Partnership',
        desc: '1 month fully locked, 15% month 2,<br> then released at 5% per month'
      },
      {
        value: 35,
        name: 'Ecosystem/Staking/Airdrop',
        desc: 'Strategic release as per game including airdrop, rewards'
      },
      { value: 5, name: 'Liquidity', desc: 'Locked on CEX/DEX' },
      {
        value: 19,
        name: 'Team',
        desc: '1 year fully locked,<br> then vest linearly over 1 year'
      },
      { value: 5, name: 'Reserve', desc: 'Locked for 12 months' },
      {
        value: 4,
        name: 'Advisors',
        desc: '6 months fully locked,<br> then linear distribution over 12 months'
      }
      // ////////////////////////////////////////
    ]

    option = {
      color: colorPalette,
      tooltip: {
        trigger: 'item',
        formatter: function (e) {
          return `
            <strong>${e.name} ${e.value}%</strong> <br>
            ${e.data.desc}
          `
        }
      },
      // legend: {
      //   bottom: '5%',
      //   left: 'center',
      //   textStyle: {
      //     color: '#ffffff'
      //   }
      // },
      series: [
        {
          name: '',
          type: 'pie',
          radius: ['35%', '65%'],
          label: {
            alignTo: 'edge',
            // alignTo: 'labelLine',
            formatter: '{time|{c}%}\n{name|{b}}',
            minMargin: 5,
            edgeDistance: 10,
            lineHeight: 35,
            rich: {
              time: {
                color: '#ffffff',
                fontFamily: "'Luckiest Guy', cursive",
                fontSize: 30
              }
            },
            textStyle: {
              // color: '#ffb92d',
              color: '#ffffff',
              fontFamily: "'Arial', cursive",
              fontSize: 14
            }
          },
          labelLine: {
            lineStyle: {
              color: 'rgba(255, 255, 255, 1)'
            },
            length: 15,
            length2: 0,
            maxSurfaceAngle: 80
          },
          labelLayout: function (params) {
            const isLeft = params.labelRect.x < myChart.getWidth() / 2
            const points = params.labelLinePoints
            // Update the end point.
            points[2][0] = isLeft
              ? params.labelRect.x
              : params.labelRect.x + params.labelRect.width
            return {
              labelLinePoints: points
            }
          },
          data: data
        }
      ]
    }

    if (option && typeof option === 'object') {
      if (window.screen.width < 768) {
        option = {
          color: colorPalette,
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['30%', '45%'],
              data: data,
              label: {
                formatter: '{time|{c}%}',
                rich: {
                  time: {
                    color: '#ffffff',
                    fontFamily: "'Luckiest Guy', cursive",
                    fontSize: 20
                  }
                }
              }
            }
          ],
          legend: {
            orient: 'vertical',
            left: 'left',
            bottom: '-5%',
            textStyle: {
              color: '#ffffff'
            },
            formatter: function (name) {
              const dataIndex = data.findIndex(v => v.name == name)
              return `${data[dataIndex].value}% - ${data[dataIndex].name}`;
            }
          }
        }
      } else {
        option = {
          color: colorPalette,
          tooltip: {
            trigger: 'item',
            formatter: function (e) {
              return `
                <strong>${e.name} ${e.value}%</strong> <br>
                ${e.data.desc}
              `
            }
          },
          series: [
            {
              name: '',
              type: 'pie',
              radius: ['35%', '65%'],
              label: {
                alignTo: 'edge',
                // alignTo: 'labelLine',
                formatter: '{time|{c}%}\n{name|{b}}',
                minMargin: 5,
                edgeDistance: 10,
                lineHeight: 35,
                rich: {
                  time: {
                    color: '#ffffff',
                    fontFamily: "'Luckiest Guy', cursive",
                    fontSize: 30
                  }
                },
                textStyle: {
                  // color: '#ffb92d',
                  color: '#ffffff',
                  fontFamily: "'Arial', cursive",
                  fontSize: 14
                }
              },
              labelLine: {
                lineStyle: {
                  color: 'rgba(255, 255, 255, 1)'
                },
                length: 15,
                length2: 0,
                maxSurfaceAngle: 80
              },
              labelLayout: function (params) {
                const isLeft = params.labelRect.x < myChart.getWidth() / 2
                const points = params.labelLinePoints
                // Update the end point.
                points[2][0] = isLeft
                  ? params.labelRect.x
                  : params.labelRect.x + params.labelRect.width
                return {
                  labelLinePoints: points
                }
              },
              data: data
            }
          ]
        }
      }
      myChart.setOption(option)
    }

    window.addEventListener('resize', function () {
      if (myChart != null && myChart != undefined) {
        myChart.resize()
      }
    })
  }
  tokenChart()
})()

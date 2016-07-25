 google.setOnLoadCallback(drawChart);

      function drawChart() {
        var data_items_ordered = new google.visualization.DataTable();
        data_items_ordered.addColumn('string', 'From');
        data_items_ordered.addColumn('string', 'To');
        data_items_ordered.addColumn('number', 'Items Ordered');
        data_items_ordered.addRows([
          ['Consumer Sellback', 'Buyback Marketplace', 635388],
          ['Liquidate', 'Buyback Marketplace', 244576],
          ['Sellback API', 'Buyback Marketplace', 28130],
          ['Enterprise Sellers', 'Sales Marketplace', 1481997],
          ['Sales Marketplace', 'Marketplace Purchasing', 303020],
          ['Marketplace Purchasing', 'Buyback Marketplace', 303020],
          ['Buyback Marketplace', 'Enterprise Buyers', 1211114],
          ['Sales Marketplace', 'Consumer Sales', 525266],
          ['Sales Marketplace', 'Consumer Rentals', 226605],
          ['Sales Marketplace', 'Purchasing API', 27878],
          ['Sales Marketplace', 'Rental Buyback', 399228]
        ]);

        var data_gms = new google.visualization.DataTable();
        data_gms.addColumn('string', 'From');
        data_gms.addColumn('string', 'To');
        data_gms.addColumn('number', 'GMS Ordered');
        data_gms.addRows([
          ['Consumer Sellback', 'Buyback Marketplace', 24656371],
          ['Liquidation', 'Buyback Marketplace', 7557592],
          ['Sellback API', 'Buyback Marketplace', 1264221],
          ['Marketplace Sellers', 'Sales Marketplace', 50030003],
          ['Sales Marketplace', 'Marketplace Purchasing', 14976551],
          ['Marketplace Purchasing', 'Buyback Marketplace', 14976551],
          ['Buyback Marketplace', 'Buyers', 48454735],
          ['Sales Marketplace', 'Consumer Sales', 14274332],
          ['Sales Marketplace', 'Consumer Rentals', 7217871],
          ['Sales Marketplace', 'Purchasing API', 796980],
          ['Sales Marketplace', 'Rental Buyback', 12764269]
        ]);

        var data_items_fulfilled = new google.visualization.DataTable();
        data_items_fulfilled.addColumn('string', 'From');
        data_items_fulfilled.addColumn('string', 'To');
        data_items_fulfilled.addColumn('number', 'Items Fulfilled');
        data_items_fulfilled.addRows([
          ['Consumer Sellback', 'Buyback Marketplace', 380745],
          ['Liquidation', 'Buyback Marketplace', 117603],
          ['Sellback API', 'Buyback Marketplace', 9008],
          ['Marketplace Sellers', 'Sales Marketplace', 1261442],
          ['Sales Marketplace', 'Marketplace Purchasing', 195746],
          ['Marketplace Purchasing', 'Buyback Marketplace', 195746],
          ['Buyback Marketplace', 'Buyers', 703102],
          ['Sales Marketplace', 'Consumer Sales', 476223],
          ['Sales Marketplace', 'Consumer Rentals', 195836],
          ['Sales Marketplace', 'Purchasing API', 25212],
          ['Sales Marketplace', 'Rental Buyback', 368424]
        ]);

        var data_revenue = new google.visualization.DataTable();
        data_revenue.addColumn('string', 'From');
        data_revenue.addColumn('string', 'To');
        data_revenue.addColumn('number', 'Revenue');
        data_revenue.addRows([
          ['Consumer Sellback', 'Buyback Marketplace', 18768251],
          ['Liquidation', 'Buyback Marketplace', 5060061],
          ['Sellback API', 'Buyback Marketplace', 507638],
          ['Marketplace Sellers', 'Sales Marketplace', 31241308],
          ['Sales Marketplace', 'Marketplace Purchasing', 13244304],
          ['Marketplace Purchasing', 'Buyback Marketplace', 13244304],
          ['Buyback Marketplace', 'Buyers', 37580254],
          ['Sales Marketplace', 'Consumer Sales', 2646397],
          ['Sales Marketplace', 'Consumer Rentals', 1088269],
          ['Sales Marketplace', 'Purchasing API', 722303],
          ['Sales Marketplace', 'Rental Buyback', 13540034]
        ]);

        var data_cprofit = new google.visualization.DataTable();
        data_cprofit.addColumn('string', 'From');
        data_cprofit.addColumn('string', 'To');
        data_cprofit.addColumn('number', 'Contribution Profit');
        data_cprofit.addRows([
          ['Consumer Sellback', 'Buyback Marketplace', 1416871],
          ['Liquidation', 'Buyback Marketplace', 533339],
          ['Sellback API', 'Buyback Marketplace', 74716],
          ['Marketplace Sellers', 'Sales Marketplace', 1361231],
          ['Sales Marketplace', 'Marketplace Purchasing', 216580],
          ['Marketplace Purchasing', 'Buyback Marketplace', 216580],
          ['Buyback Marketplace', 'Buyers', 2241506],
          ['Sales Marketplace', 'Consumer Sales', 972490],
          ['Sales Marketplace', 'Consumer Rentals', 399914],
          ['Sales Marketplace', 'Purchasing API', 135157],
          ['Sales Marketplace', 'Rental Buyback', -362910]
        ]);

        // Sets chart options.
        var options = {
          width: 600,
        };

        // Instantiates and draws our chart, passing in some options.
        var chart_items_ordered = new google.visualization.Sankey(document.getElementById('sankey_items_ordered'));
        chart_items_ordered.draw(data_items_ordered, options);
        var chart_gms = new google.visualization.Sankey(document.getElementById('sankey_gms_ordered'));
        chart_gms.draw(data_gms, options);
        var chart_items_fulfilled = new google.visualization.Sankey(document.getElementById('sankey_items_fulfilled'));
        chart_items_fulfilled.draw(data_items_fulfilled, options);
        var chart_revenue = new google.visualization.Sankey(document.getElementById('sankey_revenue'));
        chart_revenue.draw(data_revenue, options);
        var chart_cprofit = new google.visualization.Sankey(document.getElementById('sankey_cprofit'));
        chart_cprofit.draw(data_cprofit, options);
      }

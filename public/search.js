function doSearch() {
        var searchText = document.getElementById('searchTerm').value;
        var targetTable = document.getElementById('dataTable');
        var targetTableColCount;

        //Loop through table rows
        for (var rowIndex = 0; rowIndex < targetTable.rows.length; rowIndex++) {
          var rowData = '';

          //Get column count from header row
          if (rowIndex == 0) {
            targetTableColCount = targetTable.rows.item(rowIndex).cells.length;
            continue; //do not execute further code for header row.
          }

          //Process data rows. (rowIndex >= 1)
          for (var colIndex = 0; colIndex < targetTableColCount; colIndex++) {
            var cellText = '';

            if (navigator.appName == 'Microsoft Internet Explorer')
              cellText = targetTable.rows.item(rowIndex).cells.item(colIndex).innerText;
            else
              cellText = targetTable.rows.item(rowIndex).cells.item(colIndex).textContent;

            rowData += cellText;
          }

          // Make search case insensitive.
          rowData = rowData.toLowerCase().trim();
          searchText = searchText.toLowerCase().trim();

          //If search term is not found in row data
          //then hide the row, else show
          if (rowData.indexOf(searchText) == -1)
            targetTable.rows.item(rowIndex).style.display = 'none';

          else
            targetTable.rows.item(rowIndex).style.display = 'table-row';
        }
      }
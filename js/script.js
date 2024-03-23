
    function toggleDetails(detailsId) {
      var detailsElements = document.querySelectorAll('details');
      detailsElements.forEach(function(details) {
        if (details.id !== detailsId) {
          details.removeAttribute('open');
        }
      });
    }
  
    function showBlock(blockId) {
        // Скрываем все блоки
        var blocks = document.querySelectorAll('.block');
        blocks.forEach(function(block) {
          block.style.display = 'none';
        });
  
        // Показываем только выбранный блок
        var selectedBlock = document.getElementById(blockId);
        selectedBlock.style.display = 'block';
      }
      window.onload = function() {
        showBlock('block1', 'button1');
      };
  
      function showBlock(blockId, buttonId) {
        // Скрываем все блоки
        var blocks = document.querySelectorAll('.block');
        blocks.forEach(function(block) {
          block.style.display = 'none';
        });
  
        // Показываем только выбранный блок
        var selectedBlock = document.getElementById(blockId);
        selectedBlock.style.display = 'block';
  
        // Удаляем подсветку со всех кнопок
        var buttons = document.querySelectorAll('button');
        buttons.forEach(function(button) {
          button.classList.remove('active');
        });
  
        // Добавляем подсветку к выбранной кнопке
        var selectedButton = document.getElementById(buttonId);
        selectedButton.classList.add('active');
      }
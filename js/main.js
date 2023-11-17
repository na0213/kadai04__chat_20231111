document.addEventListener('DOMContentLoaded', function() {
    var savedMessages = JSON.parse(localStorage.getItem('savedMessages')) || [];
    var savedMessagesDiv = document.getElementById('savedMessages');

    if(savedMessages.length > 0) {
        let html = '';
        savedMessages.forEach(function(message, index) {
            html += `
            <div class="storage_content">
              <div class="message_content">
                <p class="storage_message">${message}</p>
                <button class="storage_delete" data-index="${index}">削除</button>
              </div>
            </div>
            `;
        });
        savedMessagesDiv.innerHTML = html;

        $('.storage_delete').on("click", function() {
            var index = $(this).data('index');
            savedMessages.splice(index, 1);
            localStorage.setItem('savedMessages', JSON.stringify(savedMessages));
            location.reload();
        });
    } else {
        savedMessagesDiv.innerHTML = '保存されたメッセージはありません。';
    }
});

// 全て削除ボタンのクリックイベント
$("#clear").on("click", function () {
    localStorage.removeItem('savedMessages');
    location.reload();
});
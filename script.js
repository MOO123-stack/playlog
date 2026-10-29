
const gameList = document.querySelector("#game-list");

const originalGames = [...gameList.children];

const sortButtons = document.querySelectorAll("[data-sort]");

sortButtons.forEach((button) => {
  button.addEventListener("click", () => {

    // เปลี่ยนสถานะปุ่มที่เลือก
    sortButtons.forEach((btn) => {
      btn.classList.toggle("selected", btn === button);
    });

    const sortMode = button.dataset.sort;

    const sortedGames = [...originalGames];

    if (sortMode === "rank") {
      // เรียงตามอันดับ 1-10
      sortedGames.sort((a, b) => {
        return Number(a.dataset.rank) -
               Number(b.dataset.rank);
      });
    }

    else if (sortMode === "name") {
      // เรียงตามหมวดหมู่เกม A-Z
      sortedGames.sort((a, b) => {
        return a.dataset.category.localeCompare(
          b.dataset.category
        );
      });
    }

    else if (sortMode === "price") {
      // เรียงจากราคาน้อยไปมาก
      sortedGames.sort((a, b) => {
        return Number(a.dataset.price) -
               Number(b.dataset.price);
      });
    }

    // แสดงผลลำดับใหม่
    gameList.replaceChildren(...sortedGames);

  });
});

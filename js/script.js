const params = new URLSearchParams(window.location.search);
const id = params.get("id");

const product = products.find(p => p.id === id);

const container = document.getElementById("product-detail");

if (product) {
  container.innerHTML = `
    <div class="row align-items-center">

      <div class="col-md-6">
        <img src="${product.img}" class="img-fluid rounded shadow">
      </div>

      <div class="col-md-6">
        <h2>${product.name}</h2>
        <h4 class="text-danger">${product.price}</h4>
        <p>${product.desc}</p>

        <a href="javascript:history.back()" class="btn btn-secondary mt-3">
          Quay lại
        </a>
      </div>

    </div>
  `;
} else {
  container.innerHTML = `<h3 class="text-danger">Không tìm thấy sản phẩm!</h3>`;
}
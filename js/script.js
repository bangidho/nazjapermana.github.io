$('#lanjut1').on('click', function(){
  Swal.fire({
    title: 'Seriusan nih dilanjut?',
    // text: "You won't be able to revert this!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#EEBAB2',
    cancelButtonColor: '#E6A57E',
    confirmButtonText: 'Lanjut',
    cancelButtonText: 'Ngga ah'
  }).then((result) => {
    if (result.isConfirmed) {
      lanjut2();
    }else{
      Swal.fire(
        'Terimakasih ayang!',
        'Maaf ya sayang',
        'info'
      )
    }
  })
})  

$('#kado1').on('click', function(){
  Swal.fire({
      title: 'Apa ya hadiahnya?',
      text: "Sayang aku punya sesuatu untuk kamu hihi. Mau tau ga??",
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#BEB4C5',
      cancelButtonColor: '#F5BFD2',
      confirmButtonText: 'Mau',
      cancelButtonText: 'Engga',
    }).then((result) => {
      if(result.isConfirmed){
        Swal.fire(
          'Rahasiaaaa!! 😝',
          '',
          'success'
        )
      }else{
        Swal.fire(
          'Yaudah kalo gamau mah 😋',
          '',
          'error'
        )
      }
    })
})

function lanjut2(){
  Swal.fire(
    'Okay Mari Kita Lanjut!',
    '',
    'success'
  ).then((result) => {
    if(result.isConfirmed){
      Swal.fire(
        'Oiyah sebelum lanjut',
        'Untuk lanjut ke halaman berikutnya kamu cari sesuatu yang ada love love nya apapun itu terus klik aja, Ok?',
        'info'
      )
      setTimeout(function(){
        $('#second').removeClass('d-none');
        $('#first').addClass('d-none');
      }, 2000);
    }
  });
}

$('#balon').on('click', function(){
  $('#third').removeClass('d-none');
  $('#second').addClass('d-none');
});

function qna(){
  Swal.fire({
    title: 'Hay sayangggg!!!',
    text: "Kita raramean yuk 🥰 jawab pertanyaan aku",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#BEB4C5',
    cancelButtonColor: '#F5BFD2',
    confirmButtonText: 'Hayu',
    cancelButtonText: 'Gamau',
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire('Jawabnya jujur lohh!').then((res) => {
        if (res) {
          Swal.fire({
            icon: 'error',
            title: 'Awas kalo kamu boong jawabnya',
          }).then((res) => {
            if (res) {
              q1();
            }
          })
        }
      });
    }else{
      Swal.fire(
        'Okedeh',
        'Terimakasih sayang atas waktunya',
        'success'
      )
    }
  })
}

var nama;
var rasa;
var harapan;

function q1(){
  Swal.fire({
    title: 'Masukin nama kamu dulu dong',
    input: 'text',
    backdrop: `
      rgba(0,0,123,0.4)
      url("/images/nyan-cat.gif")
      left top
      no-repeat
    `,
    inputPlaceholder: 'Nama kamu yah',
    inputValidator: (value) => {
      if (!value) {
        return 'Isi dulu dong :('
      }
    }
  }).then((result) => {
    if (result.value) {
      nama = result.value;
      Swal.fire({
        title: 'Makasih ' + nama + ' sayang!',
        text: 'Kita lanjut',
        icon: 'success',
        confirmButtonText: 'Lanjut'
      }).then((result) => {
        if (result) {
          q2();
        }
      })
    }
  })
}

function q2(){
  Swal.fire({
    title: 'Sayang aku Ga?',
    inputLabel: 'Seberapa sayang kamu sama aku?',
    input: 'range',
    inputAttributes: {
      min: 25,
      max: 100,
      step: 1
    },
    inputValue: 25,
    confirmButtonText: 'Jawab'
  }).then((result) => {
    if (result.value) {
      rasa = result.value;
      q3();
    }
  })
}

function q3(){
  Swal.fire({
    title: 'Apasih harapan kamu?',
    text: 'Sebutkan 1 aja harapan kamu di usia sekarang',
    input: 'textarea',
    inputPlaceholder: 'Lebih juga gapapa ya sayangku ' + nama,
  }).then((res) => {
    if (res.value) {
      harapan = res.value;
      $('#third').addClass('d-none');
      $('#fourth').removeClass('d-none');
      $('#nama').text(nama.charAt(0).toUpperCase() + nama.slice(1));
      $('#rasa').text(rasa + '%');
      $('#harapan').text(harapan);
    }
  })
}

function run(){
  $('#first').addClass('d-none');
  $('#second').addClass('d-none');
  $('#third').addClass('d-none');
  $('#fourth').addClass('d-none');
  $('#anim_last').removeClass('d-none');
  
}

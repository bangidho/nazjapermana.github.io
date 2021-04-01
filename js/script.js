$('#lanjut1').on('click', function(){
  Swal.fire({
    title: 'Seriusan nih dilanjut?',
    // text: "You won't be able to revert this!",
    icon: 'question',
    showCancelButton: true,
    confirmButtonColor: '#F4CFDF',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Lanjut',
    cancelButtonText: 'Ngga ah'
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Ok Kita Lanjut!',
        '',
        'success'
      )
      $('#second').removeClass('d-none');
      $('#first').addClass('d-none');
    }else{
      Swal.fire(
        'Terimakasih ayang!',
        'Maaf ya sayang cuma kaya gini hadiahnya🥲',
        'info'
      )
    }
  })
})


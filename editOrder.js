addEventListener('keydown', function(e) {
			if (e.key == 'q' && e.altKey) {
				let expresstype1 = document.querySelector('#expresstype1')
				expresstype1.value = 288
				$(expresstype1).trigger("change");

			}
		})
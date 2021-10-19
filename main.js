Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById('Pdiv');
Webcam.attach('#Pdiv');

function takeimage() {
    Webcam.snap(function (data_uri) {
        document.getElementById("Odiv").innerHTML = '<img id="capture_image" src="' + data_uri + '">';
    });
}
console.log('ml5 version:', ml5.version);
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/ieeJkXCba/', modelLoaded);
        function modelLoaded() {
            console.log('modelLoaded');
        }

        function modelLoaded() {
            console.log('modelLoaded');
        }

        function calimage() {
            img = document.getElementById('capture_image');
            classifier.classify(img, gotresults);

        }

        function gotresults(error, results) {
            if (error) {
                console.error(error);
            } else {
                console.log(results);
                document.getElementById('object_name').innerHTML = results[0].label;
                document.getElementById('accuracy_percentage').innerHTML = results[0].confidence.toFixed(2);
            }
        }
<?php
$xmlLink = 'http://ftp.geoinfo.msl.mt.gov/Documents/Metadata/GIS_Inventory/35524afc-669b-4614-9f44-43506ae21a1d.xml';

// to get content from the link
$xmlContent = file_get_contents($xmlLink);

if ($xmlContent !== false) {
    // to load the content
    $xml = simplexml_load_string($xmlContent);

    // it converts XML to an array
    $jsonArray = json_decode(json_encode($xml), true);

    // array to json
    $json = json_encode($jsonArray, JSON_PRETTY_PRINT);

    echo $json;
} else {
    echo "Failed to retrieve XML content.";
}
?>
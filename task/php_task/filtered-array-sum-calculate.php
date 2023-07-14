<?php
function filterPricesList($data, $threshold) {
    $filtered = array();
    foreach ($data as $id => $price) {
        if ($price > $threshold) {
            $filtered[$id] = $price;
        }
    }
    return $filtered;
}

function calculateTotalSum($data) {
    $totalSum = array_sum($data);
    return $totalSum;
}

// Example usage
$pricesList = array(
    "001" => 100,
    "002" => 200,
    "003" => 300,
    "004" => 400
);
$threshold = 250;

$filteredPrices = filterPricesList($pricesList, $threshold);
$totalSum = calculateTotalSum($filteredPrices);

// Output the filtered prices and total sum
echo "Filtered prices:\n";
print_r($filteredPrices);

echo "Total sum: $totalSum";
?>
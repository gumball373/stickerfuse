<?php
// echo "ran";
$products = file_get_contents("./lockhead/products.txt");

$list = explode('>',$products);

$temp = array("1", "2", "3", "4");
$l = count($list);

for($i = 0; $i < $l; $i++){

$temp = explode(';', $list[$i]);

// echo $temp[$i];

echo "<div class=\"grid-item\">
	<a href=\"$temp[2]\">
		<img class=\"product-image\" src=\"$temp[1]\" title=\"$temp[0]\" alt=\"$temp[3]\" />
		<div class=\"product-name\">$temp[0]</div>
	</a>
</div>";
}

?>
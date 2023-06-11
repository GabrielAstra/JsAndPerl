use strict;
use warnings;

sub eh_primo {
    my $numero = shift;

    if ($numero < 2) {
        return 0;
    }

    for my $divisor (2 .. int(sqrt($numero))) {
        if ($numero % $divisor == 0) {
            return 0;
        }
    }

    return 1;
}

my $numero = 17;

if (eh_primo($numero)) {
    print "$numero é primo.\n";
} else {
    print "$numero não é primo.\n";
}

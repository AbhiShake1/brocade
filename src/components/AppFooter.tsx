import {ActionIcon, Container, createStyles, rem, Text} from '@mantine/core';
import {IconBrandFacebook, IconBrandInstagram, IconBrandTwitter} from "@tabler/icons-react";

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: rem(120),
        paddingTop: `calc(${theme.spacing.xl} * 2)`,
        paddingBottom: `calc(${theme.spacing.xl} * 2)`,
        backgroundColor: 'black',
        borderTop: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
        }`,
    },

    logo: {
        maxWidth: rem(200),

        [theme.fn.smallerThan('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    description: {
        marginTop: rem(5),

        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
            textAlign: 'center',
        },
    },

    inner: {
        display: 'flex',
        justifyContent: 'space-between',

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
            alignItems: 'center',
        },
    },

    groups: {
        display: 'flex',
        flexWrap: 'wrap',

        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },

    wrapper: {
        width: rem(190),
    },

    link: {
        display: 'block',
        color: theme.colorScheme === 'dark' ? theme.colors.dark[1] : theme.colors.gray[6],
        fontSize: theme.fontSizes.sm,
        paddingTop: rem(3),
        paddingBottom: rem(3),

        '&:hover': {
            textDecoration: 'underline',
        },
    },

    title: {
        fontSize: theme.fontSizes.lg,
        fontWeight: 700,
        marginBottom: `calc(${theme.spacing.xs} / 2)`,
        color: theme.white,
    },

    afterFooter: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: theme.spacing.xl,
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${
            theme.colors.dark[4]
        }`,

        [theme.fn.smallerThan('sm')]: {
            flexDirection: 'column',
        },
    },

    social: {
        [theme.fn.smallerThan('sm')]: {
            marginTop: theme.spacing.xs,
        },
    },
}));

interface FooterLinksProps {
    data: {
        title: string;
        links: { label: string; link: string }[]
    }[];
}

function FooterLinks({data}: FooterLinksProps) {
    const {classes} = useStyles()

    const groups = data.map((group) => {
        const links = group.links.map((link, index) => (
            <Text<'a'>
                key={index}
                className={classes.link}
                component="a"
                href={link.link}
                onClick={(event) => event.preventDefault()}
            >
                {link.label}
            </Text>
        ))

        return (
            <div className={classes.wrapper} key={group.title}>
                <Text className={classes.title}>{group.title}</Text>
                {links}
            </div>
        )
    })

    return (
        <footer className={classes.footer}>
            <Container className={classes.inner}>
                <div className={classes.groups}>{groups}</div>
                <div>
                    <Text className={classes.title}>FOLLOW US</Text>
                    <div className='flex flex-row'>
                        <a href='https://www.facebook.com/brocadeofficial/' target='_blank'>
                            <ActionIcon size="lg">
                                <IconBrandFacebook size="1.5rem" stroke={1.5}/>
                            </ActionIcon>
                        </a>
                        <a href='https://www.instagram.com/brocadeofficial/' target='_blank'>
                            <ActionIcon size="lg">
                                <IconBrandInstagram size="1.5rem" stroke={1.5}/>
                            </ActionIcon>
                        </a>
                        <a href='https://twitter.com/i/flow/login?redirect_after_login=%2FBrocade' target='_blank'>
                            <ActionIcon size="lg">
                                <IconBrandTwitter size="1.5rem" stroke={1.5}/>
                            </ActionIcon>
                        </a>
                    </div>
                </div>
            </Container>
        </footer>
    );
}

export function AppFooter() {
    return <FooterLinks data={[
        {
            title: 'FLAGSHIP STORIES',
            links: [
                {
                    label: 'Boudha',
                    link: '',
                },
                {
                    label: 'Jhamsikhel',
                    link: '',
                },
                {
                    label: 'Pokhara',
                    link: '',
                },
                {
                    label: 'Chitwan',
                    link: '',
                },
            ],
        },
        {
            title: 'NAVIGATION',
            links: [
                {
                    label: 'Home',
                    link: '',
                },
                {
                    label: 'Search',
                    link: '',
                },
                {
                    label: 'Wishlist',
                    link: '',
                },
                {
                    label: 'Cart',
                    link: '',
                },
                {
                    label: 'Profile',
                    link: '',
                },
                {
                    label: 'Help Centre',
                    link: '',
                },
            ],
        },
        {
            title: 'LEGAL',
            links: [
                {
                    label: 'Payment Policy',
                    link: '',
                },
                {
                    label: 'Terms of Service',
                    link: '',
                },
                {
                    label: 'Affiliate Programs',
                    link: '',
                },
                {
                    label: 'FAQ',
                    link: '',
                },
            ],
        },
        {
            title: 'TALK TO US',
            links: [
                {
                    label: '01-4813643',
                    link: '',
                },
            ],
        },
    ]}/>
}
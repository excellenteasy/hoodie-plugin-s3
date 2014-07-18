# Hoodie Plugin S3

This plugin can hopefully provide all the functionality of the `aws-sdk` npm module to your offline first, noBackend app. For that goal, we have a [Dreamcode]() document that itself needs more big thinking. Below we give you the current state of the plugin.

## Disclaimer / state of this plugin

This plugin is in its infancy. This is what we will add first:

In the Admin Dashboard: Add access key, access secret, region, bucket name, prefix path (all input fields). Also a text field that allows you to write a file directly to the S3 bucket for testing.

In the Frontend/Backend: Front- and backend need to provide the same API, just from two points of view. We need to be able to write content to the specified S3 bucket:/prefix_path. For the sake of simplicity, we will write all content to the same file, namely the username.json.

This is super basic. If there is interest in this (and some of you help) the plugin will change a lot and get much more universal and feature rich over time. We will use semver for tagged releases, so you can at least rely on the version you use at the time to keep as it is. Other than that, no guarantees for now ;)

## Install

As there is not version release, yet, you cannot install or use anything. We will add instructions as soon as we release something.

## Contributing

If you want to help this project in any way or form, your contribution is welcome. Best means of communication for now is issues or you sent an email to [hoodie@excellenteasy.com](mailto:hoodie@excellenteasy.com).

## Authors

## Author
| [![twitter/davidpfahler](http://www.gravatar.com/avatar/bd6985f75d8c77a4847ce288adebeb82?s=70)](https://twitter.com/davidpfahler "Follow @davidpfahler on Twitter") |
|---|
| [David Pfahler](http://excellenteasy.com/) |
# Install iOS Provisioning Profile

Forked from: `@mobileactions/install-ios-provisioning-profile`

Run the following command to copy base64 encoded format of your provisioning file into your system clipboard:

```bash
base64 <PROVISIONING PROFILE FILE> | pbcopy
```

Then paste it into your Github secrets.

Example: 

```
steps:
- name: Install provisioning profile
    uses: dietdoctor/install-ios-provisioning-profile@latest
    with:
       profile-base64: ${{ secrets.PROVISIONING_PROFILE }}
```
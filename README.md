# Install iOS Provisioning Profile

Forked from: `@mobileactions/install-ios-provisioning-profile`

Run the following command to copy base64 encoded format of your provisioning file into your system clipboard:

```bash
base64 <PROVISIONING PROFILE FILE> | pbcopy
```

Then paste it into yout Github secrets.

Example: 

```
steps:
- name: Install provisioning profile
    uses: dietdoctor/install-ios-provisioning-profile@v1
    with:
       profile-base64: ${{ secrets.PROVISIONING_PROFILE }}
```
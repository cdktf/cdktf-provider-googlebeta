# `googleFirebaseHostingCustomDomain` Submodule <a name="`googleFirebaseHostingCustomDomain` Submodule" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleFirebaseHostingCustomDomain <a name="GoogleFirebaseHostingCustomDomain" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain google_firebase_hosting_custom_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_domain: str,
  site_id: str,
  cert_preference: str = None,
  id: str = None,
  project: str = None,
  redirect_target: str = None,
  timeouts: GoogleFirebaseHostingCustomDomainTimeouts = None,
  wait_dns_verification: typing.Union[bool, IResolvable] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.customDomain">custom_domain</a></code> | <code>str</code> | The ID of the 'CustomDomain', which is the domain name you'd like to use with Firebase Hosting. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.siteId">site_id</a></code> | <code>str</code> | The ID of the site in which to create this custom domain association. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.certPreference">cert_preference</a></code> | <code>str</code> | A field that lets you specify which SSL certificate type Hosting creates for your domain name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#id GoogleFirebaseHostingCustomDomain#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#project GoogleFirebaseHostingCustomDomain#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.redirectTarget">redirect_target</a></code> | <code>str</code> | A domain name that this CustomDomain should direct traffic towards. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.waitDnsVerification">wait_dns_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, Terraform will wait for DNS records to be fully resolved on the 'CustomDomain'. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_domain`<sup>Required</sup> <a name="custom_domain" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.customDomain"></a>

- *Type:* str

The ID of the 'CustomDomain', which is the domain name you'd like to use with Firebase Hosting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#custom_domain GoogleFirebaseHostingCustomDomain#custom_domain}

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.siteId"></a>

- *Type:* str

The ID of the site in which to create this custom domain association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#site_id GoogleFirebaseHostingCustomDomain#site_id}

---

##### `cert_preference`<sup>Optional</sup> <a name="cert_preference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.certPreference"></a>

- *Type:* str

A field that lets you specify which SSL certificate type Hosting creates for your domain name.

Spark plan 'CustomDomain's only have access to the
'GROUPED' cert type, while Blaze plan can select any option. Possible values: ["GROUPED", "PROJECT_GROUPED", "DEDICATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#cert_preference GoogleFirebaseHostingCustomDomain#cert_preference}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#id GoogleFirebaseHostingCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#project GoogleFirebaseHostingCustomDomain#project}.

---

##### `redirect_target`<sup>Optional</sup> <a name="redirect_target" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.redirectTarget"></a>

- *Type:* str

A domain name that this CustomDomain should direct traffic towards.

If
specified, Hosting will respond to requests against this CustomDomain
with an HTTP 301 code, and route traffic to the specified 'redirect_target'
instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#redirect_target GoogleFirebaseHostingCustomDomain#redirect_target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#timeouts GoogleFirebaseHostingCustomDomain#timeouts}

---

##### `wait_dns_verification`<sup>Optional</sup> <a name="wait_dns_verification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.Initializer.parameter.waitDnsVerification"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Terraform will wait for DNS records to be fully resolved on the 'CustomDomain'.

If false, Terraform will not wait for DNS records on the 'CustomDomain'. Any issues in
the 'CustomDomain' will be returned and stored in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#wait_dns_verification GoogleFirebaseHostingCustomDomain#wait_dns_verification}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetCertPreference">reset_cert_preference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetRedirectTarget">reset_redirect_target</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetWaitDnsVerification">reset_wait_dns_verification</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#create GoogleFirebaseHostingCustomDomain#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#delete GoogleFirebaseHostingCustomDomain#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#update GoogleFirebaseHostingCustomDomain#update}.

---

##### `reset_cert_preference` <a name="reset_cert_preference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetCertPreference"></a>

```python
def reset_cert_preference() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_redirect_target` <a name="reset_redirect_target" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetRedirectTarget"></a>

```python
def reset_redirect_target() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_wait_dns_verification` <a name="reset_wait_dns_verification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.resetWaitDnsVerification"></a>

```python
def reset_wait_dns_verification() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleFirebaseHostingCustomDomain resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleFirebaseHostingCustomDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleFirebaseHostingCustomDomain to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleFirebaseHostingCustomDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleFirebaseHostingCustomDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.cert">cert</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList">GoogleFirebaseHostingCustomDomainCertList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.deleteTime">delete_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.expireTime">expire_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.hostState">host_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.issues">issues</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList">GoogleFirebaseHostingCustomDomainIssuesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.ownershipState">ownership_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.requiredDnsUpdates">required_dns_updates</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference">GoogleFirebaseHostingCustomDomainTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.certPreferenceInput">cert_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.customDomainInput">custom_domain_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.redirectTargetInput">redirect_target_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.siteIdInput">site_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.waitDnsVerificationInput">wait_dns_verification_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.certPreference">cert_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.customDomain">custom_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.project">project</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.redirectTarget">redirect_target</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.siteId">site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.waitDnsVerification">wait_dns_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.cert"></a>

```python
cert: GoogleFirebaseHostingCustomDomainCertList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList">GoogleFirebaseHostingCustomDomainCertList</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `delete_time`<sup>Required</sup> <a name="delete_time" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.deleteTime"></a>

```python
delete_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `expire_time`<sup>Required</sup> <a name="expire_time" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.expireTime"></a>

```python
expire_time: str
```

- *Type:* str

---

##### `host_state`<sup>Required</sup> <a name="host_state" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.hostState"></a>

```python
host_state: str
```

- *Type:* str

---

##### `issues`<sup>Required</sup> <a name="issues" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.issues"></a>

```python
issues: GoogleFirebaseHostingCustomDomainIssuesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList">GoogleFirebaseHostingCustomDomainIssuesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `ownership_state`<sup>Required</sup> <a name="ownership_state" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.ownershipState"></a>

```python
ownership_state: str
```

- *Type:* str

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `required_dns_updates`<sup>Required</sup> <a name="required_dns_updates" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.requiredDnsUpdates"></a>

```python
required_dns_updates: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.timeouts"></a>

```python
timeouts: GoogleFirebaseHostingCustomDomainTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference">GoogleFirebaseHostingCustomDomainTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `cert_preference_input`<sup>Optional</sup> <a name="cert_preference_input" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.certPreferenceInput"></a>

```python
cert_preference_input: str
```

- *Type:* str

---

##### `custom_domain_input`<sup>Optional</sup> <a name="custom_domain_input" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.customDomainInput"></a>

```python
custom_domain_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `redirect_target_input`<sup>Optional</sup> <a name="redirect_target_input" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.redirectTargetInput"></a>

```python
redirect_target_input: str
```

- *Type:* str

---

##### `site_id_input`<sup>Optional</sup> <a name="site_id_input" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.siteIdInput"></a>

```python
site_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleFirebaseHostingCustomDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>]

---

##### `wait_dns_verification_input`<sup>Optional</sup> <a name="wait_dns_verification_input" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.waitDnsVerificationInput"></a>

```python
wait_dns_verification_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cert_preference`<sup>Required</sup> <a name="cert_preference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.certPreference"></a>

```python
cert_preference: str
```

- *Type:* str

---

##### `custom_domain`<sup>Required</sup> <a name="custom_domain" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.customDomain"></a>

```python
custom_domain: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.project"></a>

```python
project: str
```

- *Type:* str

---

##### `redirect_target`<sup>Required</sup> <a name="redirect_target" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.redirectTarget"></a>

```python
redirect_target: str
```

- *Type:* str

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

---

##### `wait_dns_verification`<sup>Required</sup> <a name="wait_dns_verification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.waitDnsVerification"></a>

```python
wait_dns_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomain.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleFirebaseHostingCustomDomainCert <a name="GoogleFirebaseHostingCustomDomainCert" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCert"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCert.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCert()
```


### GoogleFirebaseHostingCustomDomainCertVerification <a name="GoogleFirebaseHostingCustomDomainCertVerification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerification"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerification.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerification()
```


### GoogleFirebaseHostingCustomDomainCertVerificationDns <a name="GoogleFirebaseHostingCustomDomainCertVerificationDns" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDns"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDns.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDns()
```


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired()
```


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords()
```


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered()
```


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords()
```


### GoogleFirebaseHostingCustomDomainCertVerificationHttp <a name="GoogleFirebaseHostingCustomDomainCertVerificationHttp" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttp"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttp.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttp()
```


### GoogleFirebaseHostingCustomDomainConfig <a name="GoogleFirebaseHostingCustomDomainConfig" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  custom_domain: str,
  site_id: str,
  cert_preference: str = None,
  id: str = None,
  project: str = None,
  redirect_target: str = None,
  timeouts: GoogleFirebaseHostingCustomDomainTimeouts = None,
  wait_dns_verification: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.customDomain">custom_domain</a></code> | <code>str</code> | The ID of the 'CustomDomain', which is the domain name you'd like to use with Firebase Hosting. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.siteId">site_id</a></code> | <code>str</code> | The ID of the site in which to create this custom domain association. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.certPreference">cert_preference</a></code> | <code>str</code> | A field that lets you specify which SSL certificate type Hosting creates for your domain name. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#id GoogleFirebaseHostingCustomDomain#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#project GoogleFirebaseHostingCustomDomain#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.redirectTarget">redirect_target</a></code> | <code>str</code> | A domain name that this CustomDomain should direct traffic towards. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.waitDnsVerification">wait_dns_verification</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If true, Terraform will wait for DNS records to be fully resolved on the 'CustomDomain'. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `custom_domain`<sup>Required</sup> <a name="custom_domain" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.customDomain"></a>

```python
custom_domain: str
```

- *Type:* str

The ID of the 'CustomDomain', which is the domain name you'd like to use with Firebase Hosting.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#custom_domain GoogleFirebaseHostingCustomDomain#custom_domain}

---

##### `site_id`<sup>Required</sup> <a name="site_id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.siteId"></a>

```python
site_id: str
```

- *Type:* str

The ID of the site in which to create this custom domain association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#site_id GoogleFirebaseHostingCustomDomain#site_id}

---

##### `cert_preference`<sup>Optional</sup> <a name="cert_preference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.certPreference"></a>

```python
cert_preference: str
```

- *Type:* str

A field that lets you specify which SSL certificate type Hosting creates for your domain name.

Spark plan 'CustomDomain's only have access to the
'GROUPED' cert type, while Blaze plan can select any option. Possible values: ["GROUPED", "PROJECT_GROUPED", "DEDICATED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#cert_preference GoogleFirebaseHostingCustomDomain#cert_preference}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#id GoogleFirebaseHostingCustomDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#project GoogleFirebaseHostingCustomDomain#project}.

---

##### `redirect_target`<sup>Optional</sup> <a name="redirect_target" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.redirectTarget"></a>

```python
redirect_target: str
```

- *Type:* str

A domain name that this CustomDomain should direct traffic towards.

If
specified, Hosting will respond to requests against this CustomDomain
with an HTTP 301 code, and route traffic to the specified 'redirect_target'
instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#redirect_target GoogleFirebaseHostingCustomDomain#redirect_target}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.timeouts"></a>

```python
timeouts: GoogleFirebaseHostingCustomDomainTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#timeouts GoogleFirebaseHostingCustomDomain#timeouts}

---

##### `wait_dns_verification`<sup>Optional</sup> <a name="wait_dns_verification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainConfig.property.waitDnsVerification"></a>

```python
wait_dns_verification: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If true, Terraform will wait for DNS records to be fully resolved on the 'CustomDomain'.

If false, Terraform will not wait for DNS records on the 'CustomDomain'. Any issues in
the 'CustomDomain' will be returned and stored in the Terraform state.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#wait_dns_verification GoogleFirebaseHostingCustomDomain#wait_dns_verification}

---

### GoogleFirebaseHostingCustomDomainIssues <a name="GoogleFirebaseHostingCustomDomainIssues" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssues.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssues()
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdates <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdates" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates()
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired()
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords()
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered()
```


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords()
```


### GoogleFirebaseHostingCustomDomainTimeouts <a name="GoogleFirebaseHostingCustomDomainTimeouts" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#create GoogleFirebaseHostingCustomDomain#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#delete GoogleFirebaseHostingCustomDomain#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#update GoogleFirebaseHostingCustomDomain#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#create GoogleFirebaseHostingCustomDomain#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#delete GoogleFirebaseHostingCustomDomain#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_firebase_hosting_custom_domain#update GoogleFirebaseHostingCustomDomain#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleFirebaseHostingCustomDomainCertList <a name="GoogleFirebaseHostingCustomDomainCertList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingCustomDomainCertOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseHostingCustomDomainCertOutputReference <a name="GoogleFirebaseHostingCustomDomainCertOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.verification">verification</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList">GoogleFirebaseHostingCustomDomainCertVerificationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCert">GoogleFirebaseHostingCustomDomainCert</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `verification`<sup>Required</sup> <a name="verification" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.verification"></a>

```python
verification: GoogleFirebaseHostingCustomDomainCertVerificationList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList">GoogleFirebaseHostingCustomDomainCertVerificationList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingCustomDomainCert
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCert">GoogleFirebaseHostingCustomDomainCert</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.records">records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.records"></a>

```python
records: GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesired</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.rdata">rdata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.requiredAction">required_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.rdata"></a>

```python
rdata: str
```

- *Type:* str

---

##### `required_action`<sup>Required</sup> <a name="required_action" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.requiredAction"></a>

```python
required_action: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecordsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredRecords</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.records">records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.records"></a>

```python
records: GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscovered</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.rdata">rdata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.requiredAction">required_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.rdata"></a>

```python
rdata: str
```

- *Type:* str

---

##### `required_action`<sup>Required</sup> <a name="required_action" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.requiredAction"></a>

```python
required_action: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecordsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredRecords</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsList <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.checkTime">check_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.desired">desired</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.discovered">discovered</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDns">GoogleFirebaseHostingCustomDomainCertVerificationDns</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check_time`<sup>Required</sup> <a name="check_time" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.checkTime"></a>

```python
check_time: str
```

- *Type:* str

---

##### `desired`<sup>Required</sup> <a name="desired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.desired"></a>

```python
desired: GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDesiredList</a>

---

##### `discovered`<sup>Required</sup> <a name="discovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.discovered"></a>

```python
discovered: GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList">GoogleFirebaseHostingCustomDomainCertVerificationDnsDiscoveredList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingCustomDomainCertVerificationDns
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDns">GoogleFirebaseHostingCustomDomainCertVerificationDns</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationHttpList <a name="GoogleFirebaseHostingCustomDomainCertVerificationHttpList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.desired">desired</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.discovered">discovered</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.lastCheckTime">last_check_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.path">path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttp">GoogleFirebaseHostingCustomDomainCertVerificationHttp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `desired`<sup>Required</sup> <a name="desired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.desired"></a>

```python
desired: str
```

- *Type:* str

---

##### `discovered`<sup>Required</sup> <a name="discovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.discovered"></a>

```python
discovered: str
```

- *Type:* str

---

##### `last_check_time`<sup>Required</sup> <a name="last_check_time" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.lastCheckTime"></a>

```python
last_check_time: str
```

- *Type:* str

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.path"></a>

```python
path: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingCustomDomainCertVerificationHttp
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttp">GoogleFirebaseHostingCustomDomainCertVerificationHttp</a>

---


### GoogleFirebaseHostingCustomDomainCertVerificationList <a name="GoogleFirebaseHostingCustomDomainCertVerificationList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingCustomDomainCertVerificationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseHostingCustomDomainCertVerificationOutputReference <a name="GoogleFirebaseHostingCustomDomainCertVerificationOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.dns">dns</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.http">http</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList">GoogleFirebaseHostingCustomDomainCertVerificationHttpList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerification">GoogleFirebaseHostingCustomDomainCertVerification</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `dns`<sup>Required</sup> <a name="dns" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.dns"></a>

```python
dns: GoogleFirebaseHostingCustomDomainCertVerificationDnsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationDnsList">GoogleFirebaseHostingCustomDomainCertVerificationDnsList</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.http"></a>

```python
http: GoogleFirebaseHostingCustomDomainCertVerificationHttpList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationHttpList">GoogleFirebaseHostingCustomDomainCertVerificationHttpList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerificationOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingCustomDomainCertVerification
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainCertVerification">GoogleFirebaseHostingCustomDomainCertVerification</a>

---


### GoogleFirebaseHostingCustomDomainIssuesList <a name="GoogleFirebaseHostingCustomDomainIssuesList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingCustomDomainIssuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseHostingCustomDomainIssuesOutputReference <a name="GoogleFirebaseHostingCustomDomainIssuesOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.code">code</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.details">details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssues">GoogleFirebaseHostingCustomDomainIssues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.code"></a>

```python
code: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.details"></a>

```python
details: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssuesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingCustomDomainIssues
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainIssues">GoogleFirebaseHostingCustomDomainIssues</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.records">records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.records"></a>

```python
records: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesired</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.rdata">rdata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.requiredAction">required_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.rdata"></a>

```python
rdata: str
```

- *Type:* str

---

##### `required_action`<sup>Required</sup> <a name="required_action" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.requiredAction"></a>

```python
required_action: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecordsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredRecords</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.records">records</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `records`<sup>Required</sup> <a name="records" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.records"></a>

```python
records: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscovered</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.domainName">domain_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.rdata">rdata</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.requiredAction">required_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `domain_name`<sup>Required</sup> <a name="domain_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.domainName"></a>

```python
domain_name: str
```

- *Type:* str

---

##### `rdata`<sup>Required</sup> <a name="rdata" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.rdata"></a>

```python
rdata: str
```

- *Type:* str

---

##### `required_action`<sup>Required</sup> <a name="required_action" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.requiredAction"></a>

```python
required_action: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecordsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredRecords</a>

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference <a name="GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.checkTime">check_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.desired">desired</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.discovered">discovered</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates">GoogleFirebaseHostingCustomDomainRequiredDnsUpdates</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `check_time`<sup>Required</sup> <a name="check_time" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.checkTime"></a>

```python
check_time: str
```

- *Type:* str

---

##### `desired`<sup>Required</sup> <a name="desired" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.desired"></a>

```python
desired: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDesiredList</a>

---

##### `discovered`<sup>Required</sup> <a name="discovered" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.discovered"></a>

```python
discovered: GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList">GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesDiscoveredList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdatesOutputReference.property.internalValue"></a>

```python
internal_value: GoogleFirebaseHostingCustomDomainRequiredDnsUpdates
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainRequiredDnsUpdates">GoogleFirebaseHostingCustomDomainRequiredDnsUpdates</a>

---


### GoogleFirebaseHostingCustomDomainTimeoutsOutputReference <a name="GoogleFirebaseHostingCustomDomainTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_firebase_hosting_custom_domain

googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleFirebaseHostingCustomDomainTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleFirebaseHostingCustomDomain.GoogleFirebaseHostingCustomDomainTimeouts">GoogleFirebaseHostingCustomDomainTimeouts</a>]

---




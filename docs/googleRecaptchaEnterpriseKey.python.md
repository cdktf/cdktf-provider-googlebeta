# `googleRecaptchaEnterpriseKey` Submodule <a name="`googleRecaptchaEnterpriseKey` Submodule" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleRecaptchaEnterpriseKey <a name="GoogleRecaptchaEnterpriseKey" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key google_recaptcha_enterprise_key}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  android_settings: GoogleRecaptchaEnterpriseKeyAndroidSettings = None,
  id: str = None,
  ios_settings: GoogleRecaptchaEnterpriseKeyIosSettings = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  testing_options: GoogleRecaptchaEnterpriseKeyTestingOptions = None,
  timeouts: GoogleRecaptchaEnterpriseKeyTimeouts = None,
  waf_settings: GoogleRecaptchaEnterpriseKeyWafSettings = None,
  web_settings: GoogleRecaptchaEnterpriseKeyWebSettings = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Human-readable display name of this key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.androidSettings">android_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a></code> | android_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#id GoogleRecaptchaEnterpriseKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.iosSettings">ios_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a></code> | ios_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels). |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.testingOptions">testing_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a></code> | testing_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.wafSettings">waf_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a></code> | waf_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.webSettings">web_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a></code> | web_settings block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.displayName"></a>

- *Type:* str

Human-readable display name of this key. Modifiable by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#display_name GoogleRecaptchaEnterpriseKey#display_name}

---

##### `android_settings`<sup>Optional</sup> <a name="android_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.androidSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a>

android_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#android_settings GoogleRecaptchaEnterpriseKey#android_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#id GoogleRecaptchaEnterpriseKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ios_settings`<sup>Optional</sup> <a name="ios_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.iosSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a>

ios_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#ios_settings GoogleRecaptchaEnterpriseKey#ios_settings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#labels GoogleRecaptchaEnterpriseKey#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.project"></a>

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#project GoogleRecaptchaEnterpriseKey#project}

---

##### `testing_options`<sup>Optional</sup> <a name="testing_options" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.testingOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a>

testing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#testing_options GoogleRecaptchaEnterpriseKey#testing_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#timeouts GoogleRecaptchaEnterpriseKey#timeouts}

---

##### `waf_settings`<sup>Optional</sup> <a name="waf_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.wafSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a>

waf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#waf_settings GoogleRecaptchaEnterpriseKey#waf_settings}

---

##### `web_settings`<sup>Optional</sup> <a name="web_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.Initializer.parameter.webSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a>

web_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#web_settings GoogleRecaptchaEnterpriseKey#web_settings}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putAndroidSettings">put_android_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putIosSettings">put_ios_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTestingOptions">put_testing_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWafSettings">put_waf_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWebSettings">put_web_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetAndroidSettings">reset_android_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetIosSettings">reset_ios_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetTestingOptions">reset_testing_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetWafSettings">reset_waf_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetWebSettings">reset_web_settings</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_android_settings` <a name="put_android_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putAndroidSettings"></a>

```python
def put_android_settings(
  allow_all_package_names: typing.Union[bool, IResolvable] = None,
  allowed_package_names: typing.List[str] = None
) -> None
```

###### `allow_all_package_names`<sup>Optional</sup> <a name="allow_all_package_names" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putAndroidSettings.parameter.allowAllPackageNames"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, it means allowed_package_names will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#allow_all_package_names GoogleRecaptchaEnterpriseKey#allow_all_package_names}

---

###### `allowed_package_names`<sup>Optional</sup> <a name="allowed_package_names" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putAndroidSettings.parameter.allowedPackageNames"></a>

- *Type:* typing.List[str]

Android package names of apps allowed to use the key. Example: 'com.companyname.appname'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#allowed_package_names GoogleRecaptchaEnterpriseKey#allowed_package_names}

---

##### `put_ios_settings` <a name="put_ios_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putIosSettings"></a>

```python
def put_ios_settings(
  allow_all_bundle_ids: typing.Union[bool, IResolvable] = None,
  allowed_bundle_ids: typing.List[str] = None
) -> None
```

###### `allow_all_bundle_ids`<sup>Optional</sup> <a name="allow_all_bundle_ids" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putIosSettings.parameter.allowAllBundleIds"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, it means allowed_bundle_ids will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#allow_all_bundle_ids GoogleRecaptchaEnterpriseKey#allow_all_bundle_ids}

---

###### `allowed_bundle_ids`<sup>Optional</sup> <a name="allowed_bundle_ids" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putIosSettings.parameter.allowedBundleIds"></a>

- *Type:* typing.List[str]

iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#allowed_bundle_ids GoogleRecaptchaEnterpriseKey#allowed_bundle_ids}

---

##### `put_testing_options` <a name="put_testing_options" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTestingOptions"></a>

```python
def put_testing_options(
  testing_challenge: str = None,
  testing_score: typing.Union[int, float] = None
) -> None
```

###### `testing_challenge`<sup>Optional</sup> <a name="testing_challenge" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTestingOptions.parameter.testingChallenge"></a>

- *Type:* str

For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE.

Possible values: TESTING_CHALLENGE_UNSPECIFIED, NOCAPTCHA, UNSOLVABLE_CHALLENGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#testing_challenge GoogleRecaptchaEnterpriseKey#testing_challenge}

---

###### `testing_score`<sup>Optional</sup> <a name="testing_score" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTestingOptions.parameter.testingScore"></a>

- *Type:* typing.Union[int, float]

All assessments for this Key will return this score.

Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#testing_score GoogleRecaptchaEnterpriseKey#testing_score}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#create GoogleRecaptchaEnterpriseKey#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#delete GoogleRecaptchaEnterpriseKey#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#update GoogleRecaptchaEnterpriseKey#update}.

---

##### `put_waf_settings` <a name="put_waf_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWafSettings"></a>

```python
def put_waf_settings(
  waf_feature: str,
  waf_service: str
) -> None
```

###### `waf_feature`<sup>Required</sup> <a name="waf_feature" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWafSettings.parameter.wafFeature"></a>

- *Type:* str

Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#waf_feature GoogleRecaptchaEnterpriseKey#waf_feature}

---

###### `waf_service`<sup>Required</sup> <a name="waf_service" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWafSettings.parameter.wafService"></a>

- *Type:* str

The WAF service that uses this key. Possible values: CA, FASTLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#waf_service GoogleRecaptchaEnterpriseKey#waf_service}

---

##### `put_web_settings` <a name="put_web_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWebSettings"></a>

```python
def put_web_settings(
  integration_type: str,
  allow_all_domains: typing.Union[bool, IResolvable] = None,
  allow_amp_traffic: typing.Union[bool, IResolvable] = None,
  allowed_domains: typing.List[str] = None,
  challenge_security_preference: str = None
) -> None
```

###### `integration_type`<sup>Required</sup> <a name="integration_type" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWebSettings.parameter.integrationType"></a>

- *Type:* str

Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#integration_type GoogleRecaptchaEnterpriseKey#integration_type}

---

###### `allow_all_domains`<sup>Optional</sup> <a name="allow_all_domains" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWebSettings.parameter.allowAllDomains"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, it means allowed_domains will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#allow_all_domains GoogleRecaptchaEnterpriseKey#allow_all_domains}

---

###### `allow_amp_traffic`<sup>Optional</sup> <a name="allow_amp_traffic" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWebSettings.parameter.allowAmpTraffic"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites.

This is supported only for the SCORE integration type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#allow_amp_traffic GoogleRecaptchaEnterpriseKey#allow_amp_traffic}

---

###### `allowed_domains`<sup>Optional</sup> <a name="allowed_domains" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWebSettings.parameter.allowedDomains"></a>

- *Type:* typing.List[str]

Domains or subdomains of websites allowed to use the key.

All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#allowed_domains GoogleRecaptchaEnterpriseKey#allowed_domains}

---

###### `challenge_security_preference`<sup>Optional</sup> <a name="challenge_security_preference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.putWebSettings.parameter.challengeSecurityPreference"></a>

- *Type:* str

Settings for the frequency and difficulty at which this key triggers captcha challenges.

This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#challenge_security_preference GoogleRecaptchaEnterpriseKey#challenge_security_preference}

---

##### `reset_android_settings` <a name="reset_android_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetAndroidSettings"></a>

```python
def reset_android_settings() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ios_settings` <a name="reset_ios_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetIosSettings"></a>

```python
def reset_ios_settings() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_testing_options` <a name="reset_testing_options" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetTestingOptions"></a>

```python
def reset_testing_options() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_waf_settings` <a name="reset_waf_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetWafSettings"></a>

```python
def reset_waf_settings() -> None
```

##### `reset_web_settings` <a name="reset_web_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.resetWebSettings"></a>

```python
def reset_web_settings() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleRecaptchaEnterpriseKey resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleRecaptchaEnterpriseKey resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleRecaptchaEnterpriseKey to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleRecaptchaEnterpriseKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleRecaptchaEnterpriseKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.androidSettings">android_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference">GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.iosSettings">ios_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference">GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.testingOptions">testing_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference">GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference">GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.wafSettings">waf_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference">GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.webSettings">web_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference">GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.androidSettingsInput">android_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.iosSettingsInput">ios_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.testingOptionsInput">testing_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.wafSettingsInput">waf_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.webSettingsInput">web_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `android_settings`<sup>Required</sup> <a name="android_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.androidSettings"></a>

```python
android_settings: GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference">GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `ios_settings`<sup>Required</sup> <a name="ios_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.iosSettings"></a>

```python
ios_settings: GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference">GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `testing_options`<sup>Required</sup> <a name="testing_options" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.testingOptions"></a>

```python
testing_options: GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference">GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.timeouts"></a>

```python
timeouts: GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference">GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference</a>

---

##### `waf_settings`<sup>Required</sup> <a name="waf_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.wafSettings"></a>

```python
waf_settings: GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference">GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference</a>

---

##### `web_settings`<sup>Required</sup> <a name="web_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.webSettings"></a>

```python
web_settings: GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference">GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference</a>

---

##### `android_settings_input`<sup>Optional</sup> <a name="android_settings_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.androidSettingsInput"></a>

```python
android_settings_input: GoogleRecaptchaEnterpriseKeyAndroidSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a>

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ios_settings_input`<sup>Optional</sup> <a name="ios_settings_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.iosSettingsInput"></a>

```python
ios_settings_input: GoogleRecaptchaEnterpriseKeyIosSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a>

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `testing_options_input`<sup>Optional</sup> <a name="testing_options_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.testingOptionsInput"></a>

```python
testing_options_input: GoogleRecaptchaEnterpriseKeyTestingOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a>

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleRecaptchaEnterpriseKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a>]

---

##### `waf_settings_input`<sup>Optional</sup> <a name="waf_settings_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.wafSettingsInput"></a>

```python
waf_settings_input: GoogleRecaptchaEnterpriseKeyWafSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a>

---

##### `web_settings_input`<sup>Optional</sup> <a name="web_settings_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.webSettingsInput"></a>

```python
web_settings_input: GoogleRecaptchaEnterpriseKeyWebSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKey.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleRecaptchaEnterpriseKeyAndroidSettings <a name="GoogleRecaptchaEnterpriseKeyAndroidSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings(
  allow_all_package_names: typing.Union[bool, IResolvable] = None,
  allowed_package_names: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings.property.allowAllPackageNames">allow_all_package_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, it means allowed_package_names will not be enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings.property.allowedPackageNames">allowed_package_names</a></code> | <code>typing.List[str]</code> | Android package names of apps allowed to use the key. Example: 'com.companyname.appname'. |

---

##### `allow_all_package_names`<sup>Optional</sup> <a name="allow_all_package_names" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings.property.allowAllPackageNames"></a>

```python
allow_all_package_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, it means allowed_package_names will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#allow_all_package_names GoogleRecaptchaEnterpriseKey#allow_all_package_names}

---

##### `allowed_package_names`<sup>Optional</sup> <a name="allowed_package_names" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings.property.allowedPackageNames"></a>

```python
allowed_package_names: typing.List[str]
```

- *Type:* typing.List[str]

Android package names of apps allowed to use the key. Example: 'com.companyname.appname'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#allowed_package_names GoogleRecaptchaEnterpriseKey#allowed_package_names}

---

### GoogleRecaptchaEnterpriseKeyConfig <a name="GoogleRecaptchaEnterpriseKeyConfig" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  display_name: str,
  android_settings: GoogleRecaptchaEnterpriseKeyAndroidSettings = None,
  id: str = None,
  ios_settings: GoogleRecaptchaEnterpriseKeyIosSettings = None,
  labels: typing.Mapping[str] = None,
  project: str = None,
  testing_options: GoogleRecaptchaEnterpriseKeyTestingOptions = None,
  timeouts: GoogleRecaptchaEnterpriseKeyTimeouts = None,
  waf_settings: GoogleRecaptchaEnterpriseKeyWafSettings = None,
  web_settings: GoogleRecaptchaEnterpriseKeyWebSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.displayName">display_name</a></code> | <code>str</code> | Human-readable display name of this key. Modifiable by user. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.androidSettings">android_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a></code> | android_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#id GoogleRecaptchaEnterpriseKey#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.iosSettings">ios_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a></code> | ios_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels). |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.project">project</a></code> | <code>str</code> | The project for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.testingOptions">testing_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a></code> | testing_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.wafSettings">waf_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a></code> | waf_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.webSettings">web_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a></code> | web_settings block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Human-readable display name of this key. Modifiable by user.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#display_name GoogleRecaptchaEnterpriseKey#display_name}

---

##### `android_settings`<sup>Optional</sup> <a name="android_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.androidSettings"></a>

```python
android_settings: GoogleRecaptchaEnterpriseKeyAndroidSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a>

android_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#android_settings GoogleRecaptchaEnterpriseKey#android_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#id GoogleRecaptchaEnterpriseKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ios_settings`<sup>Optional</sup> <a name="ios_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.iosSettings"></a>

```python
ios_settings: GoogleRecaptchaEnterpriseKeyIosSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a>

ios_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#ios_settings GoogleRecaptchaEnterpriseKey#ios_settings}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

See [Creating and managing labels](https://cloud.google.com/recaptcha-enterprise/docs/labels).

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field `effective_labels` for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#labels GoogleRecaptchaEnterpriseKey#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.project"></a>

```python
project: str
```

- *Type:* str

The project for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#project GoogleRecaptchaEnterpriseKey#project}

---

##### `testing_options`<sup>Optional</sup> <a name="testing_options" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.testingOptions"></a>

```python
testing_options: GoogleRecaptchaEnterpriseKeyTestingOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a>

testing_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#testing_options GoogleRecaptchaEnterpriseKey#testing_options}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.timeouts"></a>

```python
timeouts: GoogleRecaptchaEnterpriseKeyTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#timeouts GoogleRecaptchaEnterpriseKey#timeouts}

---

##### `waf_settings`<sup>Optional</sup> <a name="waf_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.wafSettings"></a>

```python
waf_settings: GoogleRecaptchaEnterpriseKeyWafSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a>

waf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#waf_settings GoogleRecaptchaEnterpriseKey#waf_settings}

---

##### `web_settings`<sup>Optional</sup> <a name="web_settings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyConfig.property.webSettings"></a>

```python
web_settings: GoogleRecaptchaEnterpriseKeyWebSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a>

web_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#web_settings GoogleRecaptchaEnterpriseKey#web_settings}

---

### GoogleRecaptchaEnterpriseKeyIosSettings <a name="GoogleRecaptchaEnterpriseKeyIosSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings(
  allow_all_bundle_ids: typing.Union[bool, IResolvable] = None,
  allowed_bundle_ids: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings.property.allowAllBundleIds">allow_all_bundle_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, it means allowed_bundle_ids will not be enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings.property.allowedBundleIds">allowed_bundle_ids</a></code> | <code>typing.List[str]</code> | iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'. |

---

##### `allow_all_bundle_ids`<sup>Optional</sup> <a name="allow_all_bundle_ids" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings.property.allowAllBundleIds"></a>

```python
allow_all_bundle_ids: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, it means allowed_bundle_ids will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#allow_all_bundle_ids GoogleRecaptchaEnterpriseKey#allow_all_bundle_ids}

---

##### `allowed_bundle_ids`<sup>Optional</sup> <a name="allowed_bundle_ids" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings.property.allowedBundleIds"></a>

```python
allowed_bundle_ids: typing.List[str]
```

- *Type:* typing.List[str]

iOS bundle ids of apps allowed to use the key. Example: 'com.companyname.productname.appname'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#allowed_bundle_ids GoogleRecaptchaEnterpriseKey#allowed_bundle_ids}

---

### GoogleRecaptchaEnterpriseKeyTestingOptions <a name="GoogleRecaptchaEnterpriseKeyTestingOptions" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions(
  testing_challenge: str = None,
  testing_score: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions.property.testingChallenge">testing_challenge</a></code> | <code>str</code> | For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions.property.testingScore">testing_score</a></code> | <code>typing.Union[int, float]</code> | All assessments for this Key will return this score. |

---

##### `testing_challenge`<sup>Optional</sup> <a name="testing_challenge" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions.property.testingChallenge"></a>

```python
testing_challenge: str
```

- *Type:* str

For challenge-based keys only (CHECKBOX, INVISIBLE), all challenge requests for this site will return nocaptcha if NOCAPTCHA, or an unsolvable challenge if UNSOLVABLE_CHALLENGE.

Possible values: TESTING_CHALLENGE_UNSPECIFIED, NOCAPTCHA, UNSOLVABLE_CHALLENGE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#testing_challenge GoogleRecaptchaEnterpriseKey#testing_challenge}

---

##### `testing_score`<sup>Optional</sup> <a name="testing_score" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions.property.testingScore"></a>

```python
testing_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

All assessments for this Key will return this score.

Must be between 0 (likely not legitimate) and 1 (likely legitimate) inclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#testing_score GoogleRecaptchaEnterpriseKey#testing_score}

---

### GoogleRecaptchaEnterpriseKeyTimeouts <a name="GoogleRecaptchaEnterpriseKeyTimeouts" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#create GoogleRecaptchaEnterpriseKey#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#delete GoogleRecaptchaEnterpriseKey#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#update GoogleRecaptchaEnterpriseKey#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#create GoogleRecaptchaEnterpriseKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#delete GoogleRecaptchaEnterpriseKey#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#update GoogleRecaptchaEnterpriseKey#update}.

---

### GoogleRecaptchaEnterpriseKeyWafSettings <a name="GoogleRecaptchaEnterpriseKeyWafSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings(
  waf_feature: str,
  waf_service: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings.property.wafFeature">waf_feature</a></code> | <code>str</code> | Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings.property.wafService">waf_service</a></code> | <code>str</code> | The WAF service that uses this key. Possible values: CA, FASTLY. |

---

##### `waf_feature`<sup>Required</sup> <a name="waf_feature" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings.property.wafFeature"></a>

```python
waf_feature: str
```

- *Type:* str

Supported WAF features. For more information, see https://cloud.google.com/recaptcha-enterprise/docs/usecase#comparison_of_features. Possible values: CHALLENGE_PAGE, SESSION_TOKEN, ACTION_TOKEN, EXPRESS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#waf_feature GoogleRecaptchaEnterpriseKey#waf_feature}

---

##### `waf_service`<sup>Required</sup> <a name="waf_service" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings.property.wafService"></a>

```python
waf_service: str
```

- *Type:* str

The WAF service that uses this key. Possible values: CA, FASTLY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#waf_service GoogleRecaptchaEnterpriseKey#waf_service}

---

### GoogleRecaptchaEnterpriseKeyWebSettings <a name="GoogleRecaptchaEnterpriseKeyWebSettings" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings(
  integration_type: str,
  allow_all_domains: typing.Union[bool, IResolvable] = None,
  allow_amp_traffic: typing.Union[bool, IResolvable] = None,
  allowed_domains: typing.List[str] = None,
  challenge_security_preference: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.integrationType">integration_type</a></code> | <code>str</code> | Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.allowAllDomains">allow_all_domains</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, it means allowed_domains will not be enforced. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.allowAmpTraffic">allow_amp_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.allowedDomains">allowed_domains</a></code> | <code>typing.List[str]</code> | Domains or subdomains of websites allowed to use the key. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.challengeSecurityPreference">challenge_security_preference</a></code> | <code>str</code> | Settings for the frequency and difficulty at which this key triggers captcha challenges. |

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.integrationType"></a>

```python
integration_type: str
```

- *Type:* str

Required. Describes how this key is integrated with the website. Possible values: SCORE, CHECKBOX, INVISIBLE.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#integration_type GoogleRecaptchaEnterpriseKey#integration_type}

---

##### `allow_all_domains`<sup>Optional</sup> <a name="allow_all_domains" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.allowAllDomains"></a>

```python
allow_all_domains: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, it means allowed_domains will not be enforced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#allow_all_domains GoogleRecaptchaEnterpriseKey#allow_all_domains}

---

##### `allow_amp_traffic`<sup>Optional</sup> <a name="allow_amp_traffic" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.allowAmpTraffic"></a>

```python
allow_amp_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

If set to true, the key can be used on AMP (Accelerated Mobile Pages) websites.

This is supported only for the SCORE integration type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#allow_amp_traffic GoogleRecaptchaEnterpriseKey#allow_amp_traffic}

---

##### `allowed_domains`<sup>Optional</sup> <a name="allowed_domains" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.allowedDomains"></a>

```python
allowed_domains: typing.List[str]
```

- *Type:* typing.List[str]

Domains or subdomains of websites allowed to use the key.

All subdomains of an allowed domain are automatically allowed. A valid domain requires a host and must not include any path, port, query or fragment. Examples: 'example.com' or 'subdomain.example.com'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#allowed_domains GoogleRecaptchaEnterpriseKey#allowed_domains}

---

##### `challenge_security_preference`<sup>Optional</sup> <a name="challenge_security_preference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings.property.challengeSecurityPreference"></a>

```python
challenge_security_preference: str
```

- *Type:* str

Settings for the frequency and difficulty at which this key triggers captcha challenges.

This should only be specified for IntegrationTypes CHECKBOX and INVISIBLE. Possible values: CHALLENGE_SECURITY_PREFERENCE_UNSPECIFIED, USABILITY, BALANCE, SECURITY

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_recaptcha_enterprise_key#challenge_security_preference GoogleRecaptchaEnterpriseKey#challenge_security_preference}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference <a name="GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowAllPackageNames">reset_allow_all_package_names</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowedPackageNames">reset_allowed_package_names</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_all_package_names` <a name="reset_allow_all_package_names" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowAllPackageNames"></a>

```python
def reset_allow_all_package_names() -> None
```

##### `reset_allowed_package_names` <a name="reset_allowed_package_names" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.resetAllowedPackageNames"></a>

```python
def reset_allowed_package_names() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNamesInput">allow_all_package_names_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNamesInput">allowed_package_names_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNames">allow_all_package_names</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNames">allowed_package_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_all_package_names_input`<sup>Optional</sup> <a name="allow_all_package_names_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNamesInput"></a>

```python
allow_all_package_names_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_package_names_input`<sup>Optional</sup> <a name="allowed_package_names_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNamesInput"></a>

```python
allowed_package_names_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_all_package_names`<sup>Required</sup> <a name="allow_all_package_names" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowAllPackageNames"></a>

```python
allow_all_package_names: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_package_names`<sup>Required</sup> <a name="allowed_package_names" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.allowedPackageNames"></a>

```python
allowed_package_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRecaptchaEnterpriseKeyAndroidSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyAndroidSettings">GoogleRecaptchaEnterpriseKeyAndroidSettings</a>

---


### GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference <a name="GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowAllBundleIds">reset_allow_all_bundle_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowedBundleIds">reset_allowed_bundle_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_all_bundle_ids` <a name="reset_allow_all_bundle_ids" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowAllBundleIds"></a>

```python
def reset_allow_all_bundle_ids() -> None
```

##### `reset_allowed_bundle_ids` <a name="reset_allowed_bundle_ids" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.resetAllowedBundleIds"></a>

```python
def reset_allowed_bundle_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIdsInput">allow_all_bundle_ids_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIdsInput">allowed_bundle_ids_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIds">allow_all_bundle_ids</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIds">allowed_bundle_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_all_bundle_ids_input`<sup>Optional</sup> <a name="allow_all_bundle_ids_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIdsInput"></a>

```python
allow_all_bundle_ids_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_bundle_ids_input`<sup>Optional</sup> <a name="allowed_bundle_ids_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIdsInput"></a>

```python
allowed_bundle_ids_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `allow_all_bundle_ids`<sup>Required</sup> <a name="allow_all_bundle_ids" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowAllBundleIds"></a>

```python
allow_all_bundle_ids: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_bundle_ids`<sup>Required</sup> <a name="allowed_bundle_ids" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.allowedBundleIds"></a>

```python
allowed_bundle_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRecaptchaEnterpriseKeyIosSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyIosSettings">GoogleRecaptchaEnterpriseKeyIosSettings</a>

---


### GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference <a name="GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingChallenge">reset_testing_challenge</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingScore">reset_testing_score</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_testing_challenge` <a name="reset_testing_challenge" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingChallenge"></a>

```python
def reset_testing_challenge() -> None
```

##### `reset_testing_score` <a name="reset_testing_score" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.resetTestingScore"></a>

```python
def reset_testing_score() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallengeInput">testing_challenge_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScoreInput">testing_score_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallenge">testing_challenge</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScore">testing_score</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `testing_challenge_input`<sup>Optional</sup> <a name="testing_challenge_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallengeInput"></a>

```python
testing_challenge_input: str
```

- *Type:* str

---

##### `testing_score_input`<sup>Optional</sup> <a name="testing_score_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScoreInput"></a>

```python
testing_score_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `testing_challenge`<sup>Required</sup> <a name="testing_challenge" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingChallenge"></a>

```python
testing_challenge: str
```

- *Type:* str

---

##### `testing_score`<sup>Required</sup> <a name="testing_score" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.testingScore"></a>

```python
testing_score: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRecaptchaEnterpriseKeyTestingOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTestingOptions">GoogleRecaptchaEnterpriseKeyTestingOptions</a>

---


### GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference <a name="GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleRecaptchaEnterpriseKeyTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyTimeouts">GoogleRecaptchaEnterpriseKeyTimeouts</a>]

---


### GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference <a name="GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeatureInput">waf_feature_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafServiceInput">waf_service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeature">waf_feature</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafService">waf_service</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `waf_feature_input`<sup>Optional</sup> <a name="waf_feature_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeatureInput"></a>

```python
waf_feature_input: str
```

- *Type:* str

---

##### `waf_service_input`<sup>Optional</sup> <a name="waf_service_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafServiceInput"></a>

```python
waf_service_input: str
```

- *Type:* str

---

##### `waf_feature`<sup>Required</sup> <a name="waf_feature" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafFeature"></a>

```python
waf_feature: str
```

- *Type:* str

---

##### `waf_service`<sup>Required</sup> <a name="waf_service" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.wafService"></a>

```python
waf_service: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRecaptchaEnterpriseKeyWafSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWafSettings">GoogleRecaptchaEnterpriseKeyWafSettings</a>

---


### GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference <a name="GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_recaptcha_enterprise_key

googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAllDomains">reset_allow_all_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAmpTraffic">reset_allow_amp_traffic</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowedDomains">reset_allowed_domains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetChallengeSecurityPreference">reset_challenge_security_preference</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_allow_all_domains` <a name="reset_allow_all_domains" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAllDomains"></a>

```python
def reset_allow_all_domains() -> None
```

##### `reset_allow_amp_traffic` <a name="reset_allow_amp_traffic" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowAmpTraffic"></a>

```python
def reset_allow_amp_traffic() -> None
```

##### `reset_allowed_domains` <a name="reset_allowed_domains" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetAllowedDomains"></a>

```python
def reset_allowed_domains() -> None
```

##### `reset_challenge_security_preference` <a name="reset_challenge_security_preference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.resetChallengeSecurityPreference"></a>

```python
def reset_challenge_security_preference() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomainsInput">allow_all_domains_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTrafficInput">allow_amp_traffic_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomainsInput">allowed_domains_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreferenceInput">challenge_security_preference_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationTypeInput">integration_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomains">allow_all_domains</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTraffic">allow_amp_traffic</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomains">allowed_domains</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreference">challenge_security_preference</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationType">integration_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `allow_all_domains_input`<sup>Optional</sup> <a name="allow_all_domains_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomainsInput"></a>

```python
allow_all_domains_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_amp_traffic_input`<sup>Optional</sup> <a name="allow_amp_traffic_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTrafficInput"></a>

```python
allow_amp_traffic_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_domains_input`<sup>Optional</sup> <a name="allowed_domains_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomainsInput"></a>

```python
allowed_domains_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `challenge_security_preference_input`<sup>Optional</sup> <a name="challenge_security_preference_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreferenceInput"></a>

```python
challenge_security_preference_input: str
```

- *Type:* str

---

##### `integration_type_input`<sup>Optional</sup> <a name="integration_type_input" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationTypeInput"></a>

```python
integration_type_input: str
```

- *Type:* str

---

##### `allow_all_domains`<sup>Required</sup> <a name="allow_all_domains" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAllDomains"></a>

```python
allow_all_domains: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_amp_traffic`<sup>Required</sup> <a name="allow_amp_traffic" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowAmpTraffic"></a>

```python
allow_amp_traffic: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allowed_domains`<sup>Required</sup> <a name="allowed_domains" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.allowedDomains"></a>

```python
allowed_domains: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `challenge_security_preference`<sup>Required</sup> <a name="challenge_security_preference" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.challengeSecurityPreference"></a>

```python
challenge_security_preference: str
```

- *Type:* str

---

##### `integration_type`<sup>Required</sup> <a name="integration_type" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.integrationType"></a>

```python
integration_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleRecaptchaEnterpriseKeyWebSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleRecaptchaEnterpriseKey.GoogleRecaptchaEnterpriseKeyWebSettings">GoogleRecaptchaEnterpriseKeyWebSettings</a>

---




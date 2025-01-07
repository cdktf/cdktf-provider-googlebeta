# `googleLoggingBillingAccountBucketConfig` Submodule <a name="`googleLoggingBillingAccountBucketConfig` Submodule" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleLoggingBillingAccountBucketConfig <a name="GoogleLoggingBillingAccountBucketConfig" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config google_logging_billing_account_bucket_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_billing_account_bucket_config

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_account: str,
  bucket_id: str,
  location: str,
  cmek_settings: GoogleLoggingBillingAccountBucketConfigCmekSettings = None,
  description: str = None,
  id: str = None,
  index_configs: typing.Union[IResolvable, typing.List[GoogleLoggingBillingAccountBucketConfigIndexConfigs]] = None,
  retention_days: typing.Union[int, float] = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.billingAccount">billing_account</a></code> | <code>str</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.bucketId">bucket_id</a></code> | <code>str</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.location">location</a></code> | <code>str</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.cmekSettings">cmek_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.description">description</a></code> | <code>str</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#id GoogleLoggingBillingAccountBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.indexConfigs">index_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>]]</code> | index_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_account`<sup>Required</sup> <a name="billing_account" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.billingAccount"></a>

- *Type:* str

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#billing_account GoogleLoggingBillingAccountBucketConfig#billing_account}

---

##### `bucket_id`<sup>Required</sup> <a name="bucket_id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.bucketId"></a>

- *Type:* str

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#bucket_id GoogleLoggingBillingAccountBucketConfig#bucket_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.location"></a>

- *Type:* str

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#location GoogleLoggingBillingAccountBucketConfig#location}

---

##### `cmek_settings`<sup>Optional</sup> <a name="cmek_settings" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.cmekSettings"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#cmek_settings GoogleLoggingBillingAccountBucketConfig#cmek_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.description"></a>

- *Type:* str

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#description GoogleLoggingBillingAccountBucketConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#id GoogleLoggingBillingAccountBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index_configs`<sup>Optional</sup> <a name="index_configs" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.indexConfigs"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>]]

index_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#index_configs GoogleLoggingBillingAccountBucketConfig#index_configs}

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.Initializer.parameter.retentionDays"></a>

- *Type:* typing.Union[int, float]

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#retention_days GoogleLoggingBillingAccountBucketConfig#retention_days}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.putCmekSettings">put_cmek_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.putIndexConfigs">put_index_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetCmekSettings">reset_cmek_settings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetIndexConfigs">reset_index_configs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetRetentionDays">reset_retention_days</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_cmek_settings` <a name="put_cmek_settings" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.putCmekSettings"></a>

```python
def put_cmek_settings(
  kms_key_name: str
) -> None
```

###### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.putCmekSettings.parameter.kmsKeyName"></a>

- *Type:* str

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#kms_key_name GoogleLoggingBillingAccountBucketConfig#kms_key_name}

---

##### `put_index_configs` <a name="put_index_configs" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.putIndexConfigs"></a>

```python
def put_index_configs(
  value: typing.Union[IResolvable, typing.List[GoogleLoggingBillingAccountBucketConfigIndexConfigs]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.putIndexConfigs.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>]]

---

##### `reset_cmek_settings` <a name="reset_cmek_settings" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetCmekSettings"></a>

```python
def reset_cmek_settings() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_index_configs` <a name="reset_index_configs" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetIndexConfigs"></a>

```python
def reset_index_configs() -> None
```

##### `reset_retention_days` <a name="reset_retention_days" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.resetRetentionDays"></a>

```python
def reset_retention_days() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleLoggingBillingAccountBucketConfig resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_billing_account_bucket_config

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_billing_account_bucket_config

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_billing_account_bucket_config

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_billing_account_bucket_config

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleLoggingBillingAccountBucketConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleLoggingBillingAccountBucketConfig to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleLoggingBillingAccountBucketConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleLoggingBillingAccountBucketConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.cmekSettings">cmek_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference">GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.indexConfigs">index_configs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList">GoogleLoggingBillingAccountBucketConfigIndexConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.lifecycleState">lifecycle_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.billingAccountInput">billing_account_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.bucketIdInput">bucket_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.cmekSettingsInput">cmek_settings_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.indexConfigsInput">index_configs_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.retentionDaysInput">retention_days_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.billingAccount">billing_account</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.bucketId">bucket_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `cmek_settings`<sup>Required</sup> <a name="cmek_settings" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.cmekSettings"></a>

```python
cmek_settings: GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference">GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference</a>

---

##### `index_configs`<sup>Required</sup> <a name="index_configs" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.indexConfigs"></a>

```python
index_configs: GoogleLoggingBillingAccountBucketConfigIndexConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList">GoogleLoggingBillingAccountBucketConfigIndexConfigsList</a>

---

##### `lifecycle_state`<sup>Required</sup> <a name="lifecycle_state" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.lifecycleState"></a>

```python
lifecycle_state: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `billing_account_input`<sup>Optional</sup> <a name="billing_account_input" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.billingAccountInput"></a>

```python
billing_account_input: str
```

- *Type:* str

---

##### `bucket_id_input`<sup>Optional</sup> <a name="bucket_id_input" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.bucketIdInput"></a>

```python
bucket_id_input: str
```

- *Type:* str

---

##### `cmek_settings_input`<sup>Optional</sup> <a name="cmek_settings_input" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.cmekSettingsInput"></a>

```python
cmek_settings_input: GoogleLoggingBillingAccountBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a>

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `index_configs_input`<sup>Optional</sup> <a name="index_configs_input" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.indexConfigsInput"></a>

```python
index_configs_input: typing.Union[IResolvable, typing.List[GoogleLoggingBillingAccountBucketConfigIndexConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>]]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `retention_days_input`<sup>Optional</sup> <a name="retention_days_input" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.retentionDaysInput"></a>

```python
retention_days_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `billing_account`<sup>Required</sup> <a name="billing_account" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.billingAccount"></a>

```python
billing_account: str
```

- *Type:* str

---

##### `bucket_id`<sup>Required</sup> <a name="bucket_id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.bucketId"></a>

```python
bucket_id: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `retention_days`<sup>Required</sup> <a name="retention_days" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleLoggingBillingAccountBucketConfigCmekSettings <a name="GoogleLoggingBillingAccountBucketConfigCmekSettings" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_billing_account_bucket_config

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings(
  kms_key_name: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | The resource name for the configured Cloud KMS key. |

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

The resource name for the configured Cloud KMS key.

KMS key name format:
"projects/[PROJECT_ID]/locations/[LOCATION]/keyRings/[KEYRING]/cryptoKeys/[KEY]"
To enable CMEK for the bucket, set this field to a valid kmsKeyName for which the associated service account has the required cloudkms.cryptoKeyEncrypterDecrypter roles assigned for the key.
The Cloud KMS key used by the bucket can be updated by changing the kmsKeyName to a new valid key name. Encryption operations that are in progress will be completed with the key that was in use when they started. Decryption operations will be completed using the key that was used at the time of encryption unless access to that key has been revoked.
See [Enabling CMEK for Logging Buckets](https://cloud.google.com/logging/docs/routing/managed-encryption-storage) for more information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#kms_key_name GoogleLoggingBillingAccountBucketConfig#kms_key_name}

---

### GoogleLoggingBillingAccountBucketConfigConfig <a name="GoogleLoggingBillingAccountBucketConfigConfig" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_billing_account_bucket_config

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  billing_account: str,
  bucket_id: str,
  location: str,
  cmek_settings: GoogleLoggingBillingAccountBucketConfigCmekSettings = None,
  description: str = None,
  id: str = None,
  index_configs: typing.Union[IResolvable, typing.List[GoogleLoggingBillingAccountBucketConfigIndexConfigs]] = None,
  retention_days: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.billingAccount">billing_account</a></code> | <code>str</code> | The parent resource that contains the logging bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.bucketId">bucket_id</a></code> | <code>str</code> | The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.location">location</a></code> | <code>str</code> | The location of the bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.cmekSettings">cmek_settings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a></code> | cmek_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.description">description</a></code> | <code>str</code> | An optional description for this bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#id GoogleLoggingBillingAccountBucketConfig#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.indexConfigs">index_configs</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>]]</code> | index_configs block. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.retentionDays">retention_days</a></code> | <code>typing.Union[int, float]</code> | Logs will be retained by default for this amount of time, after which they will automatically be deleted. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `billing_account`<sup>Required</sup> <a name="billing_account" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.billingAccount"></a>

```python
billing_account: str
```

- *Type:* str

The parent resource that contains the logging bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#billing_account GoogleLoggingBillingAccountBucketConfig#billing_account}

---

##### `bucket_id`<sup>Required</sup> <a name="bucket_id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.bucketId"></a>

```python
bucket_id: str
```

- *Type:* str

The name of the logging bucket. Logging automatically creates two log buckets: _Required and _Default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#bucket_id GoogleLoggingBillingAccountBucketConfig#bucket_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#location GoogleLoggingBillingAccountBucketConfig#location}

---

##### `cmek_settings`<sup>Optional</sup> <a name="cmek_settings" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.cmekSettings"></a>

```python
cmek_settings: GoogleLoggingBillingAccountBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a>

cmek_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#cmek_settings GoogleLoggingBillingAccountBucketConfig#cmek_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.description"></a>

```python
description: str
```

- *Type:* str

An optional description for this bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#description GoogleLoggingBillingAccountBucketConfig#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#id GoogleLoggingBillingAccountBucketConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `index_configs`<sup>Optional</sup> <a name="index_configs" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.indexConfigs"></a>

```python
index_configs: typing.Union[IResolvable, typing.List[GoogleLoggingBillingAccountBucketConfigIndexConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>]]

index_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#index_configs GoogleLoggingBillingAccountBucketConfig#index_configs}

---

##### `retention_days`<sup>Optional</sup> <a name="retention_days" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigConfig.property.retentionDays"></a>

```python
retention_days: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Logs will be retained by default for this amount of time, after which they will automatically be deleted.

The minimum retention period is 1 day. If this value is set to zero at bucket creation time, the default time of 30 days will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#retention_days GoogleLoggingBillingAccountBucketConfig#retention_days}

---

### GoogleLoggingBillingAccountBucketConfigIndexConfigs <a name="GoogleLoggingBillingAccountBucketConfigIndexConfigs" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_billing_account_bucket_config

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs(
  field_path: str,
  type: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs.property.fieldPath">field_path</a></code> | <code>str</code> | The LogEntry field path to index. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs.property.type">type</a></code> | <code>str</code> | The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing. |

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

The LogEntry field path to index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#field_path GoogleLoggingBillingAccountBucketConfig#field_path}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs.property.type"></a>

```python
type: str
```

- *Type:* str

The type of data in this index Note that some paths are automatically indexed, and other paths are not eligible for indexing.

See [indexing documentation](https://cloud.google.com/logging/docs/view/advanced-queries#indexed-fields) for details.
For example: jsonPayload.request.status

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_logging_billing_account_bucket_config#type GoogleLoggingBillingAccountBucketConfig#type}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference <a name="GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_billing_account_bucket_config

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName">kms_key_version_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.serviceAccountId">service_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput">kms_key_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyName">kms_key_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `kms_key_version_name`<sup>Required</sup> <a name="kms_key_version_name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyVersionName"></a>

```python
kms_key_version_name: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `service_account_id`<sup>Required</sup> <a name="service_account_id" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.serviceAccountId"></a>

```python
service_account_id: str
```

- *Type:* str

---

##### `kms_key_name_input`<sup>Optional</sup> <a name="kms_key_name_input" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyNameInput"></a>

```python
kms_key_name_input: str
```

- *Type:* str

---

##### `kms_key_name`<sup>Required</sup> <a name="kms_key_name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.kmsKeyName"></a>

```python
kms_key_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettingsOutputReference.property.internalValue"></a>

```python
internal_value: GoogleLoggingBillingAccountBucketConfigCmekSettings
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigCmekSettings">GoogleLoggingBillingAccountBucketConfigCmekSettings</a>

---


### GoogleLoggingBillingAccountBucketConfigIndexConfigsList <a name="GoogleLoggingBillingAccountBucketConfigIndexConfigsList" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_billing_account_bucket_config

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleLoggingBillingAccountBucketConfigIndexConfigs]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>]]

---


### GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference <a name="GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_logging_billing_account_bucket_config

googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fieldPathInput">field_path_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.typeInput">type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fieldPath">field_path</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.type">type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `field_path_input`<sup>Optional</sup> <a name="field_path_input" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fieldPathInput"></a>

```python
field_path_input: str
```

- *Type:* str

---

##### `type_input`<sup>Optional</sup> <a name="type_input" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.typeInput"></a>

```python
type_input: str
```

- *Type:* str

---

##### `field_path`<sup>Required</sup> <a name="field_path" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.fieldPath"></a>

```python
field_path: str
```

- *Type:* str

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.type"></a>

```python
type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleLoggingBillingAccountBucketConfigIndexConfigs]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleLoggingBillingAccountBucketConfig.GoogleLoggingBillingAccountBucketConfigIndexConfigs">GoogleLoggingBillingAccountBucketConfigIndexConfigs</a>]

---




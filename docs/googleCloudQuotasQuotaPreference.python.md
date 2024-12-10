# `googleCloudQuotasQuotaPreference` Submodule <a name="`googleCloudQuotasQuotaPreference` Submodule" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudQuotasQuotaPreference <a name="GoogleCloudQuotasQuotaPreference" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference google_cloud_quotas_quota_preference}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_quotas_quota_preference

googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  quota_config: GoogleCloudQuotasQuotaPreferenceQuotaConfig,
  contact_email: str = None,
  dimensions: typing.Mapping[str] = None,
  id: str = None,
  ignore_safety_checks: str = None,
  justification: str = None,
  name: str = None,
  parent: str = None,
  quota_id: str = None,
  service: str = None,
  timeouts: GoogleCloudQuotasQuotaPreferenceTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.quotaConfig">quota_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a></code> | quota_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.contactEmail">contact_email</a></code> | <code>str</code> | An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | The dimensions that this quota preference applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#id GoogleCloudQuotasQuotaPreference#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.ignoreSafetyChecks">ignore_safety_checks</a></code> | <code>str</code> | The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.justification">justification</a></code> | <code>str</code> | The reason / justification for this quota preference. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name of the quota preference. Required except in the CREATE requests. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.parent">parent</a></code> | <code>str</code> | The parent of the quota preference. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.quotaId">quota_id</a></code> | <code>str</code> | The id of the quota to which the quota preference is applied. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.service">service</a></code> | <code>str</code> | The name of the service to which the quota preference is applied. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `quota_config`<sup>Required</sup> <a name="quota_config" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.quotaConfig"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a>

quota_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#quota_config GoogleCloudQuotasQuotaPreference#quota_config}

---

##### `contact_email`<sup>Optional</sup> <a name="contact_email" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.contactEmail"></a>

- *Type:* str

An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted.

The Google account for the email address must have quota update permission for the project, folder or organization this quota preference is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#contact_email GoogleCloudQuotasQuotaPreference#contact_email}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.dimensions"></a>

- *Type:* typing.Mapping[str]

The dimensions that this quota preference applies to.

The key of the map entry is the name of a dimension, such as "region", "zone", "network_id", and the value of the map entry is the dimension value. If a dimension is missing from the map of dimensions, the quota preference applies to all the dimension values except for those that have other quota preferences configured for the specific value.

NOTE: QuotaPreferences can only be applied across all values of "user" and "resource" dimension. Do not set values for "user" or "resource" in the dimension map.

Example: '{"provider": "Foo Inc"}' where "provider" is a service specific dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#dimensions GoogleCloudQuotasQuotaPreference#dimensions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#id GoogleCloudQuotasQuotaPreference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_safety_checks`<sup>Optional</sup> <a name="ignore_safety_checks" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.ignoreSafetyChecks"></a>

- *Type:* str

The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#ignore_safety_checks GoogleCloudQuotasQuotaPreference#ignore_safety_checks}

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.justification"></a>

- *Type:* str

The reason / justification for this quota preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#justification GoogleCloudQuotasQuotaPreference#justification}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.name"></a>

- *Type:* str

The resource name of the quota preference. Required except in the CREATE requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#name GoogleCloudQuotasQuotaPreference#name}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.parent"></a>

- *Type:* str

The parent of the quota preference.

Allowed parents are "projects/[project-id / number]" or "folders/[folder-id / number]" or "organizations/[org-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#parent GoogleCloudQuotasQuotaPreference#parent}

---

##### `quota_id`<sup>Optional</sup> <a name="quota_id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.quotaId"></a>

- *Type:* str

The id of the quota to which the quota preference is applied.

A quota id is unique in the service.
Example: 'CPUS-per-project-region'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#quota_id GoogleCloudQuotasQuotaPreference#quota_id}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.service"></a>

- *Type:* str

The name of the service to which the quota preference is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#service GoogleCloudQuotasQuotaPreference#service}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#timeouts GoogleCloudQuotasQuotaPreference#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putQuotaConfig">put_quota_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetContactEmail">reset_contact_email</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetDimensions">reset_dimensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetIgnoreSafetyChecks">reset_ignore_safety_checks</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetJustification">reset_justification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetName">reset_name</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetParent">reset_parent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetQuotaId">reset_quota_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetService">reset_service</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_quota_config` <a name="put_quota_config" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putQuotaConfig"></a>

```python
def put_quota_config(
  preferred_value: str,
  annotations: typing.Mapping[str] = None
) -> None
```

###### `preferred_value`<sup>Required</sup> <a name="preferred_value" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putQuotaConfig.parameter.preferredValue"></a>

- *Type:* str

The preferred value.

Must be greater than or equal to -1. If set to -1, it means the value is "unlimited".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#preferred_value GoogleCloudQuotasQuotaPreference#preferred_value}

---

###### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putQuotaConfig.parameter.annotations"></a>

- *Type:* typing.Mapping[str]

The annotations map for clients to store small amounts of arbitrary data.

Do not put PII or other sensitive information here. See https://google.aip.dev/128#annotations.

An object containing a list of "key: value" pairs. Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#annotations GoogleCloudQuotasQuotaPreference#annotations}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#create GoogleCloudQuotasQuotaPreference#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#delete GoogleCloudQuotasQuotaPreference#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#update GoogleCloudQuotasQuotaPreference#update}.

---

##### `reset_contact_email` <a name="reset_contact_email" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetContactEmail"></a>

```python
def reset_contact_email() -> None
```

##### `reset_dimensions` <a name="reset_dimensions" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetDimensions"></a>

```python
def reset_dimensions() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_ignore_safety_checks` <a name="reset_ignore_safety_checks" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetIgnoreSafetyChecks"></a>

```python
def reset_ignore_safety_checks() -> None
```

##### `reset_justification` <a name="reset_justification" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetJustification"></a>

```python
def reset_justification() -> None
```

##### `reset_name` <a name="reset_name" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetName"></a>

```python
def reset_name() -> None
```

##### `reset_parent` <a name="reset_parent" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetParent"></a>

```python
def reset_parent() -> None
```

##### `reset_quota_id` <a name="reset_quota_id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetQuotaId"></a>

```python
def reset_quota_id() -> None
```

##### `reset_service` <a name="reset_service" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetService"></a>

```python
def reset_service() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GoogleCloudQuotasQuotaPreference resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_quotas_quota_preference

googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_quotas_quota_preference

googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_quotas_quota_preference

googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_quotas_quota_preference

googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GoogleCloudQuotasQuotaPreference resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GoogleCloudQuotasQuotaPreference to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GoogleCloudQuotasQuotaPreference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudQuotasQuotaPreference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaConfig">quota_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference">GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference">GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.contactEmailInput">contact_email_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dimensionsInput">dimensions_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.ignoreSafetyChecksInput">ignore_safety_checks_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.justificationInput">justification_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.parentInput">parent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaConfigInput">quota_config_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaIdInput">quota_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.contactEmail">contact_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.ignoreSafetyChecks">ignore_safety_checks</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.justification">justification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.parent">parent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaId">quota_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `quota_config`<sup>Required</sup> <a name="quota_config" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaConfig"></a>

```python
quota_config: GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference">GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference</a>

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.reconciling"></a>

```python
reconciling: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.timeouts"></a>

```python
timeouts: GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference">GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `contact_email_input`<sup>Optional</sup> <a name="contact_email_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.contactEmailInput"></a>

```python
contact_email_input: str
```

- *Type:* str

---

##### `dimensions_input`<sup>Optional</sup> <a name="dimensions_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dimensionsInput"></a>

```python
dimensions_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `ignore_safety_checks_input`<sup>Optional</sup> <a name="ignore_safety_checks_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.ignoreSafetyChecksInput"></a>

```python
ignore_safety_checks_input: str
```

- *Type:* str

---

##### `justification_input`<sup>Optional</sup> <a name="justification_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.justificationInput"></a>

```python
justification_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `parent_input`<sup>Optional</sup> <a name="parent_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.parentInput"></a>

```python
parent_input: str
```

- *Type:* str

---

##### `quota_config_input`<sup>Optional</sup> <a name="quota_config_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaConfigInput"></a>

```python
quota_config_input: GoogleCloudQuotasQuotaPreferenceQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a>

---

##### `quota_id_input`<sup>Optional</sup> <a name="quota_id_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaIdInput"></a>

```python
quota_id_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GoogleCloudQuotasQuotaPreferenceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a>]

---

##### `contact_email`<sup>Required</sup> <a name="contact_email" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.contactEmail"></a>

```python
contact_email: str
```

- *Type:* str

---

##### `dimensions`<sup>Required</sup> <a name="dimensions" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `ignore_safety_checks`<sup>Required</sup> <a name="ignore_safety_checks" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.ignoreSafetyChecks"></a>

```python
ignore_safety_checks: str
```

- *Type:* str

---

##### `justification`<sup>Required</sup> <a name="justification" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.justification"></a>

```python
justification: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.parent"></a>

```python
parent: str
```

- *Type:* str

---

##### `quota_id`<sup>Required</sup> <a name="quota_id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.quotaId"></a>

```python
quota_id: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreference.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudQuotasQuotaPreferenceConfig <a name="GoogleCloudQuotasQuotaPreferenceConfig" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_quotas_quota_preference

googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  quota_config: GoogleCloudQuotasQuotaPreferenceQuotaConfig,
  contact_email: str = None,
  dimensions: typing.Mapping[str] = None,
  id: str = None,
  ignore_safety_checks: str = None,
  justification: str = None,
  name: str = None,
  parent: str = None,
  quota_id: str = None,
  service: str = None,
  timeouts: GoogleCloudQuotasQuotaPreferenceTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.quotaConfig">quota_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a></code> | quota_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.contactEmail">contact_email</a></code> | <code>str</code> | An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.dimensions">dimensions</a></code> | <code>typing.Mapping[str]</code> | The dimensions that this quota preference applies to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#id GoogleCloudQuotasQuotaPreference#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.ignoreSafetyChecks">ignore_safety_checks</a></code> | <code>str</code> | The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"]. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.justification">justification</a></code> | <code>str</code> | The reason / justification for this quota preference. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.name">name</a></code> | <code>str</code> | The resource name of the quota preference. Required except in the CREATE requests. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.parent">parent</a></code> | <code>str</code> | The parent of the quota preference. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.quotaId">quota_id</a></code> | <code>str</code> | The id of the quota to which the quota preference is applied. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.service">service</a></code> | <code>str</code> | The name of the service to which the quota preference is applied. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `quota_config`<sup>Required</sup> <a name="quota_config" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.quotaConfig"></a>

```python
quota_config: GoogleCloudQuotasQuotaPreferenceQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a>

quota_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#quota_config GoogleCloudQuotasQuotaPreference#quota_config}

---

##### `contact_email`<sup>Optional</sup> <a name="contact_email" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.contactEmail"></a>

```python
contact_email: str
```

- *Type:* str

An email address that can be used for quota related communication between the Google Cloud and the user in case the Google Cloud needs further information to make a decision on whether the user preferred quota can be granted.

The Google account for the email address must have quota update permission for the project, folder or organization this quota preference is for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#contact_email GoogleCloudQuotasQuotaPreference#contact_email}

---

##### `dimensions`<sup>Optional</sup> <a name="dimensions" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.dimensions"></a>

```python
dimensions: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The dimensions that this quota preference applies to.

The key of the map entry is the name of a dimension, such as "region", "zone", "network_id", and the value of the map entry is the dimension value. If a dimension is missing from the map of dimensions, the quota preference applies to all the dimension values except for those that have other quota preferences configured for the specific value.

NOTE: QuotaPreferences can only be applied across all values of "user" and "resource" dimension. Do not set values for "user" or "resource" in the dimension map.

Example: '{"provider": "Foo Inc"}' where "provider" is a service specific dimension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#dimensions GoogleCloudQuotasQuotaPreference#dimensions}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#id GoogleCloudQuotasQuotaPreference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ignore_safety_checks`<sup>Optional</sup> <a name="ignore_safety_checks" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.ignoreSafetyChecks"></a>

```python
ignore_safety_checks: str
```

- *Type:* str

The list of quota safety checks to be ignored. Default value: "QUOTA_SAFETY_CHECK_UNSPECIFIED" Possible values: ["QUOTA_SAFETY_CHECK_UNSPECIFIED", "QUOTA_DECREASE_BELOW_USAGE", "QUOTA_DECREASE_PERCENTAGE_TOO_HIGH"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#ignore_safety_checks GoogleCloudQuotasQuotaPreference#ignore_safety_checks}

---

##### `justification`<sup>Optional</sup> <a name="justification" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.justification"></a>

```python
justification: str
```

- *Type:* str

The reason / justification for this quota preference.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#justification GoogleCloudQuotasQuotaPreference#justification}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name of the quota preference. Required except in the CREATE requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#name GoogleCloudQuotasQuotaPreference#name}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.parent"></a>

```python
parent: str
```

- *Type:* str

The parent of the quota preference.

Allowed parents are "projects/[project-id / number]" or "folders/[folder-id / number]" or "organizations/[org-id / number]".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#parent GoogleCloudQuotasQuotaPreference#parent}

---

##### `quota_id`<sup>Optional</sup> <a name="quota_id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.quotaId"></a>

```python
quota_id: str
```

- *Type:* str

The id of the quota to which the quota preference is applied.

A quota id is unique in the service.
Example: 'CPUS-per-project-region'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#quota_id GoogleCloudQuotasQuotaPreference#quota_id}

---

##### `service`<sup>Optional</sup> <a name="service" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.service"></a>

```python
service: str
```

- *Type:* str

The name of the service to which the quota preference is applied.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#service GoogleCloudQuotasQuotaPreference#service}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceConfig.property.timeouts"></a>

```python
timeouts: GoogleCloudQuotasQuotaPreferenceTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#timeouts GoogleCloudQuotasQuotaPreference#timeouts}

---

### GoogleCloudQuotasQuotaPreferenceQuotaConfig <a name="GoogleCloudQuotasQuotaPreferenceQuotaConfig" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_quotas_quota_preference

googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig(
  preferred_value: str,
  annotations: typing.Mapping[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.property.preferredValue">preferred_value</a></code> | <code>str</code> | The preferred value. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | The annotations map for clients to store small amounts of arbitrary data. |

---

##### `preferred_value`<sup>Required</sup> <a name="preferred_value" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.property.preferredValue"></a>

```python
preferred_value: str
```

- *Type:* str

The preferred value.

Must be greater than or equal to -1. If set to -1, it means the value is "unlimited".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#preferred_value GoogleCloudQuotasQuotaPreference#preferred_value}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

The annotations map for clients to store small amounts of arbitrary data.

Do not put PII or other sensitive information here. See https://google.aip.dev/128#annotations.

An object containing a list of "key: value" pairs. Example: '{ "name": "wrench", "mass": "1.3kg", "count": "3" }'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#annotations GoogleCloudQuotasQuotaPreference#annotations}

---

### GoogleCloudQuotasQuotaPreferenceTimeouts <a name="GoogleCloudQuotasQuotaPreferenceTimeouts" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_quotas_quota_preference

googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#create GoogleCloudQuotasQuotaPreference#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#delete GoogleCloudQuotasQuotaPreference#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#update GoogleCloudQuotasQuotaPreference#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#create GoogleCloudQuotasQuotaPreference#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#delete GoogleCloudQuotasQuotaPreference#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.13.0/docs/resources/google_cloud_quotas_quota_preference#update GoogleCloudQuotasQuotaPreference#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference <a name="GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_quotas_quota_preference

googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resetAnnotations">reset_annotations</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_annotations` <a name="reset_annotations" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.resetAnnotations"></a>

```python
def reset_annotations() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.grantedValue">granted_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.requestOrigin">request_origin</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.stateDetail">state_detail</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.traceId">trace_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotationsInput">annotations_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValueInput">preferred_value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotations">annotations</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValue">preferred_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `granted_value`<sup>Required</sup> <a name="granted_value" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.grantedValue"></a>

```python
granted_value: str
```

- *Type:* str

---

##### `request_origin`<sup>Required</sup> <a name="request_origin" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.requestOrigin"></a>

```python
request_origin: str
```

- *Type:* str

---

##### `state_detail`<sup>Required</sup> <a name="state_detail" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.stateDetail"></a>

```python
state_detail: str
```

- *Type:* str

---

##### `trace_id`<sup>Required</sup> <a name="trace_id" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.traceId"></a>

```python
trace_id: str
```

- *Type:* str

---

##### `annotations_input`<sup>Optional</sup> <a name="annotations_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotationsInput"></a>

```python
annotations_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `preferred_value_input`<sup>Optional</sup> <a name="preferred_value_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValueInput"></a>

```python
preferred_value_input: str
```

- *Type:* str

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.annotations"></a>

```python
annotations: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `preferred_value`<sup>Required</sup> <a name="preferred_value" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.preferredValue"></a>

```python
preferred_value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfigOutputReference.property.internalValue"></a>

```python
internal_value: GoogleCloudQuotasQuotaPreferenceQuotaConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceQuotaConfig">GoogleCloudQuotasQuotaPreferenceQuotaConfig</a>

---


### GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference <a name="GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_cloud_quotas_quota_preference

googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GoogleCloudQuotasQuotaPreferenceTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googleCloudQuotasQuotaPreference.GoogleCloudQuotasQuotaPreferenceTimeouts">GoogleCloudQuotasQuotaPreferenceTimeouts</a>]

---




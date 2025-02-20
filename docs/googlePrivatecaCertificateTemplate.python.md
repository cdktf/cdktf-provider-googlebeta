# `googlePrivatecaCertificateTemplate` Submodule <a name="`googlePrivatecaCertificateTemplate` Submodule" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePrivatecaCertificateTemplate <a name="GooglePrivatecaCertificateTemplate" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template google_privateca_certificate_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  description: str = None,
  id: str = None,
  identity_constraints: GooglePrivatecaCertificateTemplateIdentityConstraints = None,
  labels: typing.Mapping[str] = None,
  maximum_lifetime: str = None,
  passthrough_extensions: GooglePrivatecaCertificateTemplatePassthroughExtensions = None,
  predefined_values: GooglePrivatecaCertificateTemplatePredefinedValues = None,
  project: str = None,
  timeouts: GooglePrivatecaCertificateTemplateTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.name">name</a></code> | <code>str</code> | The resource name for this CertificateTemplate in the format 'projects/* /locations/* /certificateTemplates/*'. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.description">description</a></code> | <code>str</code> | Optional. A human-readable description of scenarios this template is intended for. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#id GooglePrivatecaCertificateTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.identityConstraints">identity_constraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a></code> | identity_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.maximumLifetime">maximum_lifetime</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.passthroughExtensions">passthrough_extensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a></code> | passthrough_extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.predefinedValues">predefined_values</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a></code> | predefined_values block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#project GooglePrivatecaCertificateTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.location"></a>

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#location GooglePrivatecaCertificateTemplate#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.name"></a>

- *Type:* str

The resource name for this CertificateTemplate in the format 'projects/* /locations/* /certificateTemplates/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#name GooglePrivatecaCertificateTemplate#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.description"></a>

- *Type:* str

Optional. A human-readable description of scenarios this template is intended for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#description GooglePrivatecaCertificateTemplate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#id GooglePrivatecaCertificateTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_constraints`<sup>Optional</sup> <a name="identity_constraints" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.identityConstraints"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a>

identity_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#identity_constraints GooglePrivatecaCertificateTemplate#identity_constraints}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.labels"></a>

- *Type:* typing.Mapping[str]

Optional. Labels with user-defined metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#labels GooglePrivatecaCertificateTemplate#labels}

---

##### `maximum_lifetime`<sup>Optional</sup> <a name="maximum_lifetime" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.maximumLifetime"></a>

- *Type:* str

Optional.

The maximum lifetime allowed for all issued certificates that use this template. If the issuing CaPool's IssuancePolicy specifies a maximum lifetime the minimum of the two durations will be the maximum lifetime for issued. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#maximum_lifetime GooglePrivatecaCertificateTemplate#maximum_lifetime}

---

##### `passthrough_extensions`<sup>Optional</sup> <a name="passthrough_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.passthroughExtensions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a>

passthrough_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#passthrough_extensions GooglePrivatecaCertificateTemplate#passthrough_extensions}

---

##### `predefined_values`<sup>Optional</sup> <a name="predefined_values" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.predefinedValues"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a>

predefined_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#predefined_values GooglePrivatecaCertificateTemplate#predefined_values}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#project GooglePrivatecaCertificateTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#timeouts GooglePrivatecaCertificateTemplate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putIdentityConstraints">put_identity_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPassthroughExtensions">put_passthrough_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPredefinedValues">put_predefined_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetIdentityConstraints">reset_identity_constraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetLabels">reset_labels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetMaximumLifetime">reset_maximum_lifetime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetPassthroughExtensions">reset_passthrough_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetPredefinedValues">reset_predefined_values</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_identity_constraints` <a name="put_identity_constraints" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putIdentityConstraints"></a>

```python
def put_identity_constraints(
  allow_subject_alt_names_passthrough: typing.Union[bool, IResolvable],
  allow_subject_passthrough: typing.Union[bool, IResolvable],
  cel_expression: GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression = None
) -> None
```

###### `allow_subject_alt_names_passthrough`<sup>Required</sup> <a name="allow_subject_alt_names_passthrough" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putIdentityConstraints.parameter.allowSubjectAltNamesPassthrough"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Required.

If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#allow_subject_alt_names_passthrough GooglePrivatecaCertificateTemplate#allow_subject_alt_names_passthrough}

---

###### `allow_subject_passthrough`<sup>Required</sup> <a name="allow_subject_passthrough" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putIdentityConstraints.parameter.allowSubjectPassthrough"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Required.

If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#allow_subject_passthrough GooglePrivatecaCertificateTemplate#allow_subject_passthrough}

---

###### `cel_expression`<sup>Optional</sup> <a name="cel_expression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putIdentityConstraints.parameter.celExpression"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression</a>

cel_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#cel_expression GooglePrivatecaCertificateTemplate#cel_expression}

---

##### `put_passthrough_extensions` <a name="put_passthrough_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPassthroughExtensions"></a>

```python
def put_passthrough_extensions(
  additional_extensions: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions]] = None,
  known_extensions: typing.List[str] = None
) -> None
```

###### `additional_extensions`<sup>Optional</sup> <a name="additional_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPassthroughExtensions.parameter.additionalExtensions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>]]

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#additional_extensions GooglePrivatecaCertificateTemplate#additional_extensions}

---

###### `known_extensions`<sup>Optional</sup> <a name="known_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPassthroughExtensions.parameter.knownExtensions"></a>

- *Type:* typing.List[str]

Optional.

A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#known_extensions GooglePrivatecaCertificateTemplate#known_extensions}

---

##### `put_predefined_values` <a name="put_predefined_values" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPredefinedValues"></a>

```python
def put_predefined_values(
  additional_extensions: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions]] = None,
  aia_ocsp_servers: typing.List[str] = None,
  ca_options: GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions = None,
  key_usage: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage = None,
  policy_ids: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds]] = None
) -> None
```

###### `additional_extensions`<sup>Optional</sup> <a name="additional_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPredefinedValues.parameter.additionalExtensions"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>]]

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#additional_extensions GooglePrivatecaCertificateTemplate#additional_extensions}

---

###### `aia_ocsp_servers`<sup>Optional</sup> <a name="aia_ocsp_servers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPredefinedValues.parameter.aiaOcspServers"></a>

- *Type:* typing.List[str]

Optional.

Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#aia_ocsp_servers GooglePrivatecaCertificateTemplate#aia_ocsp_servers}

---

###### `ca_options`<sup>Optional</sup> <a name="ca_options" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPredefinedValues.parameter.caOptions"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions</a>

ca_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#ca_options GooglePrivatecaCertificateTemplate#ca_options}

---

###### `key_usage`<sup>Optional</sup> <a name="key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPredefinedValues.parameter.keyUsage"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage</a>

key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#key_usage GooglePrivatecaCertificateTemplate#key_usage}

---

###### `policy_ids`<sup>Optional</sup> <a name="policy_ids" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putPredefinedValues.parameter.policyIds"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>]]

policy_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#policy_ids GooglePrivatecaCertificateTemplate#policy_ids}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#create GooglePrivatecaCertificateTemplate#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#delete GooglePrivatecaCertificateTemplate#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#update GooglePrivatecaCertificateTemplate#update}.

---

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_identity_constraints` <a name="reset_identity_constraints" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetIdentityConstraints"></a>

```python
def reset_identity_constraints() -> None
```

##### `reset_labels` <a name="reset_labels" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetLabels"></a>

```python
def reset_labels() -> None
```

##### `reset_maximum_lifetime` <a name="reset_maximum_lifetime" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetMaximumLifetime"></a>

```python
def reset_maximum_lifetime() -> None
```

##### `reset_passthrough_extensions` <a name="reset_passthrough_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetPassthroughExtensions"></a>

```python
def reset_passthrough_extensions() -> None
```

##### `reset_predefined_values` <a name="reset_predefined_values" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetPredefinedValues"></a>

```python
def reset_predefined_values() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a GooglePrivatecaCertificateTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.generateConfigForImport"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a GooglePrivatecaCertificateTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the GooglePrivatecaCertificateTemplate to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing GooglePrivatecaCertificateTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GooglePrivatecaCertificateTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.effectiveLabels">effective_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.identityConstraints">identity_constraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference">GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.passthroughExtensions">passthrough_extensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference">GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.predefinedValues">predefined_values</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformLabels">terraform_labels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference">GooglePrivatecaCertificateTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.identityConstraintsInput">identity_constraints_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.labelsInput">labels_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.maximumLifetimeInput">maximum_lifetime_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.passthroughExtensionsInput">passthrough_extensions_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.predefinedValuesInput">predefined_values_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a>]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.maximumLifetime">maximum_lifetime</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `effective_labels`<sup>Required</sup> <a name="effective_labels" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.effectiveLabels"></a>

```python
effective_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `identity_constraints`<sup>Required</sup> <a name="identity_constraints" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.identityConstraints"></a>

```python
identity_constraints: GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference">GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference</a>

---

##### `passthrough_extensions`<sup>Required</sup> <a name="passthrough_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.passthroughExtensions"></a>

```python
passthrough_extensions: GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference">GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference</a>

---

##### `predefined_values`<sup>Required</sup> <a name="predefined_values" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.predefinedValues"></a>

```python
predefined_values: GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference</a>

---

##### `terraform_labels`<sup>Required</sup> <a name="terraform_labels" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.terraformLabels"></a>

```python
terraform_labels: StringMap
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.timeouts"></a>

```python
timeouts: GooglePrivatecaCertificateTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference">GooglePrivatecaCertificateTemplateTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `identity_constraints_input`<sup>Optional</sup> <a name="identity_constraints_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.identityConstraintsInput"></a>

```python
identity_constraints_input: GooglePrivatecaCertificateTemplateIdentityConstraints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `labels_input`<sup>Optional</sup> <a name="labels_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.labelsInput"></a>

```python
labels_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `maximum_lifetime_input`<sup>Optional</sup> <a name="maximum_lifetime_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.maximumLifetimeInput"></a>

```python
maximum_lifetime_input: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `passthrough_extensions_input`<sup>Optional</sup> <a name="passthrough_extensions_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.passthroughExtensionsInput"></a>

```python
passthrough_extensions_input: GooglePrivatecaCertificateTemplatePassthroughExtensions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a>

---

##### `predefined_values_input`<sup>Optional</sup> <a name="predefined_values_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.predefinedValuesInput"></a>

```python
predefined_values_input: GooglePrivatecaCertificateTemplatePredefinedValues
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, GooglePrivatecaCertificateTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a>]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `maximum_lifetime`<sup>Required</sup> <a name="maximum_lifetime" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.maximumLifetime"></a>

```python
maximum_lifetime: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplate.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePrivatecaCertificateTemplateConfig <a name="GooglePrivatecaCertificateTemplateConfig" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  location: str,
  name: str,
  description: str = None,
  id: str = None,
  identity_constraints: GooglePrivatecaCertificateTemplateIdentityConstraints = None,
  labels: typing.Mapping[str] = None,
  maximum_lifetime: str = None,
  passthrough_extensions: GooglePrivatecaCertificateTemplatePassthroughExtensions = None,
  predefined_values: GooglePrivatecaCertificateTemplatePredefinedValues = None,
  project: str = None,
  timeouts: GooglePrivatecaCertificateTemplateTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.location">location</a></code> | <code>str</code> | The location for the resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.name">name</a></code> | <code>str</code> | The resource name for this CertificateTemplate in the format 'projects/* /locations/* /certificateTemplates/*'. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.description">description</a></code> | <code>str</code> | Optional. A human-readable description of scenarios this template is intended for. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#id GooglePrivatecaCertificateTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.identityConstraints">identity_constraints</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a></code> | identity_constraints block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.labels">labels</a></code> | <code>typing.Mapping[str]</code> | Optional. Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.maximumLifetime">maximum_lifetime</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.passthroughExtensions">passthrough_extensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a></code> | passthrough_extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.predefinedValues">predefined_values</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a></code> | predefined_values block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#project GooglePrivatecaCertificateTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.location"></a>

```python
location: str
```

- *Type:* str

The location for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#location GooglePrivatecaCertificateTemplate#location}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.name"></a>

```python
name: str
```

- *Type:* str

The resource name for this CertificateTemplate in the format 'projects/* /locations/* /certificateTemplates/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#name GooglePrivatecaCertificateTemplate#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Optional. A human-readable description of scenarios this template is intended for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#description GooglePrivatecaCertificateTemplate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#id GooglePrivatecaCertificateTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `identity_constraints`<sup>Optional</sup> <a name="identity_constraints" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.identityConstraints"></a>

```python
identity_constraints: GooglePrivatecaCertificateTemplateIdentityConstraints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a>

identity_constraints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#identity_constraints GooglePrivatecaCertificateTemplate#identity_constraints}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.labels"></a>

```python
labels: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Optional. Labels with user-defined metadata.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#labels GooglePrivatecaCertificateTemplate#labels}

---

##### `maximum_lifetime`<sup>Optional</sup> <a name="maximum_lifetime" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.maximumLifetime"></a>

```python
maximum_lifetime: str
```

- *Type:* str

Optional.

The maximum lifetime allowed for all issued certificates that use this template. If the issuing CaPool's IssuancePolicy specifies a maximum lifetime the minimum of the two durations will be the maximum lifetime for issued. Note that if the issuing CertificateAuthority expires before a Certificate's requested maximum_lifetime, the effective lifetime will be explicitly truncated to match it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#maximum_lifetime GooglePrivatecaCertificateTemplate#maximum_lifetime}

---

##### `passthrough_extensions`<sup>Optional</sup> <a name="passthrough_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.passthroughExtensions"></a>

```python
passthrough_extensions: GooglePrivatecaCertificateTemplatePassthroughExtensions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a>

passthrough_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#passthrough_extensions GooglePrivatecaCertificateTemplate#passthrough_extensions}

---

##### `predefined_values`<sup>Optional</sup> <a name="predefined_values" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.predefinedValues"></a>

```python
predefined_values: GooglePrivatecaCertificateTemplatePredefinedValues
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a>

predefined_values block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#predefined_values GooglePrivatecaCertificateTemplate#predefined_values}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#project GooglePrivatecaCertificateTemplate#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateConfig.property.timeouts"></a>

```python
timeouts: GooglePrivatecaCertificateTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#timeouts GooglePrivatecaCertificateTemplate#timeouts}

---

### GooglePrivatecaCertificateTemplateIdentityConstraints <a name="GooglePrivatecaCertificateTemplateIdentityConstraints" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints(
  allow_subject_alt_names_passthrough: typing.Union[bool, IResolvable],
  allow_subject_passthrough: typing.Union[bool, IResolvable],
  cel_expression: GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints.property.allowSubjectAltNamesPassthrough">allow_subject_alt_names_passthrough</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints.property.allowSubjectPassthrough">allow_subject_passthrough</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Required. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints.property.celExpression">cel_expression</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression</a></code> | cel_expression block. |

---

##### `allow_subject_alt_names_passthrough`<sup>Required</sup> <a name="allow_subject_alt_names_passthrough" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints.property.allowSubjectAltNamesPassthrough"></a>

```python
allow_subject_alt_names_passthrough: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Required.

If this is true, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. Otherwise, the requested SubjectAltNames will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#allow_subject_alt_names_passthrough GooglePrivatecaCertificateTemplate#allow_subject_alt_names_passthrough}

---

##### `allow_subject_passthrough`<sup>Required</sup> <a name="allow_subject_passthrough" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints.property.allowSubjectPassthrough"></a>

```python
allow_subject_passthrough: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Required.

If this is true, the Subject field may be copied from a certificate request into the signed certificate. Otherwise, the requested Subject will be discarded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#allow_subject_passthrough GooglePrivatecaCertificateTemplate#allow_subject_passthrough}

---

##### `cel_expression`<sup>Optional</sup> <a name="cel_expression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints.property.celExpression"></a>

```python
cel_expression: GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression</a>

cel_expression block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#cel_expression GooglePrivatecaCertificateTemplate#cel_expression}

---

### GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression <a name="GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.description">description</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.expression">expression</a></code> | <code>str</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.location">location</a></code> | <code>str</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.title">title</a></code> | <code>str</code> | Optional. |

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.description"></a>

```python
description: str
```

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#description GooglePrivatecaCertificateTemplate#description}

---

##### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.expression"></a>

```python
expression: str
```

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#expression GooglePrivatecaCertificateTemplate#expression}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.location"></a>

```python
location: str
```

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#location GooglePrivatecaCertificateTemplate#location}

---

##### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression.property.title"></a>

```python
title: str
```

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#title GooglePrivatecaCertificateTemplate#title}

---

### GooglePrivatecaCertificateTemplatePassthroughExtensions <a name="GooglePrivatecaCertificateTemplatePassthroughExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions(
  additional_extensions: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions]] = None,
  known_extensions: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions.property.additionalExtensions">additional_extensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>]]</code> | additional_extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions.property.knownExtensions">known_extensions</a></code> | <code>typing.List[str]</code> | Optional. |

---

##### `additional_extensions`<sup>Optional</sup> <a name="additional_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions.property.additionalExtensions"></a>

```python
additional_extensions: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>]]

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#additional_extensions GooglePrivatecaCertificateTemplate#additional_extensions}

---

##### `known_extensions`<sup>Optional</sup> <a name="known_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions.property.knownExtensions"></a>

```python
known_extensions: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

A set of named X.509 extensions. Will be combined with additional_extensions to determine the full set of X.509 extensions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#known_extensions GooglePrivatecaCertificateTemplate#known_extensions}

---

### GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions <a name="GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions(
  object_id_path: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions.property.objectIdPath">object_id_path</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Required. The parts of an OID path. The most significant parts of the path come first. |

---

##### `object_id_path`<sup>Required</sup> <a name="object_id_path" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions.property.objectIdPath"></a>

```python
object_id_path: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Required. The parts of an OID path. The most significant parts of the path come first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#object_id_path GooglePrivatecaCertificateTemplate#object_id_path}

---

### GooglePrivatecaCertificateTemplatePredefinedValues <a name="GooglePrivatecaCertificateTemplatePredefinedValues" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues(
  additional_extensions: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions]] = None,
  aia_ocsp_servers: typing.List[str] = None,
  ca_options: GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions = None,
  key_usage: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage = None,
  policy_ids: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.additionalExtensions">additional_extensions</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>]]</code> | additional_extensions block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.aiaOcspServers">aia_ocsp_servers</a></code> | <code>typing.List[str]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.caOptions">ca_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions</a></code> | ca_options block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.keyUsage">key_usage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage</a></code> | key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.policyIds">policy_ids</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>]]</code> | policy_ids block. |

---

##### `additional_extensions`<sup>Optional</sup> <a name="additional_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.additionalExtensions"></a>

```python
additional_extensions: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>]]

additional_extensions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#additional_extensions GooglePrivatecaCertificateTemplate#additional_extensions}

---

##### `aia_ocsp_servers`<sup>Optional</sup> <a name="aia_ocsp_servers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.aiaOcspServers"></a>

```python
aia_ocsp_servers: typing.List[str]
```

- *Type:* typing.List[str]

Optional.

Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#aia_ocsp_servers GooglePrivatecaCertificateTemplate#aia_ocsp_servers}

---

##### `ca_options`<sup>Optional</sup> <a name="ca_options" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.caOptions"></a>

```python
ca_options: GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions</a>

ca_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#ca_options GooglePrivatecaCertificateTemplate#ca_options}

---

##### `key_usage`<sup>Optional</sup> <a name="key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.keyUsage"></a>

```python
key_usage: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage</a>

key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#key_usage GooglePrivatecaCertificateTemplate#key_usage}

---

##### `policy_ids`<sup>Optional</sup> <a name="policy_ids" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues.property.policyIds"></a>

```python
policy_ids: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>]]

policy_ids block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#policy_ids GooglePrivatecaCertificateTemplate#policy_ids}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions <a name="GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions(
  object_id: GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId,
  value: str,
  critical: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.objectId">object_id</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a></code> | object_id block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.value">value</a></code> | <code>str</code> | Required. The value of this X.509 extension. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.critical">critical</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.objectId"></a>

```python
object_id: GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a>

object_id block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#object_id GooglePrivatecaCertificateTemplate#object_id}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.value"></a>

```python
value: str
```

- *Type:* str

Required. The value of this X.509 extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#value GooglePrivatecaCertificateTemplate#value}

---

##### `critical`<sup>Optional</sup> <a name="critical" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions.property.critical"></a>

```python
critical: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#critical GooglePrivatecaCertificateTemplate#critical}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId <a name="GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId(
  object_id_path: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId.property.objectIdPath">object_id_path</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Required. The parts of an OID path. The most significant parts of the path come first. |

---

##### `object_id_path`<sup>Required</sup> <a name="object_id_path" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId.property.objectIdPath"></a>

```python
object_id_path: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Required. The parts of an OID path. The most significant parts of the path come first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#object_id_path GooglePrivatecaCertificateTemplate#object_id_path}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions <a name="GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions(
  is_ca: typing.Union[bool, IResolvable] = None,
  max_issuer_path_length: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions.property.isCa">is_ca</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Optional. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions.property.maxIssuerPathLength">max_issuer_path_length</a></code> | <code>typing.Union[int, float]</code> | Optional. |

---

##### `is_ca`<sup>Optional</sup> <a name="is_ca" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions.property.isCa"></a>

```python
is_ca: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#is_ca GooglePrivatecaCertificateTemplate#is_ca}

---

##### `max_issuer_path_length`<sup>Optional</sup> <a name="max_issuer_path_length" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions.property.maxIssuerPathLength"></a>

```python
max_issuer_path_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Optional.

Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#max_issuer_path_length GooglePrivatecaCertificateTemplate#max_issuer_path_length}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage(
  base_key_usage: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage = None,
  extended_key_usage: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage = None,
  unknown_extended_key_usages: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages]] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.baseKeyUsage">base_key_usage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a></code> | base_key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.extendedKeyUsage">extended_key_usage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a></code> | extended_key_usage block. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.unknownExtendedKeyUsages">unknown_extended_key_usages</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>]]</code> | unknown_extended_key_usages block. |

---

##### `base_key_usage`<sup>Optional</sup> <a name="base_key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.baseKeyUsage"></a>

```python
base_key_usage: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a>

base_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#base_key_usage GooglePrivatecaCertificateTemplate#base_key_usage}

---

##### `extended_key_usage`<sup>Optional</sup> <a name="extended_key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.extendedKeyUsage"></a>

```python
extended_key_usage: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a>

extended_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#extended_key_usage GooglePrivatecaCertificateTemplate#extended_key_usage}

---

##### `unknown_extended_key_usages`<sup>Optional</sup> <a name="unknown_extended_key_usages" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage.property.unknownExtendedKeyUsages"></a>

```python
unknown_extended_key_usages: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>]]

unknown_extended_key_usages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#unknown_extended_key_usages GooglePrivatecaCertificateTemplate#unknown_extended_key_usages}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage(
  cert_sign: typing.Union[bool, IResolvable] = None,
  content_commitment: typing.Union[bool, IResolvable] = None,
  crl_sign: typing.Union[bool, IResolvable] = None,
  data_encipherment: typing.Union[bool, IResolvable] = None,
  decipher_only: typing.Union[bool, IResolvable] = None,
  digital_signature: typing.Union[bool, IResolvable] = None,
  encipher_only: typing.Union[bool, IResolvable] = None,
  key_agreement: typing.Union[bool, IResolvable] = None,
  key_encipherment: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.certSign">cert_sign</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The key may be used to sign certificates. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.contentCommitment">content_commitment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.crlSign">crl_sign</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The key may be used sign certificate revocation lists. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.dataEncipherment">data_encipherment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The key may be used to encipher data. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.decipherOnly">decipher_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The key may be used to decipher only. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.digitalSignature">digital_signature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The key may be used for digital signatures. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.encipherOnly">encipher_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The key may be used to encipher only. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.keyAgreement">key_agreement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The key may be used in a key agreement protocol. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.keyEncipherment">key_encipherment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | The key may be used to encipher other keys. |

---

##### `cert_sign`<sup>Optional</sup> <a name="cert_sign" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.certSign"></a>

```python
cert_sign: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used to sign certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#cert_sign GooglePrivatecaCertificateTemplate#cert_sign}

---

##### `content_commitment`<sup>Optional</sup> <a name="content_commitment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.contentCommitment"></a>

```python
content_commitment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#content_commitment GooglePrivatecaCertificateTemplate#content_commitment}

---

##### `crl_sign`<sup>Optional</sup> <a name="crl_sign" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.crlSign"></a>

```python
crl_sign: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used sign certificate revocation lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#crl_sign GooglePrivatecaCertificateTemplate#crl_sign}

---

##### `data_encipherment`<sup>Optional</sup> <a name="data_encipherment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.dataEncipherment"></a>

```python
data_encipherment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#data_encipherment GooglePrivatecaCertificateTemplate#data_encipherment}

---

##### `decipher_only`<sup>Optional</sup> <a name="decipher_only" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.decipherOnly"></a>

```python
decipher_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used to decipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#decipher_only GooglePrivatecaCertificateTemplate#decipher_only}

---

##### `digital_signature`<sup>Optional</sup> <a name="digital_signature" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.digitalSignature"></a>

```python
digital_signature: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used for digital signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#digital_signature GooglePrivatecaCertificateTemplate#digital_signature}

---

##### `encipher_only`<sup>Optional</sup> <a name="encipher_only" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.encipherOnly"></a>

```python
encipher_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used to encipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#encipher_only GooglePrivatecaCertificateTemplate#encipher_only}

---

##### `key_agreement`<sup>Optional</sup> <a name="key_agreement" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.keyAgreement"></a>

```python
key_agreement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used in a key agreement protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#key_agreement GooglePrivatecaCertificateTemplate#key_agreement}

---

##### `key_encipherment`<sup>Optional</sup> <a name="key_encipherment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage.property.keyEncipherment"></a>

```python
key_encipherment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used to encipher other keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#key_encipherment GooglePrivatecaCertificateTemplate#key_encipherment}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage(
  client_auth: typing.Union[bool, IResolvable] = None,
  code_signing: typing.Union[bool, IResolvable] = None,
  email_protection: typing.Union[bool, IResolvable] = None,
  ocsp_signing: typing.Union[bool, IResolvable] = None,
  server_auth: typing.Union[bool, IResolvable] = None,
  time_stamping: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.clientAuth">client_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.codeSigning">code_signing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.emailProtection">email_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.ocspSigning">ocsp_signing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.serverAuth">server_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.timeStamping">time_stamping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". |

---

##### `client_auth`<sup>Optional</sup> <a name="client_auth" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.clientAuth"></a>

```python
client_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#client_auth GooglePrivatecaCertificateTemplate#client_auth}

---

##### `code_signing`<sup>Optional</sup> <a name="code_signing" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.codeSigning"></a>

```python
code_signing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#code_signing GooglePrivatecaCertificateTemplate#code_signing}

---

##### `email_protection`<sup>Optional</sup> <a name="email_protection" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.emailProtection"></a>

```python
email_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#email_protection GooglePrivatecaCertificateTemplate#email_protection}

---

##### `ocsp_signing`<sup>Optional</sup> <a name="ocsp_signing" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.ocspSigning"></a>

```python
ocsp_signing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#ocsp_signing GooglePrivatecaCertificateTemplate#ocsp_signing}

---

##### `server_auth`<sup>Optional</sup> <a name="server_auth" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.serverAuth"></a>

```python
server_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#server_auth GooglePrivatecaCertificateTemplate#server_auth}

---

##### `time_stamping`<sup>Optional</sup> <a name="time_stamping" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage.property.timeStamping"></a>

```python
time_stamping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#time_stamping GooglePrivatecaCertificateTemplate#time_stamping}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages(
  object_id_path: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath">object_id_path</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Required. The parts of an OID path. The most significant parts of the path come first. |

---

##### `object_id_path`<sup>Required</sup> <a name="object_id_path" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath"></a>

```python
object_id_path: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Required. The parts of an OID path. The most significant parts of the path come first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#object_id_path GooglePrivatecaCertificateTemplate#object_id_path}

---

### GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds <a name="GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds(
  object_id_path: typing.List[typing.Union[int, float]]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds.property.objectIdPath">object_id_path</a></code> | <code>typing.List[typing.Union[int, float]]</code> | Required. The parts of an OID path. The most significant parts of the path come first. |

---

##### `object_id_path`<sup>Required</sup> <a name="object_id_path" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds.property.objectIdPath"></a>

```python
object_id_path: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

Required. The parts of an OID path. The most significant parts of the path come first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#object_id_path GooglePrivatecaCertificateTemplate#object_id_path}

---

### GooglePrivatecaCertificateTemplateTimeouts <a name="GooglePrivatecaCertificateTemplateTimeouts" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#create GooglePrivatecaCertificateTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#delete GooglePrivatecaCertificateTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#update GooglePrivatecaCertificateTemplate#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#create GooglePrivatecaCertificateTemplate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#delete GooglePrivatecaCertificateTemplate#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#update GooglePrivatecaCertificateTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference <a name="GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetExpression">reset_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetLocation">reset_location</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetTitle">reset_title</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_expression` <a name="reset_expression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetExpression"></a>

```python
def reset_expression() -> None
```

##### `reset_location` <a name="reset_location" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetLocation"></a>

```python
def reset_location() -> None
```

##### `reset_title` <a name="reset_title" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.resetTitle"></a>

```python
def reset_title() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.expressionInput">expression_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.titleInput">title_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.expression">expression</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.title">title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `expression_input`<sup>Optional</sup> <a name="expression_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.expressionInput"></a>

```python
expression_input: str
```

- *Type:* str

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `title_input`<sup>Optional</sup> <a name="title_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.titleInput"></a>

```python
title_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.expression"></a>

```python
expression: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.title"></a>

```python
title: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression</a>

---


### GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference <a name="GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.putCelExpression">put_cel_expression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.resetCelExpression">reset_cel_expression</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_cel_expression` <a name="put_cel_expression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.putCelExpression"></a>

```python
def put_cel_expression(
  description: str = None,
  expression: str = None,
  location: str = None,
  title: str = None
) -> None
```

###### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.putCelExpression.parameter.description"></a>

- *Type:* str

Optional.

Description of the expression. This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#description GooglePrivatecaCertificateTemplate#description}

---

###### `expression`<sup>Optional</sup> <a name="expression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.putCelExpression.parameter.expression"></a>

- *Type:* str

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#expression GooglePrivatecaCertificateTemplate#expression}

---

###### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.putCelExpression.parameter.location"></a>

- *Type:* str

Optional.

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#location GooglePrivatecaCertificateTemplate#location}

---

###### `title`<sup>Optional</sup> <a name="title" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.putCelExpression.parameter.title"></a>

- *Type:* str

Optional.

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#title GooglePrivatecaCertificateTemplate#title}

---

##### `reset_cel_expression` <a name="reset_cel_expression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.resetCelExpression"></a>

```python
def reset_cel_expression() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.celExpression">cel_expression</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput">allow_subject_alt_names_passthrough_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput">allow_subject_passthrough_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.celExpressionInput">cel_expression_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough">allow_subject_alt_names_passthrough</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectPassthrough">allow_subject_passthrough</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cel_expression`<sup>Required</sup> <a name="cel_expression" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.celExpression"></a>

```python
cel_expression: GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpressionOutputReference</a>

---

##### `allow_subject_alt_names_passthrough_input`<sup>Optional</sup> <a name="allow_subject_alt_names_passthrough_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput"></a>

```python
allow_subject_alt_names_passthrough_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_subject_passthrough_input`<sup>Optional</sup> <a name="allow_subject_passthrough_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput"></a>

```python
allow_subject_passthrough_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cel_expression_input`<sup>Optional</sup> <a name="cel_expression_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.celExpressionInput"></a>

```python
cel_expression_input: GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression">GooglePrivatecaCertificateTemplateIdentityConstraintsCelExpression</a>

---

##### `allow_subject_alt_names_passthrough`<sup>Required</sup> <a name="allow_subject_alt_names_passthrough" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough"></a>

```python
allow_subject_alt_names_passthrough: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `allow_subject_passthrough`<sup>Required</sup> <a name="allow_subject_passthrough" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.allowSubjectPassthrough"></a>

```python
allow_subject_passthrough: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraintsOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivatecaCertificateTemplateIdentityConstraints
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateIdentityConstraints">GooglePrivatecaCertificateTemplateIdentityConstraints</a>

---


### GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList <a name="GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>]]

---


### GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference <a name="GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.objectIdPathInput">object_id_path_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.objectIdPath">object_id_path</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_id_path_input`<sup>Optional</sup> <a name="object_id_path_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.objectIdPathInput"></a>

```python
object_id_path_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `object_id_path`<sup>Required</sup> <a name="object_id_path" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.objectIdPath"></a>

```python
object_id_path: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>]

---


### GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference <a name="GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.putAdditionalExtensions">put_additional_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resetAdditionalExtensions">reset_additional_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resetKnownExtensions">reset_known_extensions</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_extensions` <a name="put_additional_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.putAdditionalExtensions"></a>

```python
def put_additional_extensions(
  value: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.putAdditionalExtensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>]]

---

##### `reset_additional_extensions` <a name="reset_additional_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resetAdditionalExtensions"></a>

```python
def reset_additional_extensions() -> None
```

##### `reset_known_extensions` <a name="reset_known_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.resetKnownExtensions"></a>

```python
def reset_known_extensions() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.additionalExtensions">additional_extensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.additionalExtensionsInput">additional_extensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.knownExtensionsInput">known_extensions_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.knownExtensions">known_extensions</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_extensions`<sup>Required</sup> <a name="additional_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.additionalExtensions"></a>

```python
additional_extensions: GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensionsList</a>

---

##### `additional_extensions_input`<sup>Optional</sup> <a name="additional_extensions_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.additionalExtensionsInput"></a>

```python
additional_extensions_input: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensionsAdditionalExtensions</a>]]

---

##### `known_extensions_input`<sup>Optional</sup> <a name="known_extensions_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.knownExtensionsInput"></a>

```python
known_extensions_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `known_extensions`<sup>Required</sup> <a name="known_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.knownExtensions"></a>

```python
known_extensions: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivatecaCertificateTemplatePassthroughExtensions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePassthroughExtensions">GooglePrivatecaCertificateTemplatePassthroughExtensions</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList <a name="GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>]]

---


### GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput">object_id_path_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath">object_id_path</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_id_path_input`<sup>Optional</sup> <a name="object_id_path_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput"></a>

```python
object_id_path_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `object_id_path`<sup>Required</sup> <a name="object_id_path" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath"></a>

```python
object_id_path: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.putObjectId">put_object_id</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resetCritical">reset_critical</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_object_id` <a name="put_object_id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.putObjectId"></a>

```python
def put_object_id(
  object_id_path: typing.List[typing.Union[int, float]]
) -> None
```

###### `object_id_path`<sup>Required</sup> <a name="object_id_path" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.putObjectId.parameter.objectIdPath"></a>

- *Type:* typing.List[typing.Union[int, float]]

Required. The parts of an OID path. The most significant parts of the path come first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#object_id_path GooglePrivatecaCertificateTemplate#object_id_path}

---

##### `reset_critical` <a name="reset_critical" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.resetCritical"></a>

```python
def reset_critical() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.objectId">object_id</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.criticalInput">critical_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.objectIdInput">object_id_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.valueInput">value_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.critical">critical</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.value">value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_id`<sup>Required</sup> <a name="object_id" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.objectId"></a>

```python
object_id: GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectIdOutputReference</a>

---

##### `critical_input`<sup>Optional</sup> <a name="critical_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.criticalInput"></a>

```python
critical_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `object_id_input`<sup>Optional</sup> <a name="object_id_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.objectIdInput"></a>

```python
object_id_input: GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsObjectId</a>

---

##### `value_input`<sup>Optional</sup> <a name="value_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.valueInput"></a>

```python
value_input: str
```

- *Type:* str

---

##### `critical`<sup>Required</sup> <a name="critical" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.critical"></a>

```python
critical: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.value"></a>

```python
value: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>]

---


### GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetIsCa">reset_is_ca</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetMaxIssuerPathLength">reset_max_issuer_path_length</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_is_ca` <a name="reset_is_ca" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetIsCa"></a>

```python
def reset_is_ca() -> None
```

##### `reset_max_issuer_path_length` <a name="reset_max_issuer_path_length" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.resetMaxIssuerPathLength"></a>

```python
def reset_max_issuer_path_length() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.isCaInput">is_ca_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput">max_issuer_path_length_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.isCa">is_ca</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.maxIssuerPathLength">max_issuer_path_length</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `is_ca_input`<sup>Optional</sup> <a name="is_ca_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.isCaInput"></a>

```python
is_ca_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_issuer_path_length_input`<sup>Optional</sup> <a name="max_issuer_path_length_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput"></a>

```python
max_issuer_path_length_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_ca`<sup>Required</sup> <a name="is_ca" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.isCa"></a>

```python
is_ca: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `max_issuer_path_length`<sup>Required</sup> <a name="max_issuer_path_length" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.maxIssuerPathLength"></a>

```python
max_issuer_path_length: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign">reset_cert_sign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment">reset_content_commitment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign">reset_crl_sign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment">reset_data_encipherment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly">reset_decipher_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature">reset_digital_signature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly">reset_encipher_only</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement">reset_key_agreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment">reset_key_encipherment</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_cert_sign` <a name="reset_cert_sign" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign"></a>

```python
def reset_cert_sign() -> None
```

##### `reset_content_commitment` <a name="reset_content_commitment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment"></a>

```python
def reset_content_commitment() -> None
```

##### `reset_crl_sign` <a name="reset_crl_sign" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign"></a>

```python
def reset_crl_sign() -> None
```

##### `reset_data_encipherment` <a name="reset_data_encipherment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment"></a>

```python
def reset_data_encipherment() -> None
```

##### `reset_decipher_only` <a name="reset_decipher_only" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly"></a>

```python
def reset_decipher_only() -> None
```

##### `reset_digital_signature` <a name="reset_digital_signature" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature"></a>

```python
def reset_digital_signature() -> None
```

##### `reset_encipher_only` <a name="reset_encipher_only" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly"></a>

```python
def reset_encipher_only() -> None
```

##### `reset_key_agreement` <a name="reset_key_agreement" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement"></a>

```python
def reset_key_agreement() -> None
```

##### `reset_key_encipherment` <a name="reset_key_encipherment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment"></a>

```python
def reset_key_encipherment() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput">cert_sign_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput">content_commitment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput">crl_sign_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput">data_encipherment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput">decipher_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput">digital_signature_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput">encipher_only_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput">key_agreement_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput">key_encipherment_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.certSign">cert_sign</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment">content_commitment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign">crl_sign</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment">data_encipherment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly">decipher_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature">digital_signature</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly">encipher_only</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement">key_agreement</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment">key_encipherment</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cert_sign_input`<sup>Optional</sup> <a name="cert_sign_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput"></a>

```python
cert_sign_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `content_commitment_input`<sup>Optional</sup> <a name="content_commitment_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput"></a>

```python
content_commitment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crl_sign_input`<sup>Optional</sup> <a name="crl_sign_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput"></a>

```python
crl_sign_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_encipherment_input`<sup>Optional</sup> <a name="data_encipherment_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```python
data_encipherment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `decipher_only_input`<sup>Optional</sup> <a name="decipher_only_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput"></a>

```python
decipher_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `digital_signature_input`<sup>Optional</sup> <a name="digital_signature_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput"></a>

```python
digital_signature_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encipher_only_input`<sup>Optional</sup> <a name="encipher_only_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput"></a>

```python
encipher_only_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_agreement_input`<sup>Optional</sup> <a name="key_agreement_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput"></a>

```python
key_agreement_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_encipherment_input`<sup>Optional</sup> <a name="key_encipherment_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```python
key_encipherment_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `cert_sign`<sup>Required</sup> <a name="cert_sign" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.certSign"></a>

```python
cert_sign: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `content_commitment`<sup>Required</sup> <a name="content_commitment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment"></a>

```python
content_commitment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `crl_sign`<sup>Required</sup> <a name="crl_sign" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign"></a>

```python
crl_sign: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `data_encipherment`<sup>Required</sup> <a name="data_encipherment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment"></a>

```python
data_encipherment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `decipher_only`<sup>Required</sup> <a name="decipher_only" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly"></a>

```python
decipher_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `digital_signature`<sup>Required</sup> <a name="digital_signature" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature"></a>

```python
digital_signature: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `encipher_only`<sup>Required</sup> <a name="encipher_only" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly"></a>

```python
encipher_only: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_agreement`<sup>Required</sup> <a name="key_agreement" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement"></a>

```python
key_agreement: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `key_encipherment`<sup>Required</sup> <a name="key_encipherment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment"></a>

```python
key_encipherment: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth">reset_client_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning">reset_code_signing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection">reset_email_protection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning">reset_ocsp_signing</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth">reset_server_auth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping">reset_time_stamping</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_client_auth` <a name="reset_client_auth" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth"></a>

```python
def reset_client_auth() -> None
```

##### `reset_code_signing` <a name="reset_code_signing" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning"></a>

```python
def reset_code_signing() -> None
```

##### `reset_email_protection` <a name="reset_email_protection" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection"></a>

```python
def reset_email_protection() -> None
```

##### `reset_ocsp_signing` <a name="reset_ocsp_signing" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning"></a>

```python
def reset_ocsp_signing() -> None
```

##### `reset_server_auth` <a name="reset_server_auth" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth"></a>

```python
def reset_server_auth() -> None
```

##### `reset_time_stamping` <a name="reset_time_stamping" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping"></a>

```python
def reset_time_stamping() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput">client_auth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput">code_signing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput">email_protection_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput">ocsp_signing_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput">server_auth_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput">time_stamping_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth">client_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning">code_signing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection">email_protection</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning">ocsp_signing</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth">server_auth</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping">time_stamping</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `client_auth_input`<sup>Optional</sup> <a name="client_auth_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput"></a>

```python
client_auth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `code_signing_input`<sup>Optional</sup> <a name="code_signing_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput"></a>

```python
code_signing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_protection_input`<sup>Optional</sup> <a name="email_protection_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput"></a>

```python
email_protection_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_signing_input`<sup>Optional</sup> <a name="ocsp_signing_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput"></a>

```python
ocsp_signing_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_auth_input`<sup>Optional</sup> <a name="server_auth_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput"></a>

```python
server_auth_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_stamping_input`<sup>Optional</sup> <a name="time_stamping_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput"></a>

```python
time_stamping_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `client_auth`<sup>Required</sup> <a name="client_auth" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth"></a>

```python
client_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `code_signing`<sup>Required</sup> <a name="code_signing" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning"></a>

```python
code_signing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `email_protection`<sup>Required</sup> <a name="email_protection" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection"></a>

```python
email_protection: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `ocsp_signing`<sup>Required</sup> <a name="ocsp_signing" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning"></a>

```python
ocsp_signing: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `server_auth`<sup>Required</sup> <a name="server_auth" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth"></a>

```python
server_auth: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `time_stamping`<sup>Required</sup> <a name="time_stamping" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping"></a>

```python
time_stamping: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage">put_base_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putExtendedKeyUsage">put_extended_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages">put_unknown_extended_key_usages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetBaseKeyUsage">reset_base_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetExtendedKeyUsage">reset_extended_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages">reset_unknown_extended_key_usages</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_base_key_usage` <a name="put_base_key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage"></a>

```python
def put_base_key_usage(
  cert_sign: typing.Union[bool, IResolvable] = None,
  content_commitment: typing.Union[bool, IResolvable] = None,
  crl_sign: typing.Union[bool, IResolvable] = None,
  data_encipherment: typing.Union[bool, IResolvable] = None,
  decipher_only: typing.Union[bool, IResolvable] = None,
  digital_signature: typing.Union[bool, IResolvable] = None,
  encipher_only: typing.Union[bool, IResolvable] = None,
  key_agreement: typing.Union[bool, IResolvable] = None,
  key_encipherment: typing.Union[bool, IResolvable] = None
) -> None
```

###### `cert_sign`<sup>Optional</sup> <a name="cert_sign" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.certSign"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used to sign certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#cert_sign GooglePrivatecaCertificateTemplate#cert_sign}

---

###### `content_commitment`<sup>Optional</sup> <a name="content_commitment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.contentCommitment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#content_commitment GooglePrivatecaCertificateTemplate#content_commitment}

---

###### `crl_sign`<sup>Optional</sup> <a name="crl_sign" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.crlSign"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used sign certificate revocation lists.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#crl_sign GooglePrivatecaCertificateTemplate#crl_sign}

---

###### `data_encipherment`<sup>Optional</sup> <a name="data_encipherment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.dataEncipherment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used to encipher data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#data_encipherment GooglePrivatecaCertificateTemplate#data_encipherment}

---

###### `decipher_only`<sup>Optional</sup> <a name="decipher_only" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.decipherOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used to decipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#decipher_only GooglePrivatecaCertificateTemplate#decipher_only}

---

###### `digital_signature`<sup>Optional</sup> <a name="digital_signature" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.digitalSignature"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used for digital signatures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#digital_signature GooglePrivatecaCertificateTemplate#digital_signature}

---

###### `encipher_only`<sup>Optional</sup> <a name="encipher_only" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.encipherOnly"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used to encipher only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#encipher_only GooglePrivatecaCertificateTemplate#encipher_only}

---

###### `key_agreement`<sup>Optional</sup> <a name="key_agreement" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.keyAgreement"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used in a key agreement protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#key_agreement GooglePrivatecaCertificateTemplate#key_agreement}

---

###### `key_encipherment`<sup>Optional</sup> <a name="key_encipherment" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.keyEncipherment"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

The key may be used to encipher other keys.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#key_encipherment GooglePrivatecaCertificateTemplate#key_encipherment}

---

##### `put_extended_key_usage` <a name="put_extended_key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putExtendedKeyUsage"></a>

```python
def put_extended_key_usage(
  client_auth: typing.Union[bool, IResolvable] = None,
  code_signing: typing.Union[bool, IResolvable] = None,
  email_protection: typing.Union[bool, IResolvable] = None,
  ocsp_signing: typing.Union[bool, IResolvable] = None,
  server_auth: typing.Union[bool, IResolvable] = None,
  time_stamping: typing.Union[bool, IResolvable] = None
) -> None
```

###### `client_auth`<sup>Optional</sup> <a name="client_auth" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putExtendedKeyUsage.parameter.clientAuth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#client_auth GooglePrivatecaCertificateTemplate#client_auth}

---

###### `code_signing`<sup>Optional</sup> <a name="code_signing" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putExtendedKeyUsage.parameter.codeSigning"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#code_signing GooglePrivatecaCertificateTemplate#code_signing}

---

###### `email_protection`<sup>Optional</sup> <a name="email_protection" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putExtendedKeyUsage.parameter.emailProtection"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#email_protection GooglePrivatecaCertificateTemplate#email_protection}

---

###### `ocsp_signing`<sup>Optional</sup> <a name="ocsp_signing" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putExtendedKeyUsage.parameter.ocspSigning"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#ocsp_signing GooglePrivatecaCertificateTemplate#ocsp_signing}

---

###### `server_auth`<sup>Optional</sup> <a name="server_auth" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putExtendedKeyUsage.parameter.serverAuth"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#server_auth GooglePrivatecaCertificateTemplate#server_auth}

---

###### `time_stamping`<sup>Optional</sup> <a name="time_stamping" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putExtendedKeyUsage.parameter.timeStamping"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#time_stamping GooglePrivatecaCertificateTemplate#time_stamping}

---

##### `put_unknown_extended_key_usages` <a name="put_unknown_extended_key_usages" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages"></a>

```python
def put_unknown_extended_key_usages(
  value: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>]]

---

##### `reset_base_key_usage` <a name="reset_base_key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetBaseKeyUsage"></a>

```python
def reset_base_key_usage() -> None
```

##### `reset_extended_key_usage` <a name="reset_extended_key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetExtendedKeyUsage"></a>

```python
def reset_extended_key_usage() -> None
```

##### `reset_unknown_extended_key_usages` <a name="reset_unknown_extended_key_usages" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages"></a>

```python
def reset_unknown_extended_key_usages() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.baseKeyUsage">base_key_usage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.extendedKeyUsage">extended_key_usage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages">unknown_extended_key_usages</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.baseKeyUsageInput">base_key_usage_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.extendedKeyUsageInput">extended_key_usage_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput">unknown_extended_key_usages_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_key_usage`<sup>Required</sup> <a name="base_key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.baseKeyUsage"></a>

```python
base_key_usage: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsageOutputReference</a>

---

##### `extended_key_usage`<sup>Required</sup> <a name="extended_key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.extendedKeyUsage"></a>

```python
extended_key_usage: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsageOutputReference</a>

---

##### `unknown_extended_key_usages`<sup>Required</sup> <a name="unknown_extended_key_usages" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages"></a>

```python
unknown_extended_key_usages: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList</a>

---

##### `base_key_usage_input`<sup>Optional</sup> <a name="base_key_usage_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.baseKeyUsageInput"></a>

```python
base_key_usage_input: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a>

---

##### `extended_key_usage_input`<sup>Optional</sup> <a name="extended_key_usage_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.extendedKeyUsageInput"></a>

```python
extended_key_usage_input: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a>

---

##### `unknown_extended_key_usages_input`<sup>Optional</sup> <a name="unknown_extended_key_usages_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput"></a>

```python
unknown_extended_key_usages_input: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>]]

---


### GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput">object_id_path_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath">object_id_path</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_id_path_input`<sup>Optional</sup> <a name="object_id_path_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput"></a>

```python
object_id_path_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `object_id_path`<sup>Required</sup> <a name="object_id_path" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath"></a>

```python
object_id_path: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>]

---


### GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putAdditionalExtensions">put_additional_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putCaOptions">put_ca_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putKeyUsage">put_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putPolicyIds">put_policy_ids</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetAdditionalExtensions">reset_additional_extensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetAiaOcspServers">reset_aia_ocsp_servers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetCaOptions">reset_ca_options</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetKeyUsage">reset_key_usage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetPolicyIds">reset_policy_ids</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_additional_extensions` <a name="put_additional_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putAdditionalExtensions"></a>

```python
def put_additional_extensions(
  value: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putAdditionalExtensions.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>]]

---

##### `put_ca_options` <a name="put_ca_options" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putCaOptions"></a>

```python
def put_ca_options(
  is_ca: typing.Union[bool, IResolvable] = None,
  max_issuer_path_length: typing.Union[int, float] = None
) -> None
```

###### `is_ca`<sup>Optional</sup> <a name="is_ca" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putCaOptions.parameter.isCa"></a>

- *Type:* typing.Union[bool, cdktf.IResolvable]

Optional.

Refers to the "CA" X.509 extension, which is a boolean value. When this value is missing, the extension will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#is_ca GooglePrivatecaCertificateTemplate#is_ca}

---

###### `max_issuer_path_length`<sup>Optional</sup> <a name="max_issuer_path_length" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putCaOptions.parameter.maxIssuerPathLength"></a>

- *Type:* typing.Union[int, float]

Optional.

Refers to the path length restriction X.509 extension. For a CA certificate, this value describes the depth of subordinate CA certificates that are allowed. If this value is less than 0, the request will fail. If this value is missing, the max path length will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#max_issuer_path_length GooglePrivatecaCertificateTemplate#max_issuer_path_length}

---

##### `put_key_usage` <a name="put_key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putKeyUsage"></a>

```python
def put_key_usage(
  base_key_usage: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage = None,
  extended_key_usage: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage = None,
  unknown_extended_key_usages: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages]] = None
) -> None
```

###### `base_key_usage`<sup>Optional</sup> <a name="base_key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putKeyUsage.parameter.baseKeyUsage"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageBaseKeyUsage</a>

base_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#base_key_usage GooglePrivatecaCertificateTemplate#base_key_usage}

---

###### `extended_key_usage`<sup>Optional</sup> <a name="extended_key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putKeyUsage.parameter.extendedKeyUsage"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageExtendedKeyUsage</a>

extended_key_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#extended_key_usage GooglePrivatecaCertificateTemplate#extended_key_usage}

---

###### `unknown_extended_key_usages`<sup>Optional</sup> <a name="unknown_extended_key_usages" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putKeyUsage.parameter.unknownExtendedKeyUsages"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageUnknownExtendedKeyUsages</a>]]

unknown_extended_key_usages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_privateca_certificate_template#unknown_extended_key_usages GooglePrivatecaCertificateTemplate#unknown_extended_key_usages}

---

##### `put_policy_ids` <a name="put_policy_ids" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putPolicyIds"></a>

```python
def put_policy_ids(
  value: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.putPolicyIds.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>]]

---

##### `reset_additional_extensions` <a name="reset_additional_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetAdditionalExtensions"></a>

```python
def reset_additional_extensions() -> None
```

##### `reset_aia_ocsp_servers` <a name="reset_aia_ocsp_servers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetAiaOcspServers"></a>

```python
def reset_aia_ocsp_servers() -> None
```

##### `reset_ca_options` <a name="reset_ca_options" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetCaOptions"></a>

```python
def reset_ca_options() -> None
```

##### `reset_key_usage` <a name="reset_key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetKeyUsage"></a>

```python
def reset_key_usage() -> None
```

##### `reset_policy_ids` <a name="reset_policy_ids" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.resetPolicyIds"></a>

```python
def reset_policy_ids() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.additionalExtensions">additional_extensions</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.caOptions">ca_options</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.keyUsage">key_usage</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.policyIds">policy_ids</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.additionalExtensionsInput">additional_extensions_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.aiaOcspServersInput">aia_ocsp_servers_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.caOptionsInput">ca_options_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.keyUsageInput">key_usage_input</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.policyIdsInput">policy_ids_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.aiaOcspServers">aia_ocsp_servers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `additional_extensions`<sup>Required</sup> <a name="additional_extensions" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.additionalExtensions"></a>

```python
additional_extensions: GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensionsList</a>

---

##### `ca_options`<sup>Required</sup> <a name="ca_options" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.caOptions"></a>

```python
ca_options: GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptionsOutputReference</a>

---

##### `key_usage`<sup>Required</sup> <a name="key_usage" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.keyUsage"></a>

```python
key_usage: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsageOutputReference</a>

---

##### `policy_ids`<sup>Required</sup> <a name="policy_ids" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.policyIds"></a>

```python
policy_ids: GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList</a>

---

##### `additional_extensions_input`<sup>Optional</sup> <a name="additional_extensions_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.additionalExtensionsInput"></a>

```python
additional_extensions_input: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions">GooglePrivatecaCertificateTemplatePredefinedValuesAdditionalExtensions</a>]]

---

##### `aia_ocsp_servers_input`<sup>Optional</sup> <a name="aia_ocsp_servers_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.aiaOcspServersInput"></a>

```python
aia_ocsp_servers_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `ca_options_input`<sup>Optional</sup> <a name="ca_options_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.caOptionsInput"></a>

```python
ca_options_input: GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions">GooglePrivatecaCertificateTemplatePredefinedValuesCaOptions</a>

---

##### `key_usage_input`<sup>Optional</sup> <a name="key_usage_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.keyUsageInput"></a>

```python
key_usage_input: GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage">GooglePrivatecaCertificateTemplatePredefinedValuesKeyUsage</a>

---

##### `policy_ids_input`<sup>Optional</sup> <a name="policy_ids_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.policyIdsInput"></a>

```python
policy_ids_input: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>]]

---

##### `aia_ocsp_servers`<sup>Required</sup> <a name="aia_ocsp_servers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.aiaOcspServers"></a>

```python
aia_ocsp_servers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesOutputReference.property.internalValue"></a>

```python
internal_value: GooglePrivatecaCertificateTemplatePredefinedValues
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValues">GooglePrivatecaCertificateTemplatePredefinedValues</a>

---


### GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList <a name="GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>]]

---


### GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference <a name="GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.objectIdPathInput">object_id_path_input</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.objectIdPath">object_id_path</a></code> | <code>typing.List[typing.Union[int, float]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `object_id_path_input`<sup>Optional</sup> <a name="object_id_path_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.objectIdPathInput"></a>

```python
object_id_path_input: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `object_id_path`<sup>Required</sup> <a name="object_id_path" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.objectIdPath"></a>

```python
object_id_path: typing.List[typing.Union[int, float]]
```

- *Type:* typing.List[typing.Union[int, float]]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIdsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds">GooglePrivatecaCertificateTemplatePredefinedValuesPolicyIds</a>]

---


### GooglePrivatecaCertificateTemplateTimeoutsOutputReference <a name="GooglePrivatecaCertificateTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_privateca_certificate_template

googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, GooglePrivatecaCertificateTemplateTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#@cdktf/provider-google-beta.googlePrivatecaCertificateTemplate.GooglePrivatecaCertificateTemplateTimeouts">GooglePrivatecaCertificateTemplateTimeouts</a>]

---




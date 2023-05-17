# `google_organization_iam_audit_config`

Refer to the Terraform Registory for docs: [`google_organization_iam_audit_config`](https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_organization_iam_audit_config).

# `googleOrganizationIamAuditConfig` Submodule <a name="`googleOrganizationIamAuditConfig` Submodule" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleOrganizationIamAuditConfig <a name="GoogleOrganizationIamAuditConfig" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_organization_iam_audit_config google_organization_iam_audit_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_iam_audit_config

googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audit_log_config: typing.Union[IResolvable, typing.List[GoogleOrganizationIamAuditConfigAuditLogConfig]],
  org_id: str,
  service: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.auditLogConfig">audit_log_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig">GoogleOrganizationIamAuditConfigAuditLogConfig</a>]]</code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.orgId">org_id</a></code> | <code>str</code> | The numeric ID of the organization in which you want to manage the audit logging config. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.service">service</a></code> | <code>str</code> | Service which will be enabled for audit logging. The special value allServices covers all services. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_organization_iam_audit_config#id GoogleOrganizationIamAuditConfig#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_log_config`<sup>Required</sup> <a name="audit_log_config" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.auditLogConfig"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig">GoogleOrganizationIamAuditConfigAuditLogConfig</a>]]

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_organization_iam_audit_config#audit_log_config GoogleOrganizationIamAuditConfig#audit_log_config}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.orgId"></a>

- *Type:* str

The numeric ID of the organization in which you want to manage the audit logging config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_organization_iam_audit_config#org_id GoogleOrganizationIamAuditConfig#org_id}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.service"></a>

- *Type:* str

Service which will be enabled for audit logging. The special value allServices covers all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_organization_iam_audit_config#service GoogleOrganizationIamAuditConfig#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_organization_iam_audit_config#id GoogleOrganizationIamAuditConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.putAuditLogConfig">put_audit_log_config</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_metadata` <a name="to_metadata" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_audit_log_config` <a name="put_audit_log_config" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.putAuditLogConfig"></a>

```python
def put_audit_log_config(
  value: typing.Union[IResolvable, typing.List[GoogleOrganizationIamAuditConfigAuditLogConfig]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.putAuditLogConfig.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig">GoogleOrganizationIamAuditConfigAuditLogConfig</a>]]

---

##### `reset_id` <a name="reset_id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isTerraformResource">is_terraform_resource</a></code> | *No description.* |

---

##### `is_construct` <a name="is_construct" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isConstruct"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_iam_audit_config

googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isTerraformElement"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_iam_audit_config

googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isTerraformResource"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_iam_audit_config

googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.auditLogConfig">audit_log_config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList">GoogleOrganizationIamAuditConfigAuditLogConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.auditLogConfigInput">audit_log_config_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig">GoogleOrganizationIamAuditConfigAuditLogConfig</a>]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.orgIdInput">org_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.serviceInput">service_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.orgId">org_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.service">service</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_log_config`<sup>Required</sup> <a name="audit_log_config" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.auditLogConfig"></a>

```python
audit_log_config: GoogleOrganizationIamAuditConfigAuditLogConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList">GoogleOrganizationIamAuditConfigAuditLogConfigList</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `audit_log_config_input`<sup>Optional</sup> <a name="audit_log_config_input" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.auditLogConfigInput"></a>

```python
audit_log_config_input: typing.Union[IResolvable, typing.List[GoogleOrganizationIamAuditConfigAuditLogConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig">GoogleOrganizationIamAuditConfigAuditLogConfig</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `org_id_input`<sup>Optional</sup> <a name="org_id_input" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.orgIdInput"></a>

```python
org_id_input: str
```

- *Type:* str

---

##### `service_input`<sup>Optional</sup> <a name="service_input" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.serviceInput"></a>

```python
service_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.service"></a>

```python
service: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfig.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleOrganizationIamAuditConfigAuditLogConfig <a name="GoogleOrganizationIamAuditConfigAuditLogConfig" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_iam_audit_config

googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig(
  log_type: str,
  exempted_members: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig.property.logType">log_type</a></code> | <code>str</code> | Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig.property.exemptedMembers">exempted_members</a></code> | <code>typing.List[str]</code> | Identities that do not cause logging for this type of permission. |

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig.property.logType"></a>

```python
log_type: str
```

- *Type:* str

Permission type for which logging is to be configured. Must be one of DATA_READ, DATA_WRITE, or ADMIN_READ.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_organization_iam_audit_config#log_type GoogleOrganizationIamAuditConfig#log_type}

---

##### `exempted_members`<sup>Optional</sup> <a name="exempted_members" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig.property.exemptedMembers"></a>

```python
exempted_members: typing.List[str]
```

- *Type:* typing.List[str]

Identities that do not cause logging for this type of permission.

Each entry can have one of the following values:user:{emailid}: An email address that represents a specific Google account. For example, alice@gmail.com or joe@example.com. serviceAccount:{emailid}: An email address that represents a service account. For example, my-other-app@appspot.gserviceaccount.com. group:{emailid}: An email address that represents a Google group. For example, admins@example.com. domain:{domain}: A G Suite domain (primary, instead of alias) name that represents all the users of that domain. For example, google.com or example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_organization_iam_audit_config#exempted_members GoogleOrganizationIamAuditConfig#exempted_members}

---

### GoogleOrganizationIamAuditConfigConfig <a name="GoogleOrganizationIamAuditConfigConfig" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_iam_audit_config

googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  audit_log_config: typing.Union[IResolvable, typing.List[GoogleOrganizationIamAuditConfigAuditLogConfig]],
  org_id: str,
  service: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.auditLogConfig">audit_log_config</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig">GoogleOrganizationIamAuditConfigAuditLogConfig</a>]]</code> | audit_log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.orgId">org_id</a></code> | <code>str</code> | The numeric ID of the organization in which you want to manage the audit logging config. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.service">service</a></code> | <code>str</code> | Service which will be enabled for audit logging. The special value allServices covers all services. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_organization_iam_audit_config#id GoogleOrganizationIamAuditConfig#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `audit_log_config`<sup>Required</sup> <a name="audit_log_config" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.auditLogConfig"></a>

```python
audit_log_config: typing.Union[IResolvable, typing.List[GoogleOrganizationIamAuditConfigAuditLogConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig">GoogleOrganizationIamAuditConfigAuditLogConfig</a>]]

audit_log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_organization_iam_audit_config#audit_log_config GoogleOrganizationIamAuditConfig#audit_log_config}

---

##### `org_id`<sup>Required</sup> <a name="org_id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.orgId"></a>

```python
org_id: str
```

- *Type:* str

The numeric ID of the organization in which you want to manage the audit logging config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_organization_iam_audit_config#org_id GoogleOrganizationIamAuditConfig#org_id}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.service"></a>

```python
service: str
```

- *Type:* str

Service which will be enabled for audit logging. The special value allServices covers all services.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_organization_iam_audit_config#service GoogleOrganizationIamAuditConfig#service}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.65.2/docs/resources/google_organization_iam_audit_config#id GoogleOrganizationIamAuditConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleOrganizationIamAuditConfigAuditLogConfigList <a name="GoogleOrganizationIamAuditConfigAuditLogConfigList" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_iam_audit_config

googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig">GoogleOrganizationIamAuditConfigAuditLogConfig</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[GoogleOrganizationIamAuditConfigAuditLogConfig]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig">GoogleOrganizationIamAuditConfigAuditLogConfig</a>]]

---


### GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference <a name="GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer"></a>

```python
from cdktf_cdktf_provider_google_beta import google_organization_iam_audit_config

googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers">reset_exempted_members</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_exempted_members` <a name="reset_exempted_members" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.resetExemptedMembers"></a>

```python
def reset_exempted_members() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput">exempted_members_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput">log_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers">exempted_members</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.logType">log_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[<a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig">GoogleOrganizationIamAuditConfigAuditLogConfig</a>, cdktf.IResolvable]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `exempted_members_input`<sup>Optional</sup> <a name="exempted_members_input" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembersInput"></a>

```python
exempted_members_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_type_input`<sup>Optional</sup> <a name="log_type_input" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.logTypeInput"></a>

```python
log_type_input: str
```

- *Type:* str

---

##### `exempted_members`<sup>Required</sup> <a name="exempted_members" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.exemptedMembers"></a>

```python
exempted_members: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `log_type`<sup>Required</sup> <a name="log_type" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.logType"></a>

```python
log_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfigOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[GoogleOrganizationIamAuditConfigAuditLogConfig, IResolvable]
```

- *Type:* typing.Union[<a href="#@cdktf/provider-google-beta.googleOrganizationIamAuditConfig.GoogleOrganizationIamAuditConfigAuditLogConfig">GoogleOrganizationIamAuditConfigAuditLogConfig</a>, cdktf.IResolvable]

---




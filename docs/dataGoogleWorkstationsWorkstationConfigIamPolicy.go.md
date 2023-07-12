# `data_google_workstations_workstation_config_iam_policy`

Refer to the Terraform Registory for docs: [`data_google_workstations_workstation_config_iam_policy`](https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/data-sources/google_workstations_workstation_config_iam_policy).

# `dataGoogleWorkstationsWorkstationConfigIamPolicy` Submodule <a name="`dataGoogleWorkstationsWorkstationConfigIamPolicy` Submodule" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleWorkstationsWorkstationConfigIamPolicy <a name="DataGoogleWorkstationsWorkstationConfigIamPolicy" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/data-sources/google_workstations_workstation_config_iam_policy google_workstations_workstation_config_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogleworkstationsworkstationconfigiampolicy"

datagoogleworkstationsworkstationconfigiampolicy.NewDataGoogleWorkstationsWorkstationConfigIamPolicy(scope Construct, id *string, config DataGoogleWorkstationsWorkstationConfigIamPolicyConfig) DataGoogleWorkstationsWorkstationConfigIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig">DataGoogleWorkstationsWorkstationConfigIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig">DataGoogleWorkstationsWorkstationConfigIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogleworkstationsworkstationconfigiampolicy"

datagoogleworkstationsworkstationconfigiampolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogleworkstationsworkstationconfigiampolicy"

datagoogleworkstationsworkstationconfigiampolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogleworkstationsworkstationconfigiampolicy"

datagoogleworkstationsworkstationconfigiampolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationClusterIdInput">WorkstationClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationConfigIdInput">WorkstationConfigIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationClusterId">WorkstationClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationConfigId">WorkstationConfigId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `WorkstationClusterIdInput`<sup>Optional</sup> <a name="WorkstationClusterIdInput" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationClusterIdInput"></a>

```go
func WorkstationClusterIdInput() *string
```

- *Type:* *string

---

##### `WorkstationConfigIdInput`<sup>Optional</sup> <a name="WorkstationConfigIdInput" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationConfigIdInput"></a>

```go
func WorkstationConfigIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationClusterId"></a>

```go
func WorkstationClusterId() *string
```

- *Type:* *string

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.workstationConfigId"></a>

```go
func WorkstationConfigId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleWorkstationsWorkstationConfigIamPolicyConfig <a name="DataGoogleWorkstationsWorkstationConfigIamPolicyConfig" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/datagoogleworkstationsworkstationconfigiampolicy"

&datagoogleworkstationsworkstationconfigiampolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	WorkstationClusterId: *string,
	WorkstationConfigId: *string,
	Id: *string,
	Location: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.workstationClusterId">WorkstationClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/data-sources/google_workstations_workstation_config_iam_policy#workstation_cluster_id DataGoogleWorkstationsWorkstationConfigIamPolicy#workstation_cluster_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.workstationConfigId">WorkstationConfigId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/data-sources/google_workstations_workstation_config_iam_policy#workstation_config_id DataGoogleWorkstationsWorkstationConfigIamPolicy#workstation_config_id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/data-sources/google_workstations_workstation_config_iam_policy#id DataGoogleWorkstationsWorkstationConfigIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.location">Location</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/data-sources/google_workstations_workstation_config_iam_policy#location DataGoogleWorkstationsWorkstationConfigIamPolicy#location}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/data-sources/google_workstations_workstation_config_iam_policy#project DataGoogleWorkstationsWorkstationConfigIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `WorkstationClusterId`<sup>Required</sup> <a name="WorkstationClusterId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.workstationClusterId"></a>

```go
WorkstationClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/data-sources/google_workstations_workstation_config_iam_policy#workstation_cluster_id DataGoogleWorkstationsWorkstationConfigIamPolicy#workstation_cluster_id}.

---

##### `WorkstationConfigId`<sup>Required</sup> <a name="WorkstationConfigId" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.workstationConfigId"></a>

```go
WorkstationConfigId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/data-sources/google_workstations_workstation_config_iam_policy#workstation_config_id DataGoogleWorkstationsWorkstationConfigIamPolicy#workstation_config_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/data-sources/google_workstations_workstation_config_iam_policy#id DataGoogleWorkstationsWorkstationConfigIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/data-sources/google_workstations_workstation_config_iam_policy#location DataGoogleWorkstationsWorkstationConfigIamPolicy#location}.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleWorkstationsWorkstationConfigIamPolicy.DataGoogleWorkstationsWorkstationConfigIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.73.0/docs/data-sources/google_workstations_workstation_config_iam_policy#project DataGoogleWorkstationsWorkstationConfigIamPolicy#project}.

---




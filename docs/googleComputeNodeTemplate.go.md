# `google_compute_node_template`

Refer to the Terraform Registory for docs: [`google_compute_node_template`](https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template).

# `googleComputeNodeTemplate` Submodule <a name="`googleComputeNodeTemplate` Submodule" id="@cdktf/provider-google-beta.googleComputeNodeTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeNodeTemplate <a name="GoogleComputeNodeTemplate" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template google_compute_node_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenodetemplate"

googlecomputenodetemplate.NewGoogleComputeNodeTemplate(scope Construct, id *string, config GoogleComputeNodeTemplateConfig) GoogleComputeNodeTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig">GoogleComputeNodeTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig">GoogleComputeNodeTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putNodeTypeFlexibility">PutNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putServerBinding">PutServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetCpuOvercommitType">ResetCpuOvercommitType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeAffinityLabels">ResetNodeAffinityLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeType">ResetNodeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeTypeFlexibility">ResetNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetServerBinding">ResetServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutNodeTypeFlexibility` <a name="PutNodeTypeFlexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putNodeTypeFlexibility"></a>

```go
func PutNodeTypeFlexibility(value GoogleComputeNodeTemplateNodeTypeFlexibility)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putNodeTypeFlexibility.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a>

---

##### `PutServerBinding` <a name="PutServerBinding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putServerBinding"></a>

```go
func PutServerBinding(value GoogleComputeNodeTemplateServerBinding)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putServerBinding.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putTimeouts"></a>

```go
func PutTimeouts(value GoogleComputeNodeTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a>

---

##### `ResetCpuOvercommitType` <a name="ResetCpuOvercommitType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetCpuOvercommitType"></a>

```go
func ResetCpuOvercommitType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetName"></a>

```go
func ResetName()
```

##### `ResetNodeAffinityLabels` <a name="ResetNodeAffinityLabels" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeAffinityLabels"></a>

```go
func ResetNodeAffinityLabels()
```

##### `ResetNodeType` <a name="ResetNodeType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeType"></a>

```go
func ResetNodeType()
```

##### `ResetNodeTypeFlexibility` <a name="ResetNodeTypeFlexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetNodeTypeFlexibility"></a>

```go
func ResetNodeTypeFlexibility()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetServerBinding` <a name="ResetServerBinding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetServerBinding"></a>

```go
func ResetServerBinding()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenodetemplate"

googlecomputenodetemplate.GoogleComputeNodeTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenodetemplate"

googlecomputenodetemplate.GoogleComputeNodeTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenodetemplate"

googlecomputenodetemplate.GoogleComputeNodeTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeFlexibility">NodeTypeFlexibility</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference">GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.serverBinding">ServerBinding</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference">GoogleComputeNodeTemplateServerBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference">GoogleComputeNodeTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cpuOvercommitTypeInput">CpuOvercommitTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeAffinityLabelsInput">NodeAffinityLabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeFlexibilityInput">NodeTypeFlexibilityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.serverBindingInput">ServerBindingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cpuOvercommitType">CpuOvercommitType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeAffinityLabels">NodeAffinityLabels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `NodeTypeFlexibility`<sup>Required</sup> <a name="NodeTypeFlexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeFlexibility"></a>

```go
func NodeTypeFlexibility() GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference">GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ServerBinding`<sup>Required</sup> <a name="ServerBinding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.serverBinding"></a>

```go
func ServerBinding() GoogleComputeNodeTemplateServerBindingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference">GoogleComputeNodeTemplateServerBindingOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.timeouts"></a>

```go
func Timeouts() GoogleComputeNodeTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference">GoogleComputeNodeTemplateTimeoutsOutputReference</a>

---

##### `CpuOvercommitTypeInput`<sup>Optional</sup> <a name="CpuOvercommitTypeInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cpuOvercommitTypeInput"></a>

```go
func CpuOvercommitTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeAffinityLabelsInput`<sup>Optional</sup> <a name="NodeAffinityLabelsInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeAffinityLabelsInput"></a>

```go
func NodeAffinityLabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NodeTypeFlexibilityInput`<sup>Optional</sup> <a name="NodeTypeFlexibilityInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeFlexibilityInput"></a>

```go
func NodeTypeFlexibilityInput() GoogleComputeNodeTemplateNodeTypeFlexibility
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a>

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `ServerBindingInput`<sup>Optional</sup> <a name="ServerBindingInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.serverBindingInput"></a>

```go
func ServerBindingInput() GoogleComputeNodeTemplateServerBinding
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CpuOvercommitType`<sup>Required</sup> <a name="CpuOvercommitType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.cpuOvercommitType"></a>

```go
func CpuOvercommitType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeAffinityLabels`<sup>Required</sup> <a name="NodeAffinityLabels" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeAffinityLabels"></a>

```go
func NodeAffinityLabels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeNodeTemplateConfig <a name="GoogleComputeNodeTemplateConfig" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenodetemplate"

&googlecomputenodetemplate.GoogleComputeNodeTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CpuOvercommitType: *string,
	Description: *string,
	Id: *string,
	Name: *string,
	NodeAffinityLabels: *map[string]*string,
	NodeType: *string,
	NodeTypeFlexibility: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility,
	Project: *string,
	Region: *string,
	ServerBinding: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.cpuOvercommitType">CpuOvercommitType</a></code> | <code>*string</code> | CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.description">Description</a></code> | <code>*string</code> | An optional textual description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#id GoogleComputeNodeTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeAffinityLabels">NodeAffinityLabels</a></code> | <code>*map[string]*string</code> | Labels to use for node affinity, which will be used in instance scheduling. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeType">NodeType</a></code> | <code>*string</code> | Node type to use for nodes group that are created from this template. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeTypeFlexibility">NodeTypeFlexibility</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a></code> | node_type_flexibility block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#project GoogleComputeNodeTemplate#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.region">Region</a></code> | <code>*string</code> | Region where nodes using the node template will be created. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.serverBinding">ServerBinding</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a></code> | server_binding block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CpuOvercommitType`<sup>Optional</sup> <a name="CpuOvercommitType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.cpuOvercommitType"></a>

```go
CpuOvercommitType *string
```

- *Type:* *string

CPU overcommit. Default value: "NONE" Possible values: ["ENABLED", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#cpu_overcommit_type GoogleComputeNodeTemplate#cpu_overcommit_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

An optional textual description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#description GoogleComputeNodeTemplate#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#id GoogleComputeNodeTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#name GoogleComputeNodeTemplate#name}

---

##### `NodeAffinityLabels`<sup>Optional</sup> <a name="NodeAffinityLabels" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeAffinityLabels"></a>

```go
NodeAffinityLabels *map[string]*string
```

- *Type:* *map[string]*string

Labels to use for node affinity, which will be used in instance scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#node_affinity_labels GoogleComputeNodeTemplate#node_affinity_labels}

---

##### `NodeType`<sup>Optional</sup> <a name="NodeType" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

Node type to use for nodes group that are created from this template.

Only one of nodeTypeFlexibility and nodeType can be specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#node_type GoogleComputeNodeTemplate#node_type}

---

##### `NodeTypeFlexibility`<sup>Optional</sup> <a name="NodeTypeFlexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.nodeTypeFlexibility"></a>

```go
NodeTypeFlexibility GoogleComputeNodeTemplateNodeTypeFlexibility
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a>

node_type_flexibility block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#node_type_flexibility GoogleComputeNodeTemplate#node_type_flexibility}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#project GoogleComputeNodeTemplate#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Region where nodes using the node template will be created. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#region GoogleComputeNodeTemplate#region}

---

##### `ServerBinding`<sup>Optional</sup> <a name="ServerBinding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.serverBinding"></a>

```go
ServerBinding GoogleComputeNodeTemplateServerBinding
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a>

server_binding block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#server_binding GoogleComputeNodeTemplate#server_binding}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateConfig.property.timeouts"></a>

```go
Timeouts GoogleComputeNodeTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts">GoogleComputeNodeTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#timeouts GoogleComputeNodeTemplate#timeouts}

---

### GoogleComputeNodeTemplateNodeTypeFlexibility <a name="GoogleComputeNodeTemplateNodeTypeFlexibility" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenodetemplate"

&googlecomputenodetemplate.GoogleComputeNodeTemplateNodeTypeFlexibility {
	Cpus: *string,
	Memory: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.property.cpus">Cpus</a></code> | <code>*string</code> | Number of virtual CPUs to use. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.property.memory">Memory</a></code> | <code>*string</code> | Physical memory available to the node, defined in MB. |

---

##### `Cpus`<sup>Optional</sup> <a name="Cpus" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.property.cpus"></a>

```go
Cpus *string
```

- *Type:* *string

Number of virtual CPUs to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#cpus GoogleComputeNodeTemplate#cpus}

---

##### `Memory`<sup>Optional</sup> <a name="Memory" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility.property.memory"></a>

```go
Memory *string
```

- *Type:* *string

Physical memory available to the node, defined in MB.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#memory GoogleComputeNodeTemplate#memory}

---

### GoogleComputeNodeTemplateServerBinding <a name="GoogleComputeNodeTemplateServerBinding" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenodetemplate"

&googlecomputenodetemplate.GoogleComputeNodeTemplateServerBinding {
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding.property.type">Type</a></code> | <code>*string</code> | Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding.property.type"></a>

```go
Type *string
```

- *Type:* *string

Type of server binding policy. If 'RESTART_NODE_ON_ANY_SERVER', nodes using this template will restart on any physical server following a maintenance event.

If 'RESTART_NODE_ON_MINIMAL_SERVER', nodes using this template
will restart on the same physical server following a maintenance
event, instead of being live migrated to or restarted on a new
physical server. This option may be useful if you are using
software licenses tied to the underlying server characteristics
such as physical sockets or cores, to avoid the need for
additional licenses when maintenance occurs. However, VMs on such
nodes will experience outages while maintenance is applied. Possible values: ["RESTART_NODE_ON_ANY_SERVER", "RESTART_NODE_ON_MINIMAL_SERVERS"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#type GoogleComputeNodeTemplate#type}

---

### GoogleComputeNodeTemplateTimeouts <a name="GoogleComputeNodeTemplateTimeouts" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenodetemplate"

&googlecomputenodetemplate.GoogleComputeNodeTemplateTimeouts {
	Create: *string,
	Delete: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#create GoogleComputeNodeTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#delete GoogleComputeNodeTemplate#delete}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#create GoogleComputeNodeTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.75.1/docs/resources/google_compute_node_template#delete GoogleComputeNodeTemplate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference <a name="GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenodetemplate"

googlecomputenodetemplate.NewGoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetCpus">ResetCpus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetMemory">ResetMemory</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpus` <a name="ResetCpus" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetCpus"></a>

```go
func ResetCpus()
```

##### `ResetMemory` <a name="ResetMemory" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.resetMemory"></a>

```go
func ResetMemory()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.localSsd">LocalSsd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpusInput">CpusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memoryInput">MemoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpus">Cpus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memory">Memory</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalSsd`<sup>Required</sup> <a name="LocalSsd" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.localSsd"></a>

```go
func LocalSsd() *string
```

- *Type:* *string

---

##### `CpusInput`<sup>Optional</sup> <a name="CpusInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpusInput"></a>

```go
func CpusInput() *string
```

- *Type:* *string

---

##### `MemoryInput`<sup>Optional</sup> <a name="MemoryInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memoryInput"></a>

```go
func MemoryInput() *string
```

- *Type:* *string

---

##### `Cpus`<sup>Required</sup> <a name="Cpus" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.cpus"></a>

```go
func Cpus() *string
```

- *Type:* *string

---

##### `Memory`<sup>Required</sup> <a name="Memory" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.memory"></a>

```go
func Memory() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibilityOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeNodeTemplateNodeTypeFlexibility
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateNodeTypeFlexibility">GoogleComputeNodeTemplateNodeTypeFlexibility</a>

---


### GoogleComputeNodeTemplateServerBindingOutputReference <a name="GoogleComputeNodeTemplateServerBindingOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenodetemplate"

googlecomputenodetemplate.NewGoogleComputeNodeTemplateServerBindingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeNodeTemplateServerBindingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBindingOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleComputeNodeTemplateServerBinding
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateServerBinding">GoogleComputeNodeTemplateServerBinding</a>

---


### GoogleComputeNodeTemplateTimeoutsOutputReference <a name="GoogleComputeNodeTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v8/googlecomputenodetemplate"

googlecomputenodetemplate.NewGoogleComputeNodeTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleComputeNodeTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleComputeNodeTemplate.GoogleComputeNodeTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




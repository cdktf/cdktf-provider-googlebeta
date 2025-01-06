# `dataGoogleComputeInstanceTemplate` Submodule <a name="`dataGoogleComputeInstanceTemplate` Submodule" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeInstanceTemplate <a name="DataGoogleComputeInstanceTemplate" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_compute_instance_template google_compute_instance_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplate(scope Construct, id *string, config DataGoogleComputeInstanceTemplateConfig) DataGoogleComputeInstanceTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig">DataGoogleComputeInstanceTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig">DataGoogleComputeInstanceTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetMostRecent">ResetMostRecent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetSelfLinkUnique">ResetSelfLinkUnique</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetMostRecent` <a name="ResetMostRecent" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetMostRecent"></a>

```go
func ResetMostRecent()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetName"></a>

```go
func ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetProject"></a>

```go
func ResetProject()
```

##### `ResetSelfLinkUnique` <a name="ResetSelfLinkUnique" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.resetSelfLinkUnique"></a>

```go
func ResetSelfLinkUnique()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleComputeInstanceTemplate resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplate_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleComputeInstanceTemplate resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleComputeInstanceTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleComputeInstanceTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_compute_instance_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeInstanceTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.advancedMachineFeatures">AdvancedMachineFeatures</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList">DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.canIpForward">CanIpForward</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.confidentialInstanceConfig">ConfidentialInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList">DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.creationTimestamp">CreationTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.disk">Disk</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList">DataGoogleComputeInstanceTemplateDiskList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.enableDisplay">EnableDisplay</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.guestAccelerator">GuestAccelerator</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList">DataGoogleComputeInstanceTemplateGuestAcceleratorList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.instanceDescription">InstanceDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.keyRevocationActionType">KeyRevocationActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.machineType">MachineType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.metadataFingerprint">MetadataFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.metadataStartupScript">MetadataStartupScript</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.minCpuPlatform">MinCpuPlatform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.namePrefix">NamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.networkInterface">NetworkInterface</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList">DataGoogleComputeInstanceTemplateNetworkInterfaceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.networkPerformanceConfig">NetworkPerformanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList">DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.partnerMetadata">PartnerMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.reservationAffinity">ReservationAffinity</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList">DataGoogleComputeInstanceTemplateReservationAffinityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.resourcePolicies">ResourcePolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.scheduling">Scheduling</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList">DataGoogleComputeInstanceTemplateSchedulingList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.serviceAccount">ServiceAccount</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList">DataGoogleComputeInstanceTemplateServiceAccountList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.shieldedInstanceConfig">ShieldedInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList">DataGoogleComputeInstanceTemplateShieldedInstanceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.tags">Tags</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.tagsFingerprint">TagsFingerprint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.mostRecentInput">MostRecentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.selfLinkUniqueInput">SelfLinkUniqueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.mostRecent">MostRecent</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.selfLinkUnique">SelfLinkUnique</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `AdvancedMachineFeatures`<sup>Required</sup> <a name="AdvancedMachineFeatures" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.advancedMachineFeatures"></a>

```go
func AdvancedMachineFeatures() DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList">DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList</a>

---

##### `CanIpForward`<sup>Required</sup> <a name="CanIpForward" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.canIpForward"></a>

```go
func CanIpForward() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ConfidentialInstanceConfig`<sup>Required</sup> <a name="ConfidentialInstanceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.confidentialInstanceConfig"></a>

```go
func ConfidentialInstanceConfig() DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList">DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList</a>

---

##### `CreationTimestamp`<sup>Required</sup> <a name="CreationTimestamp" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.creationTimestamp"></a>

```go
func CreationTimestamp() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Disk`<sup>Required</sup> <a name="Disk" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.disk"></a>

```go
func Disk() DataGoogleComputeInstanceTemplateDiskList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList">DataGoogleComputeInstanceTemplateDiskList</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `EnableDisplay`<sup>Required</sup> <a name="EnableDisplay" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.enableDisplay"></a>

```go
func EnableDisplay() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `GuestAccelerator`<sup>Required</sup> <a name="GuestAccelerator" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.guestAccelerator"></a>

```go
func GuestAccelerator() DataGoogleComputeInstanceTemplateGuestAcceleratorList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList">DataGoogleComputeInstanceTemplateGuestAcceleratorList</a>

---

##### `InstanceDescription`<sup>Required</sup> <a name="InstanceDescription" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.instanceDescription"></a>

```go
func InstanceDescription() *string
```

- *Type:* *string

---

##### `KeyRevocationActionType`<sup>Required</sup> <a name="KeyRevocationActionType" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.keyRevocationActionType"></a>

```go
func KeyRevocationActionType() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MachineType`<sup>Required</sup> <a name="MachineType" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.machineType"></a>

```go
func MachineType() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `MetadataFingerprint`<sup>Required</sup> <a name="MetadataFingerprint" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.metadataFingerprint"></a>

```go
func MetadataFingerprint() *string
```

- *Type:* *string

---

##### `MetadataStartupScript`<sup>Required</sup> <a name="MetadataStartupScript" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.metadataStartupScript"></a>

```go
func MetadataStartupScript() *string
```

- *Type:* *string

---

##### `MinCpuPlatform`<sup>Required</sup> <a name="MinCpuPlatform" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.minCpuPlatform"></a>

```go
func MinCpuPlatform() *string
```

- *Type:* *string

---

##### `NamePrefix`<sup>Required</sup> <a name="NamePrefix" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.namePrefix"></a>

```go
func NamePrefix() *string
```

- *Type:* *string

---

##### `NetworkInterface`<sup>Required</sup> <a name="NetworkInterface" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.networkInterface"></a>

```go
func NetworkInterface() DataGoogleComputeInstanceTemplateNetworkInterfaceList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList">DataGoogleComputeInstanceTemplateNetworkInterfaceList</a>

---

##### `NetworkPerformanceConfig`<sup>Required</sup> <a name="NetworkPerformanceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.networkPerformanceConfig"></a>

```go
func NetworkPerformanceConfig() DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList">DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList</a>

---

##### `PartnerMetadata`<sup>Required</sup> <a name="PartnerMetadata" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.partnerMetadata"></a>

```go
func PartnerMetadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `ReservationAffinity`<sup>Required</sup> <a name="ReservationAffinity" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.reservationAffinity"></a>

```go
func ReservationAffinity() DataGoogleComputeInstanceTemplateReservationAffinityList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList">DataGoogleComputeInstanceTemplateReservationAffinityList</a>

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.resourcePolicies"></a>

```go
func ResourcePolicies() *[]*string
```

- *Type:* *[]*string

---

##### `Scheduling`<sup>Required</sup> <a name="Scheduling" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.scheduling"></a>

```go
func Scheduling() DataGoogleComputeInstanceTemplateSchedulingList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList">DataGoogleComputeInstanceTemplateSchedulingList</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `ServiceAccount`<sup>Required</sup> <a name="ServiceAccount" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.serviceAccount"></a>

```go
func ServiceAccount() DataGoogleComputeInstanceTemplateServiceAccountList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList">DataGoogleComputeInstanceTemplateServiceAccountList</a>

---

##### `ShieldedInstanceConfig`<sup>Required</sup> <a name="ShieldedInstanceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.shieldedInstanceConfig"></a>

```go
func ShieldedInstanceConfig() DataGoogleComputeInstanceTemplateShieldedInstanceConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList">DataGoogleComputeInstanceTemplateShieldedInstanceConfigList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.tags"></a>

```go
func Tags() *[]*string
```

- *Type:* *[]*string

---

##### `TagsFingerprint`<sup>Required</sup> <a name="TagsFingerprint" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.tagsFingerprint"></a>

```go
func TagsFingerprint() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MostRecentInput`<sup>Optional</sup> <a name="MostRecentInput" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.mostRecentInput"></a>

```go
func MostRecentInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SelfLinkUniqueInput`<sup>Optional</sup> <a name="SelfLinkUniqueInput" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.selfLinkUniqueInput"></a>

```go
func SelfLinkUniqueInput() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MostRecent`<sup>Required</sup> <a name="MostRecent" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.mostRecent"></a>

```go
func MostRecent() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `SelfLinkUnique`<sup>Required</sup> <a name="SelfLinkUnique" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.selfLinkUnique"></a>

```go
func SelfLinkUnique() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeInstanceTemplateAdvancedMachineFeatures <a name="DataGoogleComputeInstanceTemplateAdvancedMachineFeatures" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeatures.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeatures {

}
```


### DataGoogleComputeInstanceTemplateConfidentialInstanceConfig <a name="DataGoogleComputeInstanceTemplateConfidentialInstanceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfig {

}
```


### DataGoogleComputeInstanceTemplateConfig <a name="DataGoogleComputeInstanceTemplateConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Filter: *string,
	Id: *string,
	MostRecent: interface{},
	Name: *string,
	Project: *string,
	SelfLinkUnique: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.filter">Filter</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_compute_instance_template#filter DataGoogleComputeInstanceTemplate#filter}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_compute_instance_template#id DataGoogleComputeInstanceTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.mostRecent">MostRecent</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_compute_instance_template#most_recent DataGoogleComputeInstanceTemplate#most_recent}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.name">Name</a></code> | <code>*string</code> | The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.project">Project</a></code> | <code>*string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.selfLinkUnique">SelfLinkUnique</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_compute_instance_template#self_link_unique DataGoogleComputeInstanceTemplate#self_link_unique}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_compute_instance_template#filter DataGoogleComputeInstanceTemplate#filter}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_compute_instance_template#id DataGoogleComputeInstanceTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `MostRecent`<sup>Optional</sup> <a name="MostRecent" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.mostRecent"></a>

```go
MostRecent interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_compute_instance_template#most_recent DataGoogleComputeInstanceTemplate#most_recent}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the instance template. If you leave this blank, Terraform will auto-generate a unique name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_compute_instance_template#name DataGoogleComputeInstanceTemplate#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_compute_instance_template#project DataGoogleComputeInstanceTemplate#project}

---

##### `SelfLinkUnique`<sup>Optional</sup> <a name="SelfLinkUnique" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfig.property.selfLinkUnique"></a>

```go
SelfLinkUnique *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.14.1/docs/data-sources/google_compute_instance_template#self_link_unique DataGoogleComputeInstanceTemplate#self_link_unique}.

---

### DataGoogleComputeInstanceTemplateDisk <a name="DataGoogleComputeInstanceTemplateDisk" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDisk"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDisk.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateDisk {

}
```


### DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey <a name="DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey {

}
```


### DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey <a name="DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey {

}
```


### DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey <a name="DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey {

}
```


### DataGoogleComputeInstanceTemplateGuestAccelerator <a name="DataGoogleComputeInstanceTemplateGuestAccelerator" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAccelerator"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAccelerator.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateGuestAccelerator {

}
```


### DataGoogleComputeInstanceTemplateNetworkInterface <a name="DataGoogleComputeInstanceTemplateNetworkInterface" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterface"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterface.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateNetworkInterface {

}
```


### DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig {

}
```


### DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange {

}
```


### DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig {

}
```


### DataGoogleComputeInstanceTemplateNetworkPerformanceConfig <a name="DataGoogleComputeInstanceTemplateNetworkPerformanceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfig {

}
```


### DataGoogleComputeInstanceTemplateReservationAffinity <a name="DataGoogleComputeInstanceTemplateReservationAffinity" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateReservationAffinity {

}
```


### DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation <a name="DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation {

}
```


### DataGoogleComputeInstanceTemplateScheduling <a name="DataGoogleComputeInstanceTemplateScheduling" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateScheduling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateScheduling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateScheduling {

}
```


### DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout <a name="DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout {

}
```


### DataGoogleComputeInstanceTemplateSchedulingMaxRunDuration <a name="DataGoogleComputeInstanceTemplateSchedulingMaxRunDuration" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDuration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDuration.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDuration {

}
```


### DataGoogleComputeInstanceTemplateSchedulingNodeAffinities <a name="DataGoogleComputeInstanceTemplateSchedulingNodeAffinities" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinities"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinities.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinities {

}
```


### DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopAction <a name="DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopAction" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopAction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopAction.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopAction {

}
```


### DataGoogleComputeInstanceTemplateServiceAccount <a name="DataGoogleComputeInstanceTemplateServiceAccount" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccount"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccount.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateServiceAccount {

}
```


### DataGoogleComputeInstanceTemplateShieldedInstanceConfig <a name="DataGoogleComputeInstanceTemplateShieldedInstanceConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

&datagooglecomputeinstancetemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList <a name="DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference <a name="DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization">EnableNestedVirtualization</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking">EnableUefiNetworking</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit">PerformanceMonitoringUnit</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore">ThreadsPerCore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode">TurboMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount">VisibleCoreCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeatures">DataGoogleComputeInstanceTemplateAdvancedMachineFeatures</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableNestedVirtualization`<sup>Required</sup> <a name="EnableNestedVirtualization" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableNestedVirtualization"></a>

```go
func EnableNestedVirtualization() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableUefiNetworking`<sup>Required</sup> <a name="EnableUefiNetworking" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.enableUefiNetworking"></a>

```go
func EnableUefiNetworking() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PerformanceMonitoringUnit`<sup>Required</sup> <a name="PerformanceMonitoringUnit" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.performanceMonitoringUnit"></a>

```go
func PerformanceMonitoringUnit() *string
```

- *Type:* *string

---

##### `ThreadsPerCore`<sup>Required</sup> <a name="ThreadsPerCore" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.threadsPerCore"></a>

```go
func ThreadsPerCore() *f64
```

- *Type:* *f64

---

##### `TurboMode`<sup>Required</sup> <a name="TurboMode" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.turboMode"></a>

```go
func TurboMode() *string
```

- *Type:* *string

---

##### `VisibleCoreCount`<sup>Required</sup> <a name="VisibleCoreCount" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.visibleCoreCount"></a>

```go
func VisibleCoreCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeaturesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateAdvancedMachineFeatures
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateAdvancedMachineFeatures">DataGoogleComputeInstanceTemplateAdvancedMachineFeatures</a>

---


### DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList <a name="DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateConfidentialInstanceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference <a name="DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType">ConfidentialInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute">EnableConfidentialCompute</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfig">DataGoogleComputeInstanceTemplateConfidentialInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfidentialInstanceType`<sup>Required</sup> <a name="ConfidentialInstanceType" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.confidentialInstanceType"></a>

```go
func ConfidentialInstanceType() *string
```

- *Type:* *string

---

##### `EnableConfidentialCompute`<sup>Required</sup> <a name="EnableConfidentialCompute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.enableConfidentialCompute"></a>

```go
func EnableConfidentialCompute() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateConfidentialInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateConfidentialInstanceConfig">DataGoogleComputeInstanceTemplateConfidentialInstanceConfig</a>

---


### DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList <a name="DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference <a name="DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey">DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey">DataGoogleComputeInstanceTemplateDiskDiskEncryptionKey</a>

---


### DataGoogleComputeInstanceTemplateDiskList <a name="DataGoogleComputeInstanceTemplateDiskList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateDiskList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateDiskList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateDiskOutputReference <a name="DataGoogleComputeInstanceTemplateDiskOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateDiskOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateDiskOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.autoDelete">AutoDelete</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.boot">Boot</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.deviceName">DeviceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKey">DiskEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList">DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskName">DiskName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGb">DiskSizeGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskType">DiskType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.interface">Interface</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.labels">Labels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIops">ProvisionedIops</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.provisionedThroughput">ProvisionedThroughput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.resourceManagerTags">ResourceManagerTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.resourcePolicies">ResourcePolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceImage">SourceImage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey">SourceImageEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList">DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshot">SourceSnapshot</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey">SourceSnapshotEncryptionKey</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList">DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDisk">DataGoogleComputeInstanceTemplateDisk</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoDelete`<sup>Required</sup> <a name="AutoDelete" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.autoDelete"></a>

```go
func AutoDelete() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Boot`<sup>Required</sup> <a name="Boot" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.boot"></a>

```go
func Boot() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `DeviceName`<sup>Required</sup> <a name="DeviceName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.deviceName"></a>

```go
func DeviceName() *string
```

- *Type:* *string

---

##### `DiskEncryptionKey`<sup>Required</sup> <a name="DiskEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskEncryptionKey"></a>

```go
func DiskEncryptionKey() DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList">DataGoogleComputeInstanceTemplateDiskDiskEncryptionKeyList</a>

---

##### `DiskName`<sup>Required</sup> <a name="DiskName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskName"></a>

```go
func DiskName() *string
```

- *Type:* *string

---

##### `DiskSizeGb`<sup>Required</sup> <a name="DiskSizeGb" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskSizeGb"></a>

```go
func DiskSizeGb() *f64
```

- *Type:* *f64

---

##### `DiskType`<sup>Required</sup> <a name="DiskType" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.diskType"></a>

```go
func DiskType() *string
```

- *Type:* *string

---

##### `Interface`<sup>Required</sup> <a name="Interface" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.interface"></a>

```go
func Interface() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.labels"></a>

```go
func Labels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `ProvisionedIops`<sup>Required</sup> <a name="ProvisionedIops" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.provisionedIops"></a>

```go
func ProvisionedIops() *f64
```

- *Type:* *f64

---

##### `ProvisionedThroughput`<sup>Required</sup> <a name="ProvisionedThroughput" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.provisionedThroughput"></a>

```go
func ProvisionedThroughput() *f64
```

- *Type:* *f64

---

##### `ResourceManagerTags`<sup>Required</sup> <a name="ResourceManagerTags" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.resourceManagerTags"></a>

```go
func ResourceManagerTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ResourcePolicies`<sup>Required</sup> <a name="ResourcePolicies" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.resourcePolicies"></a>

```go
func ResourcePolicies() *[]*string
```

- *Type:* *[]*string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceImage`<sup>Required</sup> <a name="SourceImage" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceImage"></a>

```go
func SourceImage() *string
```

- *Type:* *string

---

##### `SourceImageEncryptionKey`<sup>Required</sup> <a name="SourceImageEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceImageEncryptionKey"></a>

```go
func SourceImageEncryptionKey() DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList">DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList</a>

---

##### `SourceSnapshot`<sup>Required</sup> <a name="SourceSnapshot" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshot"></a>

```go
func SourceSnapshot() *string
```

- *Type:* *string

---

##### `SourceSnapshotEncryptionKey`<sup>Required</sup> <a name="SourceSnapshotEncryptionKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.sourceSnapshotEncryptionKey"></a>

```go
func SourceSnapshotEncryptionKey() DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList">DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateDisk
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDisk">DataGoogleComputeInstanceTemplateDisk</a>

---


### DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList <a name="DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference <a name="DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```go
func KmsKeyServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey">DataGoogleComputeInstanceTemplateDiskSourceImageEncryptionKey</a>

---


### DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList <a name="DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference <a name="DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink">KmsKeySelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount">KmsKeyServiceAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KmsKeySelfLink`<sup>Required</sup> <a name="KmsKeySelfLink" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeySelfLink"></a>

```go
func KmsKeySelfLink() *string
```

- *Type:* *string

---

##### `KmsKeyServiceAccount`<sup>Required</sup> <a name="KmsKeyServiceAccount" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.kmsKeyServiceAccount"></a>

```go
func KmsKeyServiceAccount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKeyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey">DataGoogleComputeInstanceTemplateDiskSourceSnapshotEncryptionKey</a>

---


### DataGoogleComputeInstanceTemplateGuestAcceleratorList <a name="DataGoogleComputeInstanceTemplateGuestAcceleratorList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateGuestAcceleratorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateGuestAcceleratorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference <a name="DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAccelerator">DataGoogleComputeInstanceTemplateGuestAccelerator</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAcceleratorOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateGuestAccelerator
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateGuestAccelerator">DataGoogleComputeInstanceTemplateGuestAccelerator</a>

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp">NatIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NatIp`<sup>Required</sup> <a name="NatIp" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.natIp"></a>

```go
func NatIp() *string
```

- *Type:* *string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.networkTier"></a>

```go
func NetworkTier() *string
```

- *Type:* *string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.publicPtrDomainName"></a>

```go
func PublicPtrDomainName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig">DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfig</a>

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange">IpCidrRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName">SubnetworkRangeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpCidrRange`<sup>Required</sup> <a name="IpCidrRange" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.ipCidrRange"></a>

```go
func IpCidrRange() *string
```

- *Type:* *string

---

##### `SubnetworkRangeName`<sup>Required</sup> <a name="SubnetworkRangeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.subnetworkRangeName"></a>

```go
func SubnetworkRangeName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange">DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRange</a>

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6">ExternalIpv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength">ExternalIpv6PrefixLength</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier">NetworkTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName">PublicPtrDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalIpv6`<sup>Required</sup> <a name="ExternalIpv6" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6"></a>

```go
func ExternalIpv6() *string
```

- *Type:* *string

---

##### `ExternalIpv6PrefixLength`<sup>Required</sup> <a name="ExternalIpv6PrefixLength" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.externalIpv6PrefixLength"></a>

```go
func ExternalIpv6PrefixLength() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NetworkTier`<sup>Required</sup> <a name="NetworkTier" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.networkTier"></a>

```go
func NetworkTier() *string
```

- *Type:* *string

---

##### `PublicPtrDomainName`<sup>Required</sup> <a name="PublicPtrDomainName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.publicPtrDomainName"></a>

```go
func PublicPtrDomainName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig">DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfig</a>

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceList <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateNetworkInterfaceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateNetworkInterfaceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference <a name="DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig">AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList">DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange">AliasIpRange</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList">DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength">InternalIpv6PrefixLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig">Ipv6AccessConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList">DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType">Ipv6AccessType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.network">Network</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachment">NetworkAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIp">NetworkIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicType">NicType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCount">QueueCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackType">StackType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork">Subnetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject">SubnetworkProject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterface">DataGoogleComputeInstanceTemplateNetworkInterface</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccessConfig`<sup>Required</sup> <a name="AccessConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.accessConfig"></a>

```go
func AccessConfig() DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList">DataGoogleComputeInstanceTemplateNetworkInterfaceAccessConfigList</a>

---

##### `AliasIpRange`<sup>Required</sup> <a name="AliasIpRange" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.aliasIpRange"></a>

```go
func AliasIpRange() DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList">DataGoogleComputeInstanceTemplateNetworkInterfaceAliasIpRangeList</a>

---

##### `InternalIpv6PrefixLength`<sup>Required</sup> <a name="InternalIpv6PrefixLength" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalIpv6PrefixLength"></a>

```go
func InternalIpv6PrefixLength() *f64
```

- *Type:* *f64

---

##### `Ipv6AccessConfig`<sup>Required</sup> <a name="Ipv6AccessConfig" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessConfig"></a>

```go
func Ipv6AccessConfig() DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList">DataGoogleComputeInstanceTemplateNetworkInterfaceIpv6AccessConfigList</a>

---

##### `Ipv6AccessType`<sup>Required</sup> <a name="Ipv6AccessType" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6AccessType"></a>

```go
func Ipv6AccessType() *string
```

- *Type:* *string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Network`<sup>Required</sup> <a name="Network" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.network"></a>

```go
func Network() *string
```

- *Type:* *string

---

##### `NetworkAttachment`<sup>Required</sup> <a name="NetworkAttachment" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkAttachment"></a>

```go
func NetworkAttachment() *string
```

- *Type:* *string

---

##### `NetworkIp`<sup>Required</sup> <a name="NetworkIp" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.networkIp"></a>

```go
func NetworkIp() *string
```

- *Type:* *string

---

##### `NicType`<sup>Required</sup> <a name="NicType" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.nicType"></a>

```go
func NicType() *string
```

- *Type:* *string

---

##### `QueueCount`<sup>Required</sup> <a name="QueueCount" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.queueCount"></a>

```go
func QueueCount() *f64
```

- *Type:* *f64

---

##### `StackType`<sup>Required</sup> <a name="StackType" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.stackType"></a>

```go
func StackType() *string
```

- *Type:* *string

---

##### `Subnetwork`<sup>Required</sup> <a name="Subnetwork" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetwork"></a>

```go
func Subnetwork() *string
```

- *Type:* *string

---

##### `SubnetworkProject`<sup>Required</sup> <a name="SubnetworkProject" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.subnetworkProject"></a>

```go
func SubnetworkProject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterfaceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateNetworkInterface
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkInterface">DataGoogleComputeInstanceTemplateNetworkInterface</a>

---


### DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList <a name="DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateNetworkPerformanceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference <a name="DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier">TotalEgressBandwidthTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfig">DataGoogleComputeInstanceTemplateNetworkPerformanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TotalEgressBandwidthTier`<sup>Required</sup> <a name="TotalEgressBandwidthTier" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.totalEgressBandwidthTier"></a>

```go
func TotalEgressBandwidthTier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateNetworkPerformanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateNetworkPerformanceConfig">DataGoogleComputeInstanceTemplateNetworkPerformanceConfig</a>

---


### DataGoogleComputeInstanceTemplateReservationAffinityList <a name="DataGoogleComputeInstanceTemplateReservationAffinityList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateReservationAffinityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateReservationAffinityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateReservationAffinityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateReservationAffinityOutputReference <a name="DataGoogleComputeInstanceTemplateReservationAffinityOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateReservationAffinityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateReservationAffinityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservation">SpecificReservation</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList">DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinity">DataGoogleComputeInstanceTemplateReservationAffinity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SpecificReservation`<sup>Required</sup> <a name="SpecificReservation" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.specificReservation"></a>

```go
func SpecificReservation() DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList">DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinityOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateReservationAffinity
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinity">DataGoogleComputeInstanceTemplateReservationAffinity</a>

---


### DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList <a name="DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference <a name="DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation">DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation">DataGoogleComputeInstanceTemplateReservationAffinitySpecificReservation</a>

---


### DataGoogleComputeInstanceTemplateSchedulingList <a name="DataGoogleComputeInstanceTemplateSchedulingList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateSchedulingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateSchedulingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateSchedulingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList <a name="DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference <a name="DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout">DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeout</a>

---


### DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList <a name="DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference <a name="DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos">Nanos</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds">Seconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDuration">DataGoogleComputeInstanceTemplateSchedulingMaxRunDuration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Nanos`<sup>Required</sup> <a name="Nanos" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.nanos"></a>

```go
func Nanos() *f64
```

- *Type:* *f64

---

##### `Seconds`<sup>Required</sup> <a name="Seconds" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.seconds"></a>

```go
func Seconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateSchedulingMaxRunDuration
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDuration">DataGoogleComputeInstanceTemplateSchedulingMaxRunDuration</a>

---


### DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList <a name="DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference <a name="DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinities">DataGoogleComputeInstanceTemplateSchedulingNodeAffinities</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateSchedulingNodeAffinities
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinities">DataGoogleComputeInstanceTemplateSchedulingNodeAffinities</a>

---


### DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList <a name="DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference <a name="DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd">DiscardLocalSsd</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DiscardLocalSsd`<sup>Required</sup> <a name="DiscardLocalSsd" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.discardLocalSsd"></a>

```go
func DiscardLocalSsd() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopAction
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopAction">DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopAction</a>

---


### DataGoogleComputeInstanceTemplateSchedulingOutputReference <a name="DataGoogleComputeInstanceTemplateSchedulingOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateSchedulingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateSchedulingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestart">AutomaticRestart</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds">HostErrorTimeoutSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction">InstanceTerminationAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout">LocalSsdRecoveryTimeout</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.maintenanceInterval">MaintenanceInterval</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.maxRunDuration">MaxRunDuration</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList">DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpus">MinNodeCpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinities">NodeAffinities</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList">DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenance">OnHostMaintenance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction">OnInstanceStopAction</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList">DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptible">Preemptible</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModel">ProvisioningModel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateScheduling">DataGoogleComputeInstanceTemplateScheduling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticRestart`<sup>Required</sup> <a name="AutomaticRestart" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.automaticRestart"></a>

```go
func AutomaticRestart() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `HostErrorTimeoutSeconds`<sup>Required</sup> <a name="HostErrorTimeoutSeconds" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.hostErrorTimeoutSeconds"></a>

```go
func HostErrorTimeoutSeconds() *f64
```

- *Type:* *f64

---

##### `InstanceTerminationAction`<sup>Required</sup> <a name="InstanceTerminationAction" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.instanceTerminationAction"></a>

```go
func InstanceTerminationAction() *string
```

- *Type:* *string

---

##### `LocalSsdRecoveryTimeout`<sup>Required</sup> <a name="LocalSsdRecoveryTimeout" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.localSsdRecoveryTimeout"></a>

```go
func LocalSsdRecoveryTimeout() DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList">DataGoogleComputeInstanceTemplateSchedulingLocalSsdRecoveryTimeoutList</a>

---

##### `MaintenanceInterval`<sup>Required</sup> <a name="MaintenanceInterval" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.maintenanceInterval"></a>

```go
func MaintenanceInterval() *string
```

- *Type:* *string

---

##### `MaxRunDuration`<sup>Required</sup> <a name="MaxRunDuration" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.maxRunDuration"></a>

```go
func MaxRunDuration() DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList">DataGoogleComputeInstanceTemplateSchedulingMaxRunDurationList</a>

---

##### `MinNodeCpus`<sup>Required</sup> <a name="MinNodeCpus" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.minNodeCpus"></a>

```go
func MinNodeCpus() *f64
```

- *Type:* *f64

---

##### `NodeAffinities`<sup>Required</sup> <a name="NodeAffinities" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.nodeAffinities"></a>

```go
func NodeAffinities() DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList">DataGoogleComputeInstanceTemplateSchedulingNodeAffinitiesList</a>

---

##### `OnHostMaintenance`<sup>Required</sup> <a name="OnHostMaintenance" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.onHostMaintenance"></a>

```go
func OnHostMaintenance() *string
```

- *Type:* *string

---

##### `OnInstanceStopAction`<sup>Required</sup> <a name="OnInstanceStopAction" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.onInstanceStopAction"></a>

```go
func OnInstanceStopAction() DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList">DataGoogleComputeInstanceTemplateSchedulingOnInstanceStopActionList</a>

---

##### `Preemptible`<sup>Required</sup> <a name="Preemptible" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.preemptible"></a>

```go
func Preemptible() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ProvisioningModel`<sup>Required</sup> <a name="ProvisioningModel" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.provisioningModel"></a>

```go
func ProvisioningModel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateSchedulingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateScheduling
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateScheduling">DataGoogleComputeInstanceTemplateScheduling</a>

---


### DataGoogleComputeInstanceTemplateServiceAccountList <a name="DataGoogleComputeInstanceTemplateServiceAccountList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateServiceAccountList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateServiceAccountList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateServiceAccountOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateServiceAccountOutputReference <a name="DataGoogleComputeInstanceTemplateServiceAccountOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateServiceAccountOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateServiceAccountOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopes">Scopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccount">DataGoogleComputeInstanceTemplateServiceAccount</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `Scopes`<sup>Required</sup> <a name="Scopes" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.scopes"></a>

```go
func Scopes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccountOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateServiceAccount
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateServiceAccount">DataGoogleComputeInstanceTemplateServiceAccount</a>

---


### DataGoogleComputeInstanceTemplateShieldedInstanceConfigList <a name="DataGoogleComputeInstanceTemplateShieldedInstanceConfigList" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateShieldedInstanceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleComputeInstanceTemplateShieldedInstanceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.get"></a>

```go
func Get(index *f64) DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference <a name="DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/datagooglecomputeinstancetemplate"

datagooglecomputeinstancetemplate.NewDataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring">EnableIntegrityMonitoring</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot">EnableSecureBoot</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm">EnableVtpm</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfig">DataGoogleComputeInstanceTemplateShieldedInstanceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableIntegrityMonitoring`<sup>Required</sup> <a name="EnableIntegrityMonitoring" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableIntegrityMonitoring"></a>

```go
func EnableIntegrityMonitoring() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableSecureBoot`<sup>Required</sup> <a name="EnableSecureBoot" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableSecureBoot"></a>

```go
func EnableSecureBoot() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `EnableVtpm`<sup>Required</sup> <a name="EnableVtpm" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.enableVtpm"></a>

```go
func EnableVtpm() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleComputeInstanceTemplateShieldedInstanceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleComputeInstanceTemplate.DataGoogleComputeInstanceTemplateShieldedInstanceConfig">DataGoogleComputeInstanceTemplateShieldedInstanceConfig</a>

---




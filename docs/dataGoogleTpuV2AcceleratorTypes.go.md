# `dataGoogleTpuV2AcceleratorTypes` Submodule <a name="`dataGoogleTpuV2AcceleratorTypes` Submodule" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleTpuV2AcceleratorTypes <a name="DataGoogleTpuV2AcceleratorTypes" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_tpu_v2_accelerator_types google_tpu_v2_accelerator_types}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogletpuv2acceleratortypes"

datagoogletpuv2acceleratortypes.NewDataGoogleTpuV2AcceleratorTypes(scope Construct, id *string, config DataGoogleTpuV2AcceleratorTypesConfig) DataGoogleTpuV2AcceleratorTypes
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig">DataGoogleTpuV2AcceleratorTypesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig">DataGoogleTpuV2AcceleratorTypesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetProject"></a>

```go
func ResetProject()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.resetZone"></a>

```go
func ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleTpuV2AcceleratorTypes resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogletpuv2acceleratortypes"

datagoogletpuv2acceleratortypes.DataGoogleTpuV2AcceleratorTypes_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogletpuv2acceleratortypes"

datagoogletpuv2acceleratortypes.DataGoogleTpuV2AcceleratorTypes_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogletpuv2acceleratortypes"

datagoogletpuv2acceleratortypes.DataGoogleTpuV2AcceleratorTypes_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogletpuv2acceleratortypes"

datagoogletpuv2acceleratortypes.DataGoogleTpuV2AcceleratorTypes_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleTpuV2AcceleratorTypes resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleTpuV2AcceleratorTypes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleTpuV2AcceleratorTypes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_tpu_v2_accelerator_types#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleTpuV2AcceleratorTypes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.types">Types</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.zoneInput">ZoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.zone">Zone</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Types`<sup>Required</sup> <a name="Types" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.types"></a>

```go
func Types() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.zoneInput"></a>

```go
func ZoneInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.zone"></a>

```go
func Zone() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypes.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleTpuV2AcceleratorTypesConfig <a name="DataGoogleTpuV2AcceleratorTypesConfig" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogletpuv2acceleratortypes"

&datagoogletpuv2acceleratortypes.DataGoogleTpuV2AcceleratorTypesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
	Project: *string,
	Zone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_tpu_v2_accelerator_types#id DataGoogleTpuV2AcceleratorTypes#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_tpu_v2_accelerator_types#project DataGoogleTpuV2AcceleratorTypes#project}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.zone">Zone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_tpu_v2_accelerator_types#zone DataGoogleTpuV2AcceleratorTypes#zone}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_tpu_v2_accelerator_types#id DataGoogleTpuV2AcceleratorTypes#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_tpu_v2_accelerator_types#project DataGoogleTpuV2AcceleratorTypes#project}.

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.dataGoogleTpuV2AcceleratorTypes.DataGoogleTpuV2AcceleratorTypesConfig.property.zone"></a>

```go
Zone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.22.0/docs/data-sources/google_tpu_v2_accelerator_types#zone DataGoogleTpuV2AcceleratorTypes#zone}.

---




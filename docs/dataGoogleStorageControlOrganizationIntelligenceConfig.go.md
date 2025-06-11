# `dataGoogleStorageControlOrganizationIntelligenceConfig` Submodule <a name="`dataGoogleStorageControlOrganizationIntelligenceConfig` Submodule" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageControlOrganizationIntelligenceConfig <a name="DataGoogleStorageControlOrganizationIntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/data-sources/google_storage_control_organization_intelligence_config google_storage_control_organization_intelligence_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfig(scope Construct, id *string, config DataGoogleStorageControlOrganizationIntelligenceConfigConfig) DataGoogleStorageControlOrganizationIntelligenceConfig
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig">DataGoogleStorageControlOrganizationIntelligenceConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig">DataGoogleStorageControlOrganizationIntelligenceConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleStorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.DataGoogleStorageControlOrganizationIntelligenceConfig_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.DataGoogleStorageControlOrganizationIntelligenceConfig_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.DataGoogleStorageControlOrganizationIntelligenceConfig_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.DataGoogleStorageControlOrganizationIntelligenceConfig_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleStorageControlOrganizationIntelligenceConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleStorageControlOrganizationIntelligenceConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleStorageControlOrganizationIntelligenceConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/data-sources/google_storage_control_organization_intelligence_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageControlOrganizationIntelligenceConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.editionConfig">EditionConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig">EffectiveIntelligenceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.filter">Filter</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.trialConfig">TrialConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList">DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `EditionConfig`<sup>Required</sup> <a name="EditionConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.editionConfig"></a>

```go
func EditionConfig() *string
```

- *Type:* *string

---

##### `EffectiveIntelligenceConfig`<sup>Required</sup> <a name="EffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.effectiveIntelligenceConfig"></a>

```go
func EffectiveIntelligenceConfig() DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList">DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.filter"></a>

```go
func Filter() DataGoogleStorageControlOrganizationIntelligenceConfigFilterList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterList</a>

---

##### `TrialConfig`<sup>Required</sup> <a name="TrialConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.trialConfig"></a>

```go
func TrialConfig() DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList">DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfig.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageControlOrganizationIntelligenceConfigConfig <a name="DataGoogleStorageControlOrganizationIntelligenceConfigConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

&datagooglestoragecontrolorganizationintelligenceconfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.name">Name</a></code> | <code>*string</code> | Identifier of the GCP Organization. For GCP org, this field should be organization number. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/data-sources/google_storage_control_organization_intelligence_config#id DataGoogleStorageControlOrganizationIntelligenceConfig#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Identifier of the GCP Organization. For GCP org, this field should be organization number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/data-sources/google_storage_control_organization_intelligence_config#name DataGoogleStorageControlOrganizationIntelligenceConfig#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.39.0/docs/data-sources/google_storage_control_organization_intelligence_config#id DataGoogleStorageControlOrganizationIntelligenceConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig <a name="DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

&datagooglestoragecontrolorganizationintelligenceconfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig {

}
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilter <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilter" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

&datagooglestoragecontrolorganizationintelligenceconfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter {

}
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

&datagooglestoragecontrolorganizationintelligenceconfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets {

}
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

&datagooglestoragecontrolorganizationintelligenceconfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations {

}
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

&datagooglestoragecontrolorganizationintelligenceconfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets {

}
```


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

&datagooglestoragecontrolorganizationintelligenceconfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations {

}
```


### DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig <a name="DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

&datagooglestoragecontrolorganizationintelligenceconfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition">EffectiveEdition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig">IntelligenceConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectiveEdition`<sup>Required</sup> <a name="EffectiveEdition" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.effectiveEdition"></a>

```go
func EffectiveEdition() *string
```

- *Type:* *string

---

##### `IntelligenceConfig`<sup>Required</sup> <a name="IntelligenceConfig" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.intelligenceConfig"></a>

```go
func IntelligenceConfig() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig">DataGoogleStorageControlOrganizationIntelligenceConfigEffectiveIntelligenceConfig</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```go
func BucketIdRegexes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBuckets</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocations</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes">BucketIdRegexes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketIdRegexes`<sup>Required</sup> <a name="BucketIdRegexes" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.bucketIdRegexes"></a>

```go
func BucketIdRegexes() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBuckets</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations">Locations</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Locations`<sup>Required</sup> <a name="Locations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.locations"></a>

```go
func Locations() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocations</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfigFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlOrganizationIntelligenceConfigFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets">ExcludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations">ExcludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets">IncludedCloudStorageBuckets</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations">IncludedCloudStorageLocations</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter">DataGoogleStorageControlOrganizationIntelligenceConfigFilter</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedCloudStorageBuckets`<sup>Required</sup> <a name="ExcludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageBuckets"></a>

```go
func ExcludedCloudStorageBuckets() DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageBucketsList</a>

---

##### `ExcludedCloudStorageLocations`<sup>Required</sup> <a name="ExcludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.excludedCloudStorageLocations"></a>

```go
func ExcludedCloudStorageLocations() DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterExcludedCloudStorageLocationsList</a>

---

##### `IncludedCloudStorageBuckets`<sup>Required</sup> <a name="IncludedCloudStorageBuckets" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageBuckets"></a>

```go
func IncludedCloudStorageBuckets() DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageBucketsList</a>

---

##### `IncludedCloudStorageLocations`<sup>Required</sup> <a name="IncludedCloudStorageLocations" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.includedCloudStorageLocations"></a>

```go
func IncludedCloudStorageLocations() DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList">DataGoogleStorageControlOrganizationIntelligenceConfigFilterIncludedCloudStorageLocationsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlOrganizationIntelligenceConfigFilter
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigFilter">DataGoogleStorageControlOrganizationIntelligenceConfigFilter</a>

---


### DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList <a name="DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get"></a>

```go
func Get(index *f64) DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference <a name="DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v16/datagooglestoragecontrolorganizationintelligenceconfig"

datagooglestoragecontrolorganizationintelligenceconfig.NewDataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.expireTime">ExpireTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig">DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExpireTime`<sup>Required</sup> <a name="ExpireTime" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.expireTime"></a>

```go
func ExpireTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleStorageControlOrganizationIntelligenceConfig.DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig">DataGoogleStorageControlOrganizationIntelligenceConfigTrialConfig</a>

---




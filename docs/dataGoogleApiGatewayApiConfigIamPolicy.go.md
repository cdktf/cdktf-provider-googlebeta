# `dataGoogleApiGatewayApiConfigIamPolicy` Submodule <a name="`dataGoogleApiGatewayApiConfigIamPolicy` Submodule" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleApiGatewayApiConfigIamPolicy <a name="DataGoogleApiGatewayApiConfigIamPolicy" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/data-sources/google_api_gateway_api_config_iam_policy google_api_gateway_api_config_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleapigatewayapiconfigiampolicy"

datagoogleapigatewayapiconfigiampolicy.NewDataGoogleApiGatewayApiConfigIamPolicy(scope Construct, id *string, config DataGoogleApiGatewayApiConfigIamPolicyConfig) DataGoogleApiGatewayApiConfigIamPolicy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig">DataGoogleApiGatewayApiConfigIamPolicyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig">DataGoogleApiGatewayApiConfigIamPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.resetProject">ResetProject</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.resetProject"></a>

```go
func ResetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataGoogleApiGatewayApiConfigIamPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleapigatewayapiconfigiampolicy"

datagoogleapigatewayapiconfigiampolicy.DataGoogleApiGatewayApiConfigIamPolicy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleapigatewayapiconfigiampolicy"

datagoogleapigatewayapiconfigiampolicy.DataGoogleApiGatewayApiConfigIamPolicy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isTerraformDataSource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleapigatewayapiconfigiampolicy"

datagoogleapigatewayapiconfigiampolicy.DataGoogleApiGatewayApiConfigIamPolicy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleapigatewayapiconfigiampolicy"

datagoogleapigatewayapiconfigiampolicy.DataGoogleApiGatewayApiConfigIamPolicy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataGoogleApiGatewayApiConfigIamPolicy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataGoogleApiGatewayApiConfigIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataGoogleApiGatewayApiConfigIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/data-sources/google_api_gateway_api_config_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataGoogleApiGatewayApiConfigIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.policyData">PolicyData</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.apiConfigInput">ApiConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.apiInput">ApiInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.api">Api</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.apiConfig">ApiConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `PolicyData`<sup>Required</sup> <a name="PolicyData" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.policyData"></a>

```go
func PolicyData() *string
```

- *Type:* *string

---

##### `ApiConfigInput`<sup>Optional</sup> <a name="ApiConfigInput" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.apiConfigInput"></a>

```go
func ApiConfigInput() *string
```

- *Type:* *string

---

##### `ApiInput`<sup>Optional</sup> <a name="ApiInput" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.apiInput"></a>

```go
func ApiInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.api"></a>

```go
func Api() *string
```

- *Type:* *string

---

##### `ApiConfig`<sup>Required</sup> <a name="ApiConfig" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.apiConfig"></a>

```go
func ApiConfig() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleApiGatewayApiConfigIamPolicyConfig <a name="DataGoogleApiGatewayApiConfigIamPolicyConfig" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v14/datagoogleapigatewayapiconfigiampolicy"

&datagoogleapigatewayapiconfigiampolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Api: *string,
	ApiConfig: *string,
	Id: *string,
	Project: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.api">Api</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/data-sources/google_api_gateway_api_config_iam_policy#api DataGoogleApiGatewayApiConfigIamPolicy#api}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.apiConfig">ApiConfig</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/data-sources/google_api_gateway_api_config_iam_policy#api_config DataGoogleApiGatewayApiConfigIamPolicy#api_config}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/data-sources/google_api_gateway_api_config_iam_policy#id DataGoogleApiGatewayApiConfigIamPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/data-sources/google_api_gateway_api_config_iam_policy#project DataGoogleApiGatewayApiConfigIamPolicy#project}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Api`<sup>Required</sup> <a name="Api" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.api"></a>

```go
Api *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/data-sources/google_api_gateway_api_config_iam_policy#api DataGoogleApiGatewayApiConfigIamPolicy#api}.

---

##### `ApiConfig`<sup>Required</sup> <a name="ApiConfig" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.apiConfig"></a>

```go
ApiConfig *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/data-sources/google_api_gateway_api_config_iam_policy#api_config DataGoogleApiGatewayApiConfigIamPolicy#api_config}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/data-sources/google_api_gateway_api_config_iam_policy#id DataGoogleApiGatewayApiConfigIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.dataGoogleApiGatewayApiConfigIamPolicy.DataGoogleApiGatewayApiConfigIamPolicyConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.16.0/docs/data-sources/google_api_gateway_api_config_iam_policy#project DataGoogleApiGatewayApiConfigIamPolicy#project}.

---




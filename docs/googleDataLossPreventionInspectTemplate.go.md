# `googleDataLossPreventionInspectTemplate` Submodule <a name="`googleDataLossPreventionInspectTemplate` Submodule" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataLossPreventionInspectTemplate <a name="GoogleDataLossPreventionInspectTemplate" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate"></a>

Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template google_data_loss_prevention_inspect_template}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplate(scope Construct, id *string, config GoogleDataLossPreventionInspectTemplateConfig) GoogleDataLossPreventionInspectTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig">GoogleDataLossPreventionInspectTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig">GoogleDataLossPreventionInspectTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.putInspectConfig">PutInspectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.resetInspectConfig">ResetInspectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutInspectConfig` <a name="PutInspectConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.putInspectConfig"></a>

```go
func PutInspectConfig(value GoogleDataLossPreventionInspectTemplateInspectConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.putInspectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig">GoogleDataLossPreventionInspectTemplateInspectConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.putTimeouts"></a>

```go
func PutTimeouts(value GoogleDataLossPreventionInspectTemplateTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeouts">GoogleDataLossPreventionInspectTemplateTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.resetId"></a>

```go
func ResetId()
```

##### `ResetInspectConfig` <a name="ResetInspectConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.resetInspectConfig"></a>

```go
func ResetInspectConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.inspectConfig">InspectConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference">GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.inspectConfigInput">InspectConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig">GoogleDataLossPreventionInspectTemplateInspectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InspectConfig`<sup>Required</sup> <a name="InspectConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.inspectConfig"></a>

```go
func InspectConfig() GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.timeouts"></a>

```go
func Timeouts() GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference">GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference</a>

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InspectConfigInput`<sup>Optional</sup> <a name="InspectConfigInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.inspectConfigInput"></a>

```go
func InspectConfigInput() GoogleDataLossPreventionInspectTemplateInspectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig">GoogleDataLossPreventionInspectTemplateInspectConfig</a>

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataLossPreventionInspectTemplateConfig <a name="GoogleDataLossPreventionInspectTemplateConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Parent: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	InspectConfig: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.parent">Parent</a></code> | <code>*string</code> | The parent of the inspect template in any of the following formats:. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.description">Description</a></code> | <code>*string</code> | A description of the inspect template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User set display name of the inspect template. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#id GoogleDataLossPreventionInspectTemplate#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.inspectConfig">InspectConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig">GoogleDataLossPreventionInspectTemplateInspectConfig</a></code> | inspect_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeouts">GoogleDataLossPreventionInspectTemplateTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The parent of the inspect template in any of the following formats:.

'projects/{{project}}'
'projects/{{project}}/locations/{{location}}'
'organizations/{{organization_id}}'
'organizations/{{organization_id}}/locations/{{location}}'

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#parent GoogleDataLossPreventionInspectTemplate#parent}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the inspect template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#description GoogleDataLossPreventionInspectTemplate#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User set display name of the inspect template.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#display_name GoogleDataLossPreventionInspectTemplate#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#id GoogleDataLossPreventionInspectTemplate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InspectConfig`<sup>Optional</sup> <a name="InspectConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.inspectConfig"></a>

```go
InspectConfig GoogleDataLossPreventionInspectTemplateInspectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig">GoogleDataLossPreventionInspectTemplateInspectConfig</a>

inspect_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#inspect_config GoogleDataLossPreventionInspectTemplate#inspect_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateConfig.property.timeouts"></a>

```go
Timeouts GoogleDataLossPreventionInspectTemplateTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeouts">GoogleDataLossPreventionInspectTemplateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#timeouts GoogleDataLossPreventionInspectTemplate#timeouts}

---

### GoogleDataLossPreventionInspectTemplateInspectConfig <a name="GoogleDataLossPreventionInspectTemplateInspectConfig" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfig {
	ContentOptions: *[]*string,
	CustomInfoTypes: interface{},
	ExcludeInfoTypes: interface{},
	IncludeQuote: interface{},
	InfoTypes: interface{},
	Limits: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits,
	MinLikelihood: *string,
	RuleSet: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.contentOptions">ContentOptions</a></code> | <code>*[]*string</code> | List of options defining data content to scan. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.customInfoTypes">CustomInfoTypes</a></code> | <code>interface{}</code> | custom_info_types block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.excludeInfoTypes">ExcludeInfoTypes</a></code> | <code>interface{}</code> | When true, excludes type information of the findings. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.includeQuote">IncludeQuote</a></code> | <code>interface{}</code> | When true, a contextual quote from the data that triggered a finding is included in the response. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.infoTypes">InfoTypes</a></code> | <code>interface{}</code> | info_types block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits">GoogleDataLossPreventionInspectTemplateInspectConfigLimits</a></code> | limits block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.minLikelihood">MinLikelihood</a></code> | <code>*string</code> | Only returns findings equal or above this threshold. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.ruleSet">RuleSet</a></code> | <code>interface{}</code> | rule_set block. |

---

##### `ContentOptions`<sup>Optional</sup> <a name="ContentOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.contentOptions"></a>

```go
ContentOptions *[]*string
```

- *Type:* *[]*string

List of options defining data content to scan.

If empty, text, images, and other content will be included. Possible values: ["CONTENT_TEXT", "CONTENT_IMAGE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#content_options GoogleDataLossPreventionInspectTemplate#content_options}

---

##### `CustomInfoTypes`<sup>Optional</sup> <a name="CustomInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.customInfoTypes"></a>

```go
CustomInfoTypes interface{}
```

- *Type:* interface{}

custom_info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#custom_info_types GoogleDataLossPreventionInspectTemplate#custom_info_types}

---

##### `ExcludeInfoTypes`<sup>Optional</sup> <a name="ExcludeInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.excludeInfoTypes"></a>

```go
ExcludeInfoTypes interface{}
```

- *Type:* interface{}

When true, excludes type information of the findings.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#exclude_info_types GoogleDataLossPreventionInspectTemplate#exclude_info_types}

---

##### `IncludeQuote`<sup>Optional</sup> <a name="IncludeQuote" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.includeQuote"></a>

```go
IncludeQuote interface{}
```

- *Type:* interface{}

When true, a contextual quote from the data that triggered a finding is included in the response.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#include_quote GoogleDataLossPreventionInspectTemplate#include_quote}

---

##### `InfoTypes`<sup>Optional</sup> <a name="InfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.infoTypes"></a>

```go
InfoTypes interface{}
```

- *Type:* interface{}

info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#info_types GoogleDataLossPreventionInspectTemplate#info_types}

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.limits"></a>

```go
Limits GoogleDataLossPreventionInspectTemplateInspectConfigLimits
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits">GoogleDataLossPreventionInspectTemplateInspectConfigLimits</a>

limits block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#limits GoogleDataLossPreventionInspectTemplate#limits}

---

##### `MinLikelihood`<sup>Optional</sup> <a name="MinLikelihood" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.minLikelihood"></a>

```go
MinLikelihood *string
```

- *Type:* *string

Only returns findings equal or above this threshold.

See https://cloud.google.com/dlp/docs/likelihood for more info Default value: "POSSIBLE" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#min_likelihood GoogleDataLossPreventionInspectTemplate#min_likelihood}

---

##### `RuleSet`<sup>Optional</sup> <a name="RuleSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig.property.ruleSet"></a>

```go
RuleSet interface{}
```

- *Type:* interface{}

rule_set block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#rule_set GoogleDataLossPreventionInspectTemplate#rule_set}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes {
	InfoType: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType,
	Dictionary: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary,
	ExclusionType: *string,
	Likelihood: *string,
	Regex: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex,
	StoredType: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.infoType">InfoType</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a></code> | info_type block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.dictionary">Dictionary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a></code> | dictionary block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.exclusionType">ExclusionType</a></code> | <code>*string</code> | If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.likelihood">Likelihood</a></code> | <code>*string</code> | Likelihood to return for this CustomInfoType. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.regex">Regex</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a></code> | regex block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.storedType">StoredType</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a></code> | stored_type block. |

---

##### `InfoType`<sup>Required</sup> <a name="InfoType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.infoType"></a>

```go
InfoType GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a>

info_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#info_type GoogleDataLossPreventionInspectTemplate#info_type}

---

##### `Dictionary`<sup>Optional</sup> <a name="Dictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.dictionary"></a>

```go
Dictionary GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a>

dictionary block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#dictionary GoogleDataLossPreventionInspectTemplate#dictionary}

---

##### `ExclusionType`<sup>Optional</sup> <a name="ExclusionType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.exclusionType"></a>

```go
ExclusionType *string
```

- *Type:* *string

If set to EXCLUSION_TYPE_EXCLUDE this infoType will not cause a finding to be returned.

It still can be used for rules matching. Possible values: ["EXCLUSION_TYPE_EXCLUDE"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#exclusion_type GoogleDataLossPreventionInspectTemplate#exclusion_type}

---

##### `Likelihood`<sup>Optional</sup> <a name="Likelihood" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.likelihood"></a>

```go
Likelihood *string
```

- *Type:* *string

Likelihood to return for this CustomInfoType.

This base value can be altered by a detection rule if the finding meets the criteria
specified by the rule. Default value: "VERY_LIKELY" Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#likelihood GoogleDataLossPreventionInspectTemplate#likelihood}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.regex"></a>

```go
Regex GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a>

regex block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#regex GoogleDataLossPreventionInspectTemplate#regex}

---

##### `StoredType`<sup>Optional</sup> <a name="StoredType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypes.property.storedType"></a>

```go
StoredType GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a>

stored_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#stored_type GoogleDataLossPreventionInspectTemplate#stored_type}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary {
	CloudStoragePath: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath,
	WordList: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.property.cloudStoragePath">CloudStoragePath</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a></code> | cloud_storage_path block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.property.wordList">WordList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a></code> | word_list block. |

---

##### `CloudStoragePath`<sup>Optional</sup> <a name="CloudStoragePath" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.property.cloudStoragePath"></a>

```go
CloudStoragePath GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a>

cloud_storage_path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#cloud_storage_path GoogleDataLossPreventionInspectTemplate#cloud_storage_path}

---

##### `WordList`<sup>Optional</sup> <a name="WordList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary.property.wordList"></a>

```go
WordList GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a>

word_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#word_list GoogleDataLossPreventionInspectTemplate#word_list}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath.property.path">Path</a></code> | <code>*string</code> | A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath.property.path"></a>

```go
Path *string
```

- *Type:* *string

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#path GoogleDataLossPreventionInspectTemplate#path}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList {
	Words: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList.property.words">Words</a></code> | <code>*[]*string</code> | Words or phrases defining the dictionary. |

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList.property.words"></a>

```go
Words *[]*string
```

- *Type:* *[]*string

Words or phrases defining the dictionary.

The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#words GoogleDataLossPreventionInspectTemplate#words}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType.property.name">Name</a></code> | <code>*string</code> | Name of the information type. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names
listed at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#name GoogleDataLossPreventionInspectTemplate#name}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex {
	Pattern: *string,
	GroupIndexes: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.property.pattern">Pattern</a></code> | <code>*string</code> | Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.property.groupIndexes">GroupIndexes</a></code> | <code>*[]*f64</code> | The index of the submatch to extract as findings. |

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#pattern GoogleDataLossPreventionInspectTemplate#pattern}

---

##### `GroupIndexes`<sup>Optional</sup> <a name="GroupIndexes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex.property.groupIndexes"></a>

```go
GroupIndexes *[]*f64
```

- *Type:* *[]*f64

The index of the submatch to extract as findings.

When not specified, the entire match is returned. No more than 3 may be included.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#group_indexes GoogleDataLossPreventionInspectTemplate#group_indexes}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType.property.name">Name</a></code> | <code>*string</code> | Resource name of the requested StoredInfoType, for example 'organizations/433245324/storedInfoTypes/432452342' or 'projects/project-id/storedInfoTypes/432452342'. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType.property.name"></a>

```go
Name *string
```

- *Type:* *string

Resource name of the requested StoredInfoType, for example 'organizations/433245324/storedInfoTypes/432452342' or 'projects/project-id/storedInfoTypes/432452342'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#name GoogleDataLossPreventionInspectTemplate#name}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypes <a name="GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypes {
	Name: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypes.property.name">Name</a></code> | <code>*string</code> | Name of the information type. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypes.property.version">Version</a></code> | <code>*string</code> | Version of the information type to use. By default, the version is set to stable. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#name GoogleDataLossPreventionInspectTemplate#name}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypes.property.version"></a>

```go
Version *string
```

- *Type:* *string

Version of the information type to use. By default, the version is set to stable.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#version GoogleDataLossPreventionInspectTemplate#version}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigLimits <a name="GoogleDataLossPreventionInspectTemplateInspectConfigLimits" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits {
	MaxFindingsPerItem: *f64,
	MaxFindingsPerRequest: *f64,
	MaxFindingsPerInfoType: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerItem">MaxFindingsPerItem</a></code> | <code>*f64</code> | Max number of findings that will be returned for each item scanned. The maximum returned is 2000. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerRequest">MaxFindingsPerRequest</a></code> | <code>*f64</code> | Max number of findings that will be returned per request/job. The maximum returned is 2000. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerInfoType">MaxFindingsPerInfoType</a></code> | <code>interface{}</code> | max_findings_per_info_type block. |

---

##### `MaxFindingsPerItem`<sup>Required</sup> <a name="MaxFindingsPerItem" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerItem"></a>

```go
MaxFindingsPerItem *f64
```

- *Type:* *f64

Max number of findings that will be returned for each item scanned. The maximum returned is 2000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#max_findings_per_item GoogleDataLossPreventionInspectTemplate#max_findings_per_item}

---

##### `MaxFindingsPerRequest`<sup>Required</sup> <a name="MaxFindingsPerRequest" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerRequest"></a>

```go
MaxFindingsPerRequest *f64
```

- *Type:* *f64

Max number of findings that will be returned per request/job. The maximum returned is 2000.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#max_findings_per_request GoogleDataLossPreventionInspectTemplate#max_findings_per_request}

---

##### `MaxFindingsPerInfoType`<sup>Optional</sup> <a name="MaxFindingsPerInfoType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits.property.maxFindingsPerInfoType"></a>

```go
MaxFindingsPerInfoType interface{}
```

- *Type:* interface{}

max_findings_per_info_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#max_findings_per_info_type GoogleDataLossPreventionInspectTemplate#max_findings_per_info_type}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType <a name="GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType {
	InfoType: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType,
	MaxFindings: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.property.infoType">InfoType</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a></code> | info_type block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.property.maxFindings">MaxFindings</a></code> | <code>*f64</code> | Max findings limit for the given infoType. |

---

##### `InfoType`<sup>Required</sup> <a name="InfoType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.property.infoType"></a>

```go
InfoType GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a>

info_type block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#info_type GoogleDataLossPreventionInspectTemplate#info_type}

---

##### `MaxFindings`<sup>Required</sup> <a name="MaxFindings" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoType.property.maxFindings"></a>

```go
MaxFindings *f64
```

- *Type:* *f64

Max findings limit for the given infoType.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#max_findings GoogleDataLossPreventionInspectTemplate#max_findings}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType <a name="GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType.property.name">Name</a></code> | <code>*string</code> | Name of the information type. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#name GoogleDataLossPreventionInspectTemplate#name}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSet <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSet"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSet.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSet {
	InfoTypes: interface{},
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSet.property.infoTypes">InfoTypes</a></code> | <code>interface{}</code> | info_types block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSet.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `InfoTypes`<sup>Required</sup> <a name="InfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSet.property.infoTypes"></a>

```go
InfoTypes interface{}
```

- *Type:* interface{}

info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#info_types GoogleDataLossPreventionInspectTemplate#info_types}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSet.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#rules GoogleDataLossPreventionInspectTemplate#rules}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes.property.name">Name</a></code> | <code>*string</code> | Name of the information type. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#name GoogleDataLossPreventionInspectTemplate#name}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRules <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRules" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRules {
	ExclusionRule: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule,
	HotwordRule: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRules.property.exclusionRule">ExclusionRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a></code> | exclusion_rule block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRules.property.hotwordRule">HotwordRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a></code> | hotword_rule block. |

---

##### `ExclusionRule`<sup>Optional</sup> <a name="ExclusionRule" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRules.property.exclusionRule"></a>

```go
ExclusionRule GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a>

exclusion_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#exclusion_rule GoogleDataLossPreventionInspectTemplate#exclusion_rule}

---

##### `HotwordRule`<sup>Optional</sup> <a name="HotwordRule" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRules.property.hotwordRule"></a>

```go
HotwordRule GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a>

hotword_rule block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#hotword_rule GoogleDataLossPreventionInspectTemplate#hotword_rule}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule {
	MatchingType: *string,
	Dictionary: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary,
	ExcludeInfoTypes: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes,
	Regex: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.matchingType">MatchingType</a></code> | <code>*string</code> | How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType Possible values: ["MATCHING_TYPE_FULL_MATCH", "MATCHING_TYPE_PARTIAL_MATCH", "MATCHING_TYPE_INVERSE_MATCH"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.dictionary">Dictionary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a></code> | dictionary block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.excludeInfoTypes">ExcludeInfoTypes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a></code> | exclude_info_types block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.regex">Regex</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a></code> | regex block. |

---

##### `MatchingType`<sup>Required</sup> <a name="MatchingType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.matchingType"></a>

```go
MatchingType *string
```

- *Type:* *string

How the rule is applied. See the documentation for more information: https://cloud.google.com/dlp/docs/reference/rest/v2/InspectConfig#MatchingType Possible values: ["MATCHING_TYPE_FULL_MATCH", "MATCHING_TYPE_PARTIAL_MATCH", "MATCHING_TYPE_INVERSE_MATCH"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#matching_type GoogleDataLossPreventionInspectTemplate#matching_type}

---

##### `Dictionary`<sup>Optional</sup> <a name="Dictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.dictionary"></a>

```go
Dictionary GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a>

dictionary block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#dictionary GoogleDataLossPreventionInspectTemplate#dictionary}

---

##### `ExcludeInfoTypes`<sup>Optional</sup> <a name="ExcludeInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.excludeInfoTypes"></a>

```go
ExcludeInfoTypes GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a>

exclude_info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#exclude_info_types GoogleDataLossPreventionInspectTemplate#exclude_info_types}

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule.property.regex"></a>

```go
Regex GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a>

regex block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#regex GoogleDataLossPreventionInspectTemplate#regex}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary {
	CloudStoragePath: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath,
	WordList: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.property.cloudStoragePath">CloudStoragePath</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a></code> | cloud_storage_path block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.property.wordList">WordList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a></code> | word_list block. |

---

##### `CloudStoragePath`<sup>Optional</sup> <a name="CloudStoragePath" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.property.cloudStoragePath"></a>

```go
CloudStoragePath GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a>

cloud_storage_path block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#cloud_storage_path GoogleDataLossPreventionInspectTemplate#cloud_storage_path}

---

##### `WordList`<sup>Optional</sup> <a name="WordList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary.property.wordList"></a>

```go
WordList GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a>

word_list block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#word_list GoogleDataLossPreventionInspectTemplate#word_list}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath {
	Path: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath.property.path">Path</a></code> | <code>*string</code> | A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'. |

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath.property.path"></a>

```go
Path *string
```

- *Type:* *string

A url representing a file or path (no wildcards) in Cloud Storage. Example: 'gs://[BUCKET_NAME]/dictionary.txt'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#path GoogleDataLossPreventionInspectTemplate#path}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList {
	Words: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList.property.words">Words</a></code> | <code>*[]*string</code> | Words or phrases defining the dictionary. |

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList.property.words"></a>

```go
Words *[]*string
```

- *Type:* *[]*string

Words or phrases defining the dictionary.

The dictionary must contain at least one
phrase and every phrase must contain at least 2 characters that are letters or digits.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#words GoogleDataLossPreventionInspectTemplate#words}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes {
	InfoTypes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes.property.infoTypes">InfoTypes</a></code> | <code>interface{}</code> | info_types block. |

---

##### `InfoTypes`<sup>Required</sup> <a name="InfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes.property.infoTypes"></a>

```go
InfoTypes interface{}
```

- *Type:* interface{}

info_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#info_types GoogleDataLossPreventionInspectTemplate#info_types}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes {
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes.property.name">Name</a></code> | <code>*string</code> | Name of the information type. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypes.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the information type.

Either a name of your choosing when creating a CustomInfoType, or one of the names listed
at https://cloud.google.com/dlp/docs/infotypes-reference when specifying a built-in type.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#name GoogleDataLossPreventionInspectTemplate#name}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex {
	Pattern: *string,
	GroupIndexes: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.property.pattern">Pattern</a></code> | <code>*string</code> | Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.property.groupIndexes">GroupIndexes</a></code> | <code>*[]*f64</code> | The index of the submatch to extract as findings. |

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#pattern GoogleDataLossPreventionInspectTemplate#pattern}

---

##### `GroupIndexes`<sup>Optional</sup> <a name="GroupIndexes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex.property.groupIndexes"></a>

```go
GroupIndexes *[]*f64
```

- *Type:* *[]*f64

The index of the submatch to extract as findings.

When not specified, the entire match is returned. No more than 3 may be included.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#group_indexes GoogleDataLossPreventionInspectTemplate#group_indexes}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule {
	HotwordRegex: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex,
	LikelihoodAdjustment: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment,
	Proximity: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.hotwordRegex">HotwordRegex</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a></code> | hotword_regex block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.likelihoodAdjustment">LikelihoodAdjustment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a></code> | likelihood_adjustment block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.proximity">Proximity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a></code> | proximity block. |

---

##### `HotwordRegex`<sup>Required</sup> <a name="HotwordRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.hotwordRegex"></a>

```go
HotwordRegex GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a>

hotword_regex block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#hotword_regex GoogleDataLossPreventionInspectTemplate#hotword_regex}

---

##### `LikelihoodAdjustment`<sup>Required</sup> <a name="LikelihoodAdjustment" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.likelihoodAdjustment"></a>

```go
LikelihoodAdjustment GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a>

likelihood_adjustment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#likelihood_adjustment GoogleDataLossPreventionInspectTemplate#likelihood_adjustment}

---

##### `Proximity`<sup>Required</sup> <a name="Proximity" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule.property.proximity"></a>

```go
Proximity GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a>

proximity block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#proximity GoogleDataLossPreventionInspectTemplate#proximity}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex {
	Pattern: *string,
	GroupIndexes: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.property.pattern">Pattern</a></code> | <code>*string</code> | Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.property.groupIndexes">GroupIndexes</a></code> | <code>*[]*f64</code> | The index of the submatch to extract as findings. |

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.property.pattern"></a>

```go
Pattern *string
```

- *Type:* *string

Pattern defining the regular expression. Its syntax (https://github.com/google/re2/wiki/Syntax) can be found under the google/re2 repository on GitHub.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#pattern GoogleDataLossPreventionInspectTemplate#pattern}

---

##### `GroupIndexes`<sup>Optional</sup> <a name="GroupIndexes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex.property.groupIndexes"></a>

```go
GroupIndexes *[]*f64
```

- *Type:* *[]*f64

The index of the submatch to extract as findings.

When not specified,
the entire match is returned. No more than 3 may be included.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#group_indexes GoogleDataLossPreventionInspectTemplate#group_indexes}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment {
	FixedLikelihood: *string,
	RelativeLikelihood: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.property.fixedLikelihood">FixedLikelihood</a></code> | <code>*string</code> | Set the likelihood of a finding to a fixed value. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.property.relativeLikelihood">RelativeLikelihood</a></code> | <code>*f64</code> | Increase or decrease the likelihood by the specified number of levels. |

---

##### `FixedLikelihood`<sup>Optional</sup> <a name="FixedLikelihood" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.property.fixedLikelihood"></a>

```go
FixedLikelihood *string
```

- *Type:* *string

Set the likelihood of a finding to a fixed value.

Either this or relative_likelihood can be set. Possible values: ["VERY_UNLIKELY", "UNLIKELY", "POSSIBLE", "LIKELY", "VERY_LIKELY"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#fixed_likelihood GoogleDataLossPreventionInspectTemplate#fixed_likelihood}

---

##### `RelativeLikelihood`<sup>Optional</sup> <a name="RelativeLikelihood" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment.property.relativeLikelihood"></a>

```go
RelativeLikelihood *f64
```

- *Type:* *f64

Increase or decrease the likelihood by the specified number of levels.

For example,
if a finding would be POSSIBLE without the detection rule and relativeLikelihood is 1,
then it is upgraded to LIKELY, while a value of -1 would downgrade it to UNLIKELY.
Likelihood may never drop below VERY_UNLIKELY or exceed VERY_LIKELY, so applying an
adjustment of 1 followed by an adjustment of -1 when base likelihood is VERY_LIKELY
will result in a final likelihood of LIKELY. Either this or fixed_likelihood can be set.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#relative_likelihood GoogleDataLossPreventionInspectTemplate#relative_likelihood}

---

### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity {
	WindowAfter: *f64,
	WindowBefore: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.property.windowAfter">WindowAfter</a></code> | <code>*f64</code> | Number of characters after the finding to consider. Either this or window_before must be specified. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.property.windowBefore">WindowBefore</a></code> | <code>*f64</code> | Number of characters before the finding to consider. Either this or window_after must be specified. |

---

##### `WindowAfter`<sup>Optional</sup> <a name="WindowAfter" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.property.windowAfter"></a>

```go
WindowAfter *f64
```

- *Type:* *f64

Number of characters after the finding to consider. Either this or window_before must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#window_after GoogleDataLossPreventionInspectTemplate#window_after}

---

##### `WindowBefore`<sup>Optional</sup> <a name="WindowBefore" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity.property.windowBefore"></a>

```go
WindowBefore *f64
```

- *Type:* *f64

Number of characters before the finding to consider. Either this or window_after must be specified.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#window_before GoogleDataLossPreventionInspectTemplate#window_before}

---

### GoogleDataLossPreventionInspectTemplateTimeouts <a name="GoogleDataLossPreventionInspectTemplateTimeouts" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

&googledatalosspreventioninspecttemplate.GoogleDataLossPreventionInspectTemplateTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#create GoogleDataLossPreventionInspectTemplate#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#delete GoogleDataLossPreventionInspectTemplate#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#update GoogleDataLossPreventionInspectTemplate#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#create GoogleDataLossPreventionInspectTemplate#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#delete GoogleDataLossPreventionInspectTemplate#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_data_loss_prevention_inspect_template#update GoogleDataLossPreventionInspectTemplate#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putCloudStoragePath">PutCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putWordList">PutWordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resetCloudStoragePath">ResetCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resetWordList">ResetWordList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudStoragePath` <a name="PutCloudStoragePath" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putCloudStoragePath"></a>

```go
func PutCloudStoragePath(value GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putCloudStoragePath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a>

---

##### `PutWordList` <a name="PutWordList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putWordList"></a>

```go
func PutWordList(value GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.putWordList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a>

---

##### `ResetCloudStoragePath` <a name="ResetCloudStoragePath" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resetCloudStoragePath"></a>

```go
func ResetCloudStoragePath()
```

##### `ResetWordList` <a name="ResetWordList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.resetWordList"></a>

```go
func ResetWordList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.cloudStoragePath">CloudStoragePath</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.wordList">WordList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.cloudStoragePathInput">CloudStoragePathInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.wordListInput">WordListInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudStoragePath`<sup>Required</sup> <a name="CloudStoragePath" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.cloudStoragePath"></a>

```go
func CloudStoragePath() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePathOutputReference</a>

---

##### `WordList`<sup>Required</sup> <a name="WordList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.wordList"></a>

```go
func WordList() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference</a>

---

##### `CloudStoragePathInput`<sup>Optional</sup> <a name="CloudStoragePathInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.cloudStoragePathInput"></a>

```go
func CloudStoragePathInput() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryCloudStoragePath</a>

---

##### `WordListInput`<sup>Optional</sup> <a name="WordListInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.wordListInput"></a>

```go
func WordListInput() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.wordsInput">WordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.words">Words</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WordsInput`<sup>Optional</sup> <a name="WordsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.wordsInput"></a>

```go
func WordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.words"></a>

```go
func Words() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordListOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryWordList</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.get"></a>

```go
func Get(index *f64) GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putDictionary">PutDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putInfoType">PutInfoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putRegex">PutRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putStoredType">PutStoredType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetDictionary">ResetDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetExclusionType">ResetExclusionType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetLikelihood">ResetLikelihood</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetStoredType">ResetStoredType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDictionary` <a name="PutDictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putDictionary"></a>

```go
func PutDictionary(value GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putDictionary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a>

---

##### `PutInfoType` <a name="PutInfoType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putInfoType"></a>

```go
func PutInfoType(value GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putInfoType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a>

---

##### `PutRegex` <a name="PutRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putRegex"></a>

```go
func PutRegex(value GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putRegex.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a>

---

##### `PutStoredType` <a name="PutStoredType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putStoredType"></a>

```go
func PutStoredType(value GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.putStoredType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a>

---

##### `ResetDictionary` <a name="ResetDictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetDictionary"></a>

```go
func ResetDictionary()
```

##### `ResetExclusionType` <a name="ResetExclusionType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetExclusionType"></a>

```go
func ResetExclusionType()
```

##### `ResetLikelihood` <a name="ResetLikelihood" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetLikelihood"></a>

```go
func ResetLikelihood()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetRegex"></a>

```go
func ResetRegex()
```

##### `ResetStoredType` <a name="ResetStoredType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.resetStoredType"></a>

```go
func ResetStoredType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.dictionary">Dictionary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.infoType">InfoType</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.regex">Regex</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.storedType">StoredType</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.dictionaryInput">DictionaryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.exclusionTypeInput">ExclusionTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.infoTypeInput">InfoTypeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.likelihoodInput">LikelihoodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.regexInput">RegexInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.storedTypeInput">StoredTypeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.exclusionType">ExclusionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.likelihood">Likelihood</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dictionary`<sup>Required</sup> <a name="Dictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.dictionary"></a>

```go
func Dictionary() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionaryOutputReference</a>

---

##### `InfoType`<sup>Required</sup> <a name="InfoType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.infoType"></a>

```go
func InfoType() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoTypeOutputReference</a>

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.regex"></a>

```go
func Regex() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference</a>

---

##### `StoredType`<sup>Required</sup> <a name="StoredType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.storedType"></a>

```go
func StoredType() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference</a>

---

##### `DictionaryInput`<sup>Optional</sup> <a name="DictionaryInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.dictionaryInput"></a>

```go
func DictionaryInput() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesDictionary</a>

---

##### `ExclusionTypeInput`<sup>Optional</sup> <a name="ExclusionTypeInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.exclusionTypeInput"></a>

```go
func ExclusionTypeInput() *string
```

- *Type:* *string

---

##### `InfoTypeInput`<sup>Optional</sup> <a name="InfoTypeInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.infoTypeInput"></a>

```go
func InfoTypeInput() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesInfoType</a>

---

##### `LikelihoodInput`<sup>Optional</sup> <a name="LikelihoodInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.likelihoodInput"></a>

```go
func LikelihoodInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.regexInput"></a>

```go
func RegexInput() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a>

---

##### `StoredTypeInput`<sup>Optional</sup> <a name="StoredTypeInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.storedTypeInput"></a>

```go
func StoredTypeInput() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a>

---

##### `ExclusionType`<sup>Required</sup> <a name="ExclusionType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.exclusionType"></a>

```go
func ExclusionType() *string
```

- *Type:* *string

---

##### `Likelihood`<sup>Required</sup> <a name="Likelihood" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.likelihood"></a>

```go
func Likelihood() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resetGroupIndexes">ResetGroupIndexes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupIndexes` <a name="ResetGroupIndexes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.resetGroupIndexes"></a>

```go
func ResetGroupIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.groupIndexesInput">GroupIndexesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.groupIndexes">GroupIndexes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupIndexesInput`<sup>Optional</sup> <a name="GroupIndexesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.groupIndexesInput"></a>

```go
func GroupIndexesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `GroupIndexes`<sup>Required</sup> <a name="GroupIndexes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.groupIndexes"></a>

```go
func GroupIndexes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegexOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesRegex</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesStoredType</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList <a name="GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.get"></a>

```go
func Get(index *f64) GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList <a name="GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.get"></a>

```go
func Get(index *f64) GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.putInfoType">PutInfoType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInfoType` <a name="PutInfoType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.putInfoType"></a>

```go
func PutInfoType(value GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.putInfoType.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.infoType">InfoType</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.infoTypeInput">InfoTypeInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.maxFindingsInput">MaxFindingsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.maxFindings">MaxFindings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InfoType`<sup>Required</sup> <a name="InfoType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.infoType"></a>

```go
func InfoType() GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoTypeOutputReference</a>

---

##### `InfoTypeInput`<sup>Optional</sup> <a name="InfoTypeInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.infoTypeInput"></a>

```go
func InfoTypeInput() GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType">GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeInfoType</a>

---

##### `MaxFindingsInput`<sup>Optional</sup> <a name="MaxFindingsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.maxFindingsInput"></a>

```go
func MaxFindingsInput() *f64
```

- *Type:* *f64

---

##### `MaxFindings`<sup>Required</sup> <a name="MaxFindings" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.maxFindings"></a>

```go
func MaxFindings() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.putMaxFindingsPerInfoType">PutMaxFindingsPerInfoType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resetMaxFindingsPerInfoType">ResetMaxFindingsPerInfoType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMaxFindingsPerInfoType` <a name="PutMaxFindingsPerInfoType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.putMaxFindingsPerInfoType"></a>

```go
func PutMaxFindingsPerInfoType(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.putMaxFindingsPerInfoType.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetMaxFindingsPerInfoType` <a name="ResetMaxFindingsPerInfoType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.resetMaxFindingsPerInfoType"></a>

```go
func ResetMaxFindingsPerInfoType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerInfoType">MaxFindingsPerInfoType</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList">GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerInfoTypeInput">MaxFindingsPerInfoTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerItemInput">MaxFindingsPerItemInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerRequestInput">MaxFindingsPerRequestInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerItem">MaxFindingsPerItem</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerRequest">MaxFindingsPerRequest</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits">GoogleDataLossPreventionInspectTemplateInspectConfigLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxFindingsPerInfoType`<sup>Required</sup> <a name="MaxFindingsPerInfoType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerInfoType"></a>

```go
func MaxFindingsPerInfoType() GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList">GoogleDataLossPreventionInspectTemplateInspectConfigLimitsMaxFindingsPerInfoTypeList</a>

---

##### `MaxFindingsPerInfoTypeInput`<sup>Optional</sup> <a name="MaxFindingsPerInfoTypeInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerInfoTypeInput"></a>

```go
func MaxFindingsPerInfoTypeInput() interface{}
```

- *Type:* interface{}

---

##### `MaxFindingsPerItemInput`<sup>Optional</sup> <a name="MaxFindingsPerItemInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerItemInput"></a>

```go
func MaxFindingsPerItemInput() *f64
```

- *Type:* *f64

---

##### `MaxFindingsPerRequestInput`<sup>Optional</sup> <a name="MaxFindingsPerRequestInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerRequestInput"></a>

```go
func MaxFindingsPerRequestInput() *f64
```

- *Type:* *f64

---

##### `MaxFindingsPerItem`<sup>Required</sup> <a name="MaxFindingsPerItem" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerItem"></a>

```go
func MaxFindingsPerItem() *f64
```

- *Type:* *f64

---

##### `MaxFindingsPerRequest`<sup>Required</sup> <a name="MaxFindingsPerRequest" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.maxFindingsPerRequest"></a>

```go
func MaxFindingsPerRequest() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigLimits
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits">GoogleDataLossPreventionInspectTemplateInspectConfigLimits</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.putCustomInfoTypes">PutCustomInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.putInfoTypes">PutInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.putRuleSet">PutRuleSet</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetContentOptions">ResetContentOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetCustomInfoTypes">ResetCustomInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetExcludeInfoTypes">ResetExcludeInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetIncludeQuote">ResetIncludeQuote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetInfoTypes">ResetInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetMinLikelihood">ResetMinLikelihood</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetRuleSet">ResetRuleSet</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomInfoTypes` <a name="PutCustomInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.putCustomInfoTypes"></a>

```go
func PutCustomInfoTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.putCustomInfoTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInfoTypes` <a name="PutInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.putInfoTypes"></a>

```go
func PutInfoTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.putInfoTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutLimits` <a name="PutLimits" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.putLimits"></a>

```go
func PutLimits(value GoogleDataLossPreventionInspectTemplateInspectConfigLimits)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits">GoogleDataLossPreventionInspectTemplateInspectConfigLimits</a>

---

##### `PutRuleSet` <a name="PutRuleSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.putRuleSet"></a>

```go
func PutRuleSet(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.putRuleSet.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContentOptions` <a name="ResetContentOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetContentOptions"></a>

```go
func ResetContentOptions()
```

##### `ResetCustomInfoTypes` <a name="ResetCustomInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetCustomInfoTypes"></a>

```go
func ResetCustomInfoTypes()
```

##### `ResetExcludeInfoTypes` <a name="ResetExcludeInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetExcludeInfoTypes"></a>

```go
func ResetExcludeInfoTypes()
```

##### `ResetIncludeQuote` <a name="ResetIncludeQuote" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetIncludeQuote"></a>

```go
func ResetIncludeQuote()
```

##### `ResetInfoTypes` <a name="ResetInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetInfoTypes"></a>

```go
func ResetInfoTypes()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetLimits"></a>

```go
func ResetLimits()
```

##### `ResetMinLikelihood` <a name="ResetMinLikelihood" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetMinLikelihood"></a>

```go
func ResetMinLikelihood()
```

##### `ResetRuleSet` <a name="ResetRuleSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.resetRuleSet"></a>

```go
func ResetRuleSet()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.customInfoTypes">CustomInfoTypes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.infoTypes">InfoTypes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList">GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.limits">Limits</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.ruleSet">RuleSet</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.contentOptionsInput">ContentOptionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.customInfoTypesInput">CustomInfoTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.excludeInfoTypesInput">ExcludeInfoTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.includeQuoteInput">IncludeQuoteInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.infoTypesInput">InfoTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.limitsInput">LimitsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits">GoogleDataLossPreventionInspectTemplateInspectConfigLimits</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.minLikelihoodInput">MinLikelihoodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.ruleSetInput">RuleSetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.contentOptions">ContentOptions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.excludeInfoTypes">ExcludeInfoTypes</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.includeQuote">IncludeQuote</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.minLikelihood">MinLikelihood</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig">GoogleDataLossPreventionInspectTemplateInspectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomInfoTypes`<sup>Required</sup> <a name="CustomInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.customInfoTypes"></a>

```go
func CustomInfoTypes() GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList">GoogleDataLossPreventionInspectTemplateInspectConfigCustomInfoTypesList</a>

---

##### `InfoTypes`<sup>Required</sup> <a name="InfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.infoTypes"></a>

```go
func InfoTypes() GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList">GoogleDataLossPreventionInspectTemplateInspectConfigInfoTypesList</a>

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.limits"></a>

```go
func Limits() GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigLimitsOutputReference</a>

---

##### `RuleSet`<sup>Required</sup> <a name="RuleSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.ruleSet"></a>

```go
func RuleSet() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList</a>

---

##### `ContentOptionsInput`<sup>Optional</sup> <a name="ContentOptionsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.contentOptionsInput"></a>

```go
func ContentOptionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomInfoTypesInput`<sup>Optional</sup> <a name="CustomInfoTypesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.customInfoTypesInput"></a>

```go
func CustomInfoTypesInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludeInfoTypesInput`<sup>Optional</sup> <a name="ExcludeInfoTypesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.excludeInfoTypesInput"></a>

```go
func ExcludeInfoTypesInput() interface{}
```

- *Type:* interface{}

---

##### `IncludeQuoteInput`<sup>Optional</sup> <a name="IncludeQuoteInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.includeQuoteInput"></a>

```go
func IncludeQuoteInput() interface{}
```

- *Type:* interface{}

---

##### `InfoTypesInput`<sup>Optional</sup> <a name="InfoTypesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.infoTypesInput"></a>

```go
func InfoTypesInput() interface{}
```

- *Type:* interface{}

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.limitsInput"></a>

```go
func LimitsInput() GoogleDataLossPreventionInspectTemplateInspectConfigLimits
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigLimits">GoogleDataLossPreventionInspectTemplateInspectConfigLimits</a>

---

##### `MinLikelihoodInput`<sup>Optional</sup> <a name="MinLikelihoodInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.minLikelihoodInput"></a>

```go
func MinLikelihoodInput() *string
```

- *Type:* *string

---

##### `RuleSetInput`<sup>Optional</sup> <a name="RuleSetInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.ruleSetInput"></a>

```go
func RuleSetInput() interface{}
```

- *Type:* interface{}

---

##### `ContentOptions`<sup>Required</sup> <a name="ContentOptions" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.contentOptions"></a>

```go
func ContentOptions() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludeInfoTypes`<sup>Required</sup> <a name="ExcludeInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.excludeInfoTypes"></a>

```go
func ExcludeInfoTypes() interface{}
```

- *Type:* interface{}

---

##### `IncludeQuote`<sup>Required</sup> <a name="IncludeQuote" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.includeQuote"></a>

```go
func IncludeQuote() interface{}
```

- *Type:* interface{}

---

##### `MinLikelihood`<sup>Required</sup> <a name="MinLikelihood" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.minLikelihood"></a>

```go
func MinLikelihood() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfig
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfig">GoogleDataLossPreventionInspectTemplateInspectConfig</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.get"></a>

```go
func Get(index *f64) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.get"></a>

```go
func Get(index *f64) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putInfoTypes">PutInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putRules">PutRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInfoTypes` <a name="PutInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putInfoTypes"></a>

```go
func PutInfoTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putInfoTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.infoTypes">InfoTypes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.infoTypesInput">InfoTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InfoTypes`<sup>Required</sup> <a name="InfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.infoTypes"></a>

```go
func InfoTypes() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetInfoTypesList</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.rules"></a>

```go
func Rules() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList</a>

---

##### `InfoTypesInput`<sup>Optional</sup> <a name="InfoTypesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.infoTypesInput"></a>

```go
func InfoTypesInput() interface{}
```

- *Type:* interface{}

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putCloudStoragePath">PutCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putWordList">PutWordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resetCloudStoragePath">ResetCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resetWordList">ResetWordList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCloudStoragePath` <a name="PutCloudStoragePath" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putCloudStoragePath"></a>

```go
func PutCloudStoragePath(value GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putCloudStoragePath.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a>

---

##### `PutWordList` <a name="PutWordList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putWordList"></a>

```go
func PutWordList(value GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.putWordList.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a>

---

##### `ResetCloudStoragePath` <a name="ResetCloudStoragePath" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resetCloudStoragePath"></a>

```go
func ResetCloudStoragePath()
```

##### `ResetWordList` <a name="ResetWordList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.resetWordList"></a>

```go
func ResetWordList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.cloudStoragePath">CloudStoragePath</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.wordList">WordList</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.cloudStoragePathInput">CloudStoragePathInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.wordListInput">WordListInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CloudStoragePath`<sup>Required</sup> <a name="CloudStoragePath" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.cloudStoragePath"></a>

```go
func CloudStoragePath() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePathOutputReference</a>

---

##### `WordList`<sup>Required</sup> <a name="WordList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.wordList"></a>

```go
func WordList() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference</a>

---

##### `CloudStoragePathInput`<sup>Optional</sup> <a name="CloudStoragePathInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.cloudStoragePathInput"></a>

```go
func CloudStoragePathInput() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryCloudStoragePath</a>

---

##### `WordListInput`<sup>Optional</sup> <a name="WordListInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.wordListInput"></a>

```go
func WordListInput() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.wordsInput">WordsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.words">Words</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WordsInput`<sup>Optional</sup> <a name="WordsInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.wordsInput"></a>

```go
func WordsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Words`<sup>Required</sup> <a name="Words" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.words"></a>

```go
func Words() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordListOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryWordList</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.get"></a>

```go
func Get(index *f64) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.putInfoTypes">PutInfoTypes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInfoTypes` <a name="PutInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.putInfoTypes"></a>

```go
func PutInfoTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.putInfoTypes.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.infoTypes">InfoTypes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.infoTypesInput">InfoTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InfoTypes`<sup>Required</sup> <a name="InfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.infoTypes"></a>

```go
func InfoTypes() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesInfoTypesList</a>

---

##### `InfoTypesInput`<sup>Optional</sup> <a name="InfoTypesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.infoTypesInput"></a>

```go
func InfoTypesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putDictionary">PutDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putExcludeInfoTypes">PutExcludeInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putRegex">PutRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetDictionary">ResetDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetExcludeInfoTypes">ResetExcludeInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDictionary` <a name="PutDictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putDictionary"></a>

```go
func PutDictionary(value GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putDictionary.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a>

---

##### `PutExcludeInfoTypes` <a name="PutExcludeInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putExcludeInfoTypes"></a>

```go
func PutExcludeInfoTypes(value GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putExcludeInfoTypes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a>

---

##### `PutRegex` <a name="PutRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putRegex"></a>

```go
func PutRegex(value GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.putRegex.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a>

---

##### `ResetDictionary` <a name="ResetDictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetDictionary"></a>

```go
func ResetDictionary()
```

##### `ResetExcludeInfoTypes` <a name="ResetExcludeInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetExcludeInfoTypes"></a>

```go
func ResetExcludeInfoTypes()
```

##### `ResetRegex` <a name="ResetRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.dictionary">Dictionary</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.excludeInfoTypes">ExcludeInfoTypes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.regex">Regex</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.dictionaryInput">DictionaryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.excludeInfoTypesInput">ExcludeInfoTypesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.matchingTypeInput">MatchingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.regexInput">RegexInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.matchingType">MatchingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dictionary`<sup>Required</sup> <a name="Dictionary" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.dictionary"></a>

```go
func Dictionary() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionaryOutputReference</a>

---

##### `ExcludeInfoTypes`<sup>Required</sup> <a name="ExcludeInfoTypes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.excludeInfoTypes"></a>

```go
func ExcludeInfoTypes() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypesOutputReference</a>

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.regex"></a>

```go
func Regex() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference</a>

---

##### `DictionaryInput`<sup>Optional</sup> <a name="DictionaryInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.dictionaryInput"></a>

```go
func DictionaryInput() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleDictionary</a>

---

##### `ExcludeInfoTypesInput`<sup>Optional</sup> <a name="ExcludeInfoTypesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.excludeInfoTypesInput"></a>

```go
func ExcludeInfoTypesInput() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleExcludeInfoTypes</a>

---

##### `MatchingTypeInput`<sup>Optional</sup> <a name="MatchingTypeInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.matchingTypeInput"></a>

```go
func MatchingTypeInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.regexInput"></a>

```go
func RegexInput() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a>

---

##### `MatchingType`<sup>Required</sup> <a name="MatchingType" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.matchingType"></a>

```go
func MatchingType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resetGroupIndexes">ResetGroupIndexes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupIndexes` <a name="ResetGroupIndexes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.resetGroupIndexes"></a>

```go
func ResetGroupIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.groupIndexesInput">GroupIndexesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.groupIndexes">GroupIndexes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupIndexesInput`<sup>Optional</sup> <a name="GroupIndexesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.groupIndexesInput"></a>

```go
func GroupIndexesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `GroupIndexes`<sup>Required</sup> <a name="GroupIndexes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.groupIndexes"></a>

```go
func GroupIndexes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegexOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleRegex</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resetGroupIndexes">ResetGroupIndexes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetGroupIndexes` <a name="ResetGroupIndexes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.resetGroupIndexes"></a>

```go
func ResetGroupIndexes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.groupIndexesInput">GroupIndexesInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.patternInput">PatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.groupIndexes">GroupIndexes</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.pattern">Pattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GroupIndexesInput`<sup>Optional</sup> <a name="GroupIndexesInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.groupIndexesInput"></a>

```go
func GroupIndexesInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `PatternInput`<sup>Optional</sup> <a name="PatternInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.patternInput"></a>

```go
func PatternInput() *string
```

- *Type:* *string

---

##### `GroupIndexes`<sup>Required</sup> <a name="GroupIndexes" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.groupIndexes"></a>

```go
func GroupIndexes() *[]*f64
```

- *Type:* *[]*f64

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.pattern"></a>

```go
func Pattern() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resetFixedLikelihood">ResetFixedLikelihood</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resetRelativeLikelihood">ResetRelativeLikelihood</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFixedLikelihood` <a name="ResetFixedLikelihood" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resetFixedLikelihood"></a>

```go
func ResetFixedLikelihood()
```

##### `ResetRelativeLikelihood` <a name="ResetRelativeLikelihood" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.resetRelativeLikelihood"></a>

```go
func ResetRelativeLikelihood()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fixedLikelihoodInput">FixedLikelihoodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.relativeLikelihoodInput">RelativeLikelihoodInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fixedLikelihood">FixedLikelihood</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.relativeLikelihood">RelativeLikelihood</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FixedLikelihoodInput`<sup>Optional</sup> <a name="FixedLikelihoodInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fixedLikelihoodInput"></a>

```go
func FixedLikelihoodInput() *string
```

- *Type:* *string

---

##### `RelativeLikelihoodInput`<sup>Optional</sup> <a name="RelativeLikelihoodInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.relativeLikelihoodInput"></a>

```go
func RelativeLikelihoodInput() *f64
```

- *Type:* *f64

---

##### `FixedLikelihood`<sup>Required</sup> <a name="FixedLikelihood" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.fixedLikelihood"></a>

```go
func FixedLikelihood() *string
```

- *Type:* *string

---

##### `RelativeLikelihood`<sup>Required</sup> <a name="RelativeLikelihood" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.relativeLikelihood"></a>

```go
func RelativeLikelihood() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putHotwordRegex">PutHotwordRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putLikelihoodAdjustment">PutLikelihoodAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putProximity">PutProximity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHotwordRegex` <a name="PutHotwordRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putHotwordRegex"></a>

```go
func PutHotwordRegex(value GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putHotwordRegex.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a>

---

##### `PutLikelihoodAdjustment` <a name="PutLikelihoodAdjustment" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putLikelihoodAdjustment"></a>

```go
func PutLikelihoodAdjustment(value GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putLikelihoodAdjustment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a>

---

##### `PutProximity` <a name="PutProximity" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putProximity"></a>

```go
func PutProximity(value GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.putProximity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.hotwordRegex">HotwordRegex</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.likelihoodAdjustment">LikelihoodAdjustment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.proximity">Proximity</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.hotwordRegexInput">HotwordRegexInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.likelihoodAdjustmentInput">LikelihoodAdjustmentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.proximityInput">ProximityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HotwordRegex`<sup>Required</sup> <a name="HotwordRegex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.hotwordRegex"></a>

```go
func HotwordRegex() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegexOutputReference</a>

---

##### `LikelihoodAdjustment`<sup>Required</sup> <a name="LikelihoodAdjustment" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.likelihoodAdjustment"></a>

```go
func LikelihoodAdjustment() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustmentOutputReference</a>

---

##### `Proximity`<sup>Required</sup> <a name="Proximity" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.proximity"></a>

```go
func Proximity() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference</a>

---

##### `HotwordRegexInput`<sup>Optional</sup> <a name="HotwordRegexInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.hotwordRegexInput"></a>

```go
func HotwordRegexInput() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleHotwordRegex</a>

---

##### `LikelihoodAdjustmentInput`<sup>Optional</sup> <a name="LikelihoodAdjustmentInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.likelihoodAdjustmentInput"></a>

```go
func LikelihoodAdjustmentInput() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleLikelihoodAdjustment</a>

---

##### `ProximityInput`<sup>Optional</sup> <a name="ProximityInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.proximityInput"></a>

```go
func ProximityInput() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resetWindowAfter">ResetWindowAfter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resetWindowBefore">ResetWindowBefore</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWindowAfter` <a name="ResetWindowAfter" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resetWindowAfter"></a>

```go
func ResetWindowAfter()
```

##### `ResetWindowBefore` <a name="ResetWindowBefore" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.resetWindowBefore"></a>

```go
func ResetWindowBefore()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowAfterInput">WindowAfterInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowBeforeInput">WindowBeforeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowAfter">WindowAfter</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowBefore">WindowBefore</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WindowAfterInput`<sup>Optional</sup> <a name="WindowAfterInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowAfterInput"></a>

```go
func WindowAfterInput() *f64
```

- *Type:* *f64

---

##### `WindowBeforeInput`<sup>Optional</sup> <a name="WindowBeforeInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowBeforeInput"></a>

```go
func WindowBeforeInput() *f64
```

- *Type:* *f64

---

##### `WindowAfter`<sup>Required</sup> <a name="WindowAfter" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowAfter"></a>

```go
func WindowAfter() *f64
```

- *Type:* *f64

---

##### `WindowBefore`<sup>Required</sup> <a name="WindowBefore" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.windowBefore"></a>

```go
func WindowBefore() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximityOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleProximity</a>

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.get"></a>

```go
func Get(index *f64) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference <a name="GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putExclusionRule">PutExclusionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putHotwordRule">PutHotwordRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resetExclusionRule">ResetExclusionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resetHotwordRule">ResetHotwordRule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExclusionRule` <a name="PutExclusionRule" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putExclusionRule"></a>

```go
func PutExclusionRule(value GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putExclusionRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a>

---

##### `PutHotwordRule` <a name="PutHotwordRule" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putHotwordRule"></a>

```go
func PutHotwordRule(value GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.putHotwordRule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a>

---

##### `ResetExclusionRule` <a name="ResetExclusionRule" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resetExclusionRule"></a>

```go
func ResetExclusionRule()
```

##### `ResetHotwordRule` <a name="ResetHotwordRule" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.resetHotwordRule"></a>

```go
func ResetHotwordRule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.exclusionRule">ExclusionRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.hotwordRule">HotwordRule</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.exclusionRuleInput">ExclusionRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.hotwordRuleInput">HotwordRuleInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExclusionRule`<sup>Required</sup> <a name="ExclusionRule" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.exclusionRule"></a>

```go
func ExclusionRule() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRuleOutputReference</a>

---

##### `HotwordRule`<sup>Required</sup> <a name="HotwordRule" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.hotwordRule"></a>

```go
func HotwordRule() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRuleOutputReference</a>

---

##### `ExclusionRuleInput`<sup>Optional</sup> <a name="ExclusionRuleInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.exclusionRuleInput"></a>

```go
func ExclusionRuleInput() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesExclusionRule</a>

---

##### `HotwordRuleInput`<sup>Optional</sup> <a name="HotwordRuleInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.hotwordRuleInput"></a>

```go
func HotwordRuleInput() GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule">GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesHotwordRule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateInspectConfigRuleSetRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference <a name="GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/v6/googledatalosspreventioninspecttemplate"

googledatalosspreventioninspecttemplate.NewGoogleDataLossPreventionInspectTemplateTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleDataLossPreventionInspectTemplate.GoogleDataLossPreventionInspectTemplateTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




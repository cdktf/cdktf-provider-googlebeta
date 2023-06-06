# `google_certificate_manager_certificate_map`

Refer to the Terraform Registory for docs: [`google_certificate_manager_certificate_map`](https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map).

# `googleCertificateManagerCertificateMap` Submodule <a name="`googleCertificateManagerCertificateMap` Submodule" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCertificateManagerCertificateMap <a name="GoogleCertificateManagerCertificateMap" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map google_certificate_manager_certificate_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecertificatemanagercertificatemap"

googlecertificatemanagercertificatemap.NewGoogleCertificateManagerCertificateMap(scope Construct, id *string, config GoogleCertificateManagerCertificateMapConfig) GoogleCertificateManagerCertificateMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig">GoogleCertificateManagerCertificateMapConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig">GoogleCertificateManagerCertificateMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.putTimeouts"></a>

```go
func PutTimeouts(value GoogleCertificateManagerCertificateMapTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts">GoogleCertificateManagerCertificateMapTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecertificatemanagercertificatemap"

googlecertificatemanagercertificatemap.GoogleCertificateManagerCertificateMap_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecertificatemanagercertificatemap"

googlecertificatemanagercertificatemap.GoogleCertificateManagerCertificateMap_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecertificatemanagercertificatemap"

googlecertificatemanagercertificatemap.GoogleCertificateManagerCertificateMap_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.gclbTargets">GclbTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList">GoogleCertificateManagerCertificateMapGclbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference">GoogleCertificateManagerCertificateMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `GclbTargets`<sup>Required</sup> <a name="GclbTargets" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.gclbTargets"></a>

```go
func GclbTargets() GoogleCertificateManagerCertificateMapGclbTargetsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList">GoogleCertificateManagerCertificateMapGclbTargetsList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.timeouts"></a>

```go
func Timeouts() GoogleCertificateManagerCertificateMapTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference">GoogleCertificateManagerCertificateMapTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCertificateManagerCertificateMapConfig <a name="GoogleCertificateManagerCertificateMapConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecertificatemanagercertificatemap"

&googlecertificatemanagercertificatemap.GoogleCertificateManagerCertificateMapConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.name">Name</a></code> | <code>*string</code> | A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match the pattern 'projects/*\/locations/*\/certificateMaps/*'. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.description">Description</a></code> | <code>*string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map#id GoogleCertificateManagerCertificateMap#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Set of labels associated with a Certificate Map resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map#project GoogleCertificateManagerCertificateMap#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts">GoogleCertificateManagerCertificateMapTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A user-defined name of the Certificate Map. Certificate Map names must be unique globally and match the pattern 'projects/*\/locations/*\/certificateMaps/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map#name GoogleCertificateManagerCertificateMap#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map#description GoogleCertificateManagerCertificateMap#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map#id GoogleCertificateManagerCertificateMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Set of labels associated with a Certificate Map resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map#labels GoogleCertificateManagerCertificateMap#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map#project GoogleCertificateManagerCertificateMap#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.timeouts"></a>

```go
Timeouts GoogleCertificateManagerCertificateMapTimeouts
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts">GoogleCertificateManagerCertificateMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map#timeouts GoogleCertificateManagerCertificateMap#timeouts}

---

### GoogleCertificateManagerCertificateMapGclbTargets <a name="GoogleCertificateManagerCertificateMapGclbTargets" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargets.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecertificatemanagercertificatemap"

&googlecertificatemanagercertificatemap.GoogleCertificateManagerCertificateMapGclbTargets {

}
```


### GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs <a name="GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecertificatemanagercertificatemap"

&googlecertificatemanagercertificatemap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs {

}
```


### GoogleCertificateManagerCertificateMapTimeouts <a name="GoogleCertificateManagerCertificateMapTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecertificatemanagercertificatemap"

&googlecertificatemanagercertificatemap.GoogleCertificateManagerCertificateMapTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map#create GoogleCertificateManagerCertificateMap#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map#delete GoogleCertificateManagerCertificateMap#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map#update GoogleCertificateManagerCertificateMap#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map#create GoogleCertificateManagerCertificateMap#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map#delete GoogleCertificateManagerCertificateMap#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/4.68.0/docs/resources/google_certificate_manager_certificate_map#update GoogleCertificateManagerCertificateMap#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList <a name="GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecertificatemanagercertificatemap"

googlecertificatemanagercertificatemap.NewGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.get"></a>

```go
func Get(index *f64) GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference <a name="GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecertificatemanagercertificatemap"

googlecertificatemanagercertificatemap.NewGoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ports">Ports</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs">GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ports"></a>

```go
func Ports() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs">GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs</a>

---


### GoogleCertificateManagerCertificateMapGclbTargetsList <a name="GoogleCertificateManagerCertificateMapGclbTargetsList" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecertificatemanagercertificatemap"

googlecertificatemanagercertificatemap.NewGoogleCertificateManagerCertificateMapGclbTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) GoogleCertificateManagerCertificateMapGclbTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.get"></a>

```go
func Get(index *f64) GoogleCertificateManagerCertificateMapGclbTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### GoogleCertificateManagerCertificateMapGclbTargetsOutputReference <a name="GoogleCertificateManagerCertificateMapGclbTargetsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecertificatemanagercertificatemap"

googlecertificatemanagercertificatemap.NewGoogleCertificateManagerCertificateMapGclbTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) GoogleCertificateManagerCertificateMapGclbTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.ipConfigs">IpConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList">GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetHttpsProxy">TargetHttpsProxy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetSslProxy">TargetSslProxy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargets">GoogleCertificateManagerCertificateMapGclbTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpConfigs`<sup>Required</sup> <a name="IpConfigs" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.ipConfigs"></a>

```go
func IpConfigs() GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList">GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList</a>

---

##### `TargetHttpsProxy`<sup>Required</sup> <a name="TargetHttpsProxy" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetHttpsProxy"></a>

```go
func TargetHttpsProxy() *string
```

- *Type:* *string

---

##### `TargetSslProxy`<sup>Required</sup> <a name="TargetSslProxy" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetSslProxy"></a>

```go
func TargetSslProxy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() GoogleCertificateManagerCertificateMapGclbTargets
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargets">GoogleCertificateManagerCertificateMapGclbTargets</a>

---


### GoogleCertificateManagerCertificateMapTimeoutsOutputReference <a name="GoogleCertificateManagerCertificateMapTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-googlebeta-go/googlebeta/googlecertificatemanagercertificatemap"

googlecertificatemanagercertificatemap.NewGoogleCertificateManagerCertificateMapTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GoogleCertificateManagerCertificateMapTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---




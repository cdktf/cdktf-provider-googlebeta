# `googleBigqueryDatapolicyDataPolicy` Submodule <a name="`googleBigqueryDatapolicyDataPolicy` Submodule" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleBigqueryDatapolicyDataPolicy <a name="GoogleBigqueryDatapolicyDataPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy google_bigquery_datapolicy_data_policy}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryDatapolicyDataPolicy(Construct Scope, string Id, GoogleBigqueryDatapolicyDataPolicyConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig">GoogleBigqueryDatapolicyDataPolicyConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig">GoogleBigqueryDatapolicyDataPolicyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putDataMaskingPolicy">PutDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetDataMaskingPolicy">ResetDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDataMaskingPolicy` <a name="PutDataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putDataMaskingPolicy"></a>

```csharp
private void PutDataMaskingPolicy(GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putDataMaskingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleBigqueryDatapolicyDataPolicyTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>

---

##### `ResetDataMaskingPolicy` <a name="ResetDataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetDataMaskingPolicy"></a>

```csharp
private void ResetDataMaskingPolicy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleBigqueryDatapolicyDataPolicy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryDatapolicyDataPolicy.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryDatapolicyDataPolicy.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryDatapolicyDataPolicy.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleBigqueryDatapolicyDataPolicy.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleBigqueryDatapolicyDataPolicy resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleBigqueryDatapolicyDataPolicy to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleBigqueryDatapolicyDataPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleBigqueryDatapolicyDataPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicy">DataMaskingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference">GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicyInput">DataMaskingPolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyIdInput">DataPolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyTypeInput">DataPolicyTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTagInput">PolicyTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyId">DataPolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyType">DataPolicyType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTag">PolicyTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `DataMaskingPolicy`<sup>Required</sup> <a name="DataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicy"></a>

```csharp
public GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference DataMaskingPolicy { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeouts"></a>

```csharp
public GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference">GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference</a>

---

##### `DataMaskingPolicyInput`<sup>Optional</sup> <a name="DataMaskingPolicyInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataMaskingPolicyInput"></a>

```csharp
public GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy DataMaskingPolicyInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---

##### `DataPolicyIdInput`<sup>Optional</sup> <a name="DataPolicyIdInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyIdInput"></a>

```csharp
public string DataPolicyIdInput { get; }
```

- *Type:* string

---

##### `DataPolicyTypeInput`<sup>Optional</sup> <a name="DataPolicyTypeInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyTypeInput"></a>

```csharp
public string DataPolicyTypeInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `PolicyTagInput`<sup>Optional</sup> <a name="PolicyTagInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTagInput"></a>

```csharp
public string PolicyTagInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyId"></a>

```csharp
public string DataPolicyId { get; }
```

- *Type:* string

---

##### `DataPolicyType`<sup>Required</sup> <a name="DataPolicyType" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.dataPolicyType"></a>

```csharp
public string DataPolicyType { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `PolicyTag`<sup>Required</sup> <a name="PolicyTag" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.policyTag"></a>

```csharp
public string PolicyTag { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicy.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleBigqueryDatapolicyDataPolicyConfig <a name="GoogleBigqueryDatapolicyDataPolicyConfig" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryDatapolicyDataPolicyConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DataPolicyId,
    string DataPolicyType,
    string Location,
    string PolicyTag,
    GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy DataMaskingPolicy = null,
    string Id = null,
    string Project = null,
    GoogleBigqueryDatapolicyDataPolicyTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyId">DataPolicyId</a></code> | <code>string</code> | User-assigned (human readable) ID of the data policy that needs to be unique within a project. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyType">DataPolicyType</a></code> | <code>string</code> | The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.location">Location</a></code> | <code>string</code> | The name of the location of the data policy. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.policyTag">PolicyTag</a></code> | <code>string</code> | Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataMaskingPolicy">DataMaskingPolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | data_masking_policy block. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#id GoogleBigqueryDatapolicyDataPolicy#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#project GoogleBigqueryDatapolicyDataPolicy#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DataPolicyId`<sup>Required</sup> <a name="DataPolicyId" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyId"></a>

```csharp
public string DataPolicyId { get; set; }
```

- *Type:* string

User-assigned (human readable) ID of the data policy that needs to be unique within a project.

Used as {dataPolicyId} in part of the resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#data_policy_id GoogleBigqueryDatapolicyDataPolicy#data_policy_id}

---

##### `DataPolicyType`<sup>Required</sup> <a name="DataPolicyType" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataPolicyType"></a>

```csharp
public string DataPolicyType { get; set; }
```

- *Type:* string

The enrollment level of the service. Possible values: ["COLUMN_LEVEL_SECURITY_POLICY", "DATA_MASKING_POLICY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#data_policy_type GoogleBigqueryDatapolicyDataPolicy#data_policy_type}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The name of the location of the data policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#location GoogleBigqueryDatapolicyDataPolicy#location}

---

##### `PolicyTag`<sup>Required</sup> <a name="PolicyTag" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.policyTag"></a>

```csharp
public string PolicyTag { get; set; }
```

- *Type:* string

Policy tag resource name, in the format of projects/{project_number}/locations/{locationId}/taxonomies/{taxonomyId}/policyTags/{policyTag_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#policy_tag GoogleBigqueryDatapolicyDataPolicy#policy_tag}

---

##### `DataMaskingPolicy`<sup>Optional</sup> <a name="DataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.dataMaskingPolicy"></a>

```csharp
public GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy DataMaskingPolicy { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

data_masking_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#data_masking_policy GoogleBigqueryDatapolicyDataPolicy#data_masking_policy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#id GoogleBigqueryDatapolicyDataPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#project GoogleBigqueryDatapolicyDataPolicy#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyConfig.property.timeouts"></a>

```csharp
public GoogleBigqueryDatapolicyDataPolicyTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts">GoogleBigqueryDatapolicyDataPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#timeouts GoogleBigqueryDatapolicyDataPolicy#timeouts}

---

### GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy <a name="GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy {
    string PredefinedExpression = null,
    string Routine = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.predefinedExpression">PredefinedExpression</a></code> | <code>string</code> | The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"]. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.routine">Routine</a></code> | <code>string</code> | The name of the BigQuery routine that contains the custom masking routine, in the format of projects/{projectNumber}/datasets/{dataset_id}/routines/{routine_id}. |

---

##### `PredefinedExpression`<sup>Optional</sup> <a name="PredefinedExpression" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.predefinedExpression"></a>

```csharp
public string PredefinedExpression { get; set; }
```

- *Type:* string

The available masking rules. Learn more here: https://cloud.google.com/bigquery/docs/column-data-masking-intro#masking_options. Possible values: ["SHA256", "ALWAYS_NULL", "DEFAULT_MASKING_VALUE", "LAST_FOUR_CHARACTERS", "FIRST_FOUR_CHARACTERS", "EMAIL_MASK", "DATE_YEAR_MASK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#predefined_expression GoogleBigqueryDatapolicyDataPolicy#predefined_expression}

---

##### `Routine`<sup>Optional</sup> <a name="Routine" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy.property.routine"></a>

```csharp
public string Routine { get; set; }
```

- *Type:* string

The name of the BigQuery routine that contains the custom masking routine, in the format of projects/{projectNumber}/datasets/{dataset_id}/routines/{routine_id}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#routine GoogleBigqueryDatapolicyDataPolicy#routine}

---

### GoogleBigqueryDatapolicyDataPolicyTimeouts <a name="GoogleBigqueryDatapolicyDataPolicyTimeouts" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryDatapolicyDataPolicyTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#create GoogleBigqueryDatapolicyDataPolicy#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#delete GoogleBigqueryDatapolicyDataPolicy#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#update GoogleBigqueryDatapolicyDataPolicy#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#create GoogleBigqueryDatapolicyDataPolicy#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#delete GoogleBigqueryDatapolicyDataPolicy#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_bigquery_datapolicy_data_policy#update GoogleBigqueryDatapolicyDataPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference <a name="GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression">ResetPredefinedExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetRoutine">ResetRoutine</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPredefinedExpression` <a name="ResetPredefinedExpression" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetPredefinedExpression"></a>

```csharp
private void ResetPredefinedExpression()
```

##### `ResetRoutine` <a name="ResetRoutine" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.resetRoutine"></a>

```csharp
private void ResetRoutine()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput">PredefinedExpressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routineInput">RoutineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression">PredefinedExpression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routine">Routine</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PredefinedExpressionInput`<sup>Optional</sup> <a name="PredefinedExpressionInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpressionInput"></a>

```csharp
public string PredefinedExpressionInput { get; }
```

- *Type:* string

---

##### `RoutineInput`<sup>Optional</sup> <a name="RoutineInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routineInput"></a>

```csharp
public string RoutineInput { get; }
```

- *Type:* string

---

##### `PredefinedExpression`<sup>Required</sup> <a name="PredefinedExpression" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.predefinedExpression"></a>

```csharp
public string PredefinedExpression { get; }
```

- *Type:* string

---

##### `Routine`<sup>Required</sup> <a name="Routine" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.routine"></a>

```csharp
public string Routine { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicyOutputReference.property.internalValue"></a>

```csharp
public GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy">GoogleBigqueryDatapolicyDataPolicyDataMaskingPolicy</a>

---


### GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference <a name="GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleBigqueryDatapolicyDataPolicy.GoogleBigqueryDatapolicyDataPolicyTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




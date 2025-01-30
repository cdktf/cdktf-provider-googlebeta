# `googleCertificateManagerCertificateMap` Submodule <a name="`googleCertificateManagerCertificateMap` Submodule" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCertificateManagerCertificateMap <a name="GoogleCertificateManagerCertificateMap" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map google_certificate_manager_certificate_map}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateMap(Construct Scope, string Id, GoogleCertificateManagerCertificateMapConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig">GoogleCertificateManagerCertificateMapConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig">GoogleCertificateManagerCertificateMapConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleCertificateManagerCertificateMapTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts">GoogleCertificateManagerCertificateMapTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCertificateManagerCertificateMap resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCertificateManagerCertificateMap.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCertificateManagerCertificateMap.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCertificateManagerCertificateMap.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleCertificateManagerCertificateMap.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleCertificateManagerCertificateMap resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCertificateManagerCertificateMap to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCertificateManagerCertificateMap that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCertificateManagerCertificateMap to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.createTime">CreateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.gclbTargets">GclbTargets</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList">GoogleCertificateManagerCertificateMapGclbTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference">GoogleCertificateManagerCertificateMapTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.updateTime">UpdateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.createTime"></a>

```csharp
public string CreateTime { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `GclbTargets`<sup>Required</sup> <a name="GclbTargets" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.gclbTargets"></a>

```csharp
public GoogleCertificateManagerCertificateMapGclbTargetsList GclbTargets { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList">GoogleCertificateManagerCertificateMapGclbTargetsList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.timeouts"></a>

```csharp
public GoogleCertificateManagerCertificateMapTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference">GoogleCertificateManagerCertificateMapTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.updateTime"></a>

```csharp
public string UpdateTime { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMap.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCertificateManagerCertificateMapConfig <a name="GoogleCertificateManagerCertificateMapConfig" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateMapConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Description = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Project = null,
    GoogleCertificateManagerCertificateMapTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.name">Name</a></code> | <code>string</code> | A user-defined name of the Certificate Map. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.description">Description</a></code> | <code>string</code> | A human-readable description of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#id GoogleCertificateManagerCertificateMap#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Set of labels associated with a Certificate Map resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#project GoogleCertificateManagerCertificateMap#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts">GoogleCertificateManagerCertificateMapTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-defined name of the Certificate Map.

Certificate Map names must be unique
globally and match the pattern 'projects/* /locations/* /certificateMaps/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#name GoogleCertificateManagerCertificateMap#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-readable description of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#description GoogleCertificateManagerCertificateMap#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#id GoogleCertificateManagerCertificateMap#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Set of labels associated with a Certificate Map resource.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#labels GoogleCertificateManagerCertificateMap#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#project GoogleCertificateManagerCertificateMap#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapConfig.property.timeouts"></a>

```csharp
public GoogleCertificateManagerCertificateMapTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts">GoogleCertificateManagerCertificateMapTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#timeouts GoogleCertificateManagerCertificateMap#timeouts}

---

### GoogleCertificateManagerCertificateMapGclbTargets <a name="GoogleCertificateManagerCertificateMapGclbTargets" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargets"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargets.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateMapGclbTargets {

};
```


### GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs <a name="GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs {

};
```


### GoogleCertificateManagerCertificateMapTimeouts <a name="GoogleCertificateManagerCertificateMapTimeouts" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateMapTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#create GoogleCertificateManagerCertificateMap#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#delete GoogleCertificateManagerCertificateMap#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#update GoogleCertificateManagerCertificateMap#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#create GoogleCertificateManagerCertificateMap#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#delete GoogleCertificateManagerCertificateMap#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_certificate_manager_certificate_map#update GoogleCertificateManagerCertificateMap#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList <a name="GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.get"></a>

```csharp
private GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference <a name="GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ipAddress">IpAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ports">Ports</a></code> | <code>double[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs">GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ipAddress"></a>

```csharp
public string IpAddress { get; }
```

- *Type:* string

---

##### `Ports`<sup>Required</sup> <a name="Ports" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.ports"></a>

```csharp
public double[] Ports { get; }
```

- *Type:* double[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsOutputReference.property.internalValue"></a>

```csharp
public GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs">GoogleCertificateManagerCertificateMapGclbTargetsIpConfigs</a>

---


### GoogleCertificateManagerCertificateMapGclbTargetsList <a name="GoogleCertificateManagerCertificateMapGclbTargetsList" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateMapGclbTargetsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.get"></a>

```csharp
private GoogleCertificateManagerCertificateMapGclbTargetsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### GoogleCertificateManagerCertificateMapGclbTargetsOutputReference <a name="GoogleCertificateManagerCertificateMapGclbTargetsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateMapGclbTargetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.ipConfigs">IpConfigs</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList">GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetHttpsProxy">TargetHttpsProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetSslProxy">TargetSslProxy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargets">GoogleCertificateManagerCertificateMapGclbTargets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `IpConfigs`<sup>Required</sup> <a name="IpConfigs" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.ipConfigs"></a>

```csharp
public GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList IpConfigs { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList">GoogleCertificateManagerCertificateMapGclbTargetsIpConfigsList</a>

---

##### `TargetHttpsProxy`<sup>Required</sup> <a name="TargetHttpsProxy" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetHttpsProxy"></a>

```csharp
public string TargetHttpsProxy { get; }
```

- *Type:* string

---

##### `TargetSslProxy`<sup>Required</sup> <a name="TargetSslProxy" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.targetSslProxy"></a>

```csharp
public string TargetSslProxy { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargetsOutputReference.property.internalValue"></a>

```csharp
public GoogleCertificateManagerCertificateMapGclbTargets InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapGclbTargets">GoogleCertificateManagerCertificateMapGclbTargets</a>

---


### GoogleCertificateManagerCertificateMapTimeoutsOutputReference <a name="GoogleCertificateManagerCertificateMapTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleCertificateManagerCertificateMapTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

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

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleCertificateManagerCertificateMap.GoogleCertificateManagerCertificateMapTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




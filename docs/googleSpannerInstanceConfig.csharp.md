# `googleSpannerInstanceConfig` Submodule <a name="`googleSpannerInstanceConfig` Submodule" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleSpannerInstanceConfigA <a name="GoogleSpannerInstanceConfigA" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config google_spanner_instance_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSpannerInstanceConfigA(Construct Scope, string Id, GoogleSpannerInstanceConfigAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig">GoogleSpannerInstanceConfigAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig">GoogleSpannerInstanceConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.putReplicas">PutReplicas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetBaseConfig">ResetBaseConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutReplicas` <a name="PutReplicas" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.putReplicas"></a>

```csharp
private void PutReplicas(object Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.putReplicas.parameter.value"></a>

- *Type:* object

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.putTimeouts"></a>

```csharp
private void PutTimeouts(GoogleSpannerInstanceConfigTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts">GoogleSpannerInstanceConfigTimeouts</a>

---

##### `ResetBaseConfig` <a name="ResetBaseConfig" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetBaseConfig"></a>

```csharp
private void ResetBaseConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetLabels"></a>

```csharp
private void ResetLabels()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleSpannerInstanceConfigA resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSpannerInstanceConfigA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSpannerInstanceConfigA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSpannerInstanceConfigA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GoogleSpannerInstanceConfigA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GoogleSpannerInstanceConfigA resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleSpannerInstanceConfigA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleSpannerInstanceConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GoogleSpannerInstanceConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.configType">ConfigType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.effectiveLabels">EffectiveLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.replicas">Replicas</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList">GoogleSpannerInstanceConfigReplicasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformLabels">TerraformLabels</a></code> | <code>HashiCorp.Cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference">GoogleSpannerInstanceConfigTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.baseConfigInput">BaseConfigInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.displayNameInput">DisplayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.labelsInput">LabelsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.replicasInput">ReplicasInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.baseConfig">BaseConfig</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.displayName">DisplayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.project">Project</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `ConfigType`<sup>Required</sup> <a name="ConfigType" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.configType"></a>

```csharp
public string ConfigType { get; }
```

- *Type:* string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.effectiveLabels"></a>

```csharp
public StringMap EffectiveLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.replicas"></a>

```csharp
public GoogleSpannerInstanceConfigReplicasList Replicas { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList">GoogleSpannerInstanceConfigReplicasList</a>

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.terraformLabels"></a>

```csharp
public StringMap TerraformLabels { get; }
```

- *Type:* HashiCorp.Cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.timeouts"></a>

```csharp
public GoogleSpannerInstanceConfigTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference">GoogleSpannerInstanceConfigTimeoutsOutputReference</a>

---

##### `BaseConfigInput`<sup>Optional</sup> <a name="BaseConfigInput" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.baseConfigInput"></a>

```csharp
public string BaseConfigInput { get; }
```

- *Type:* string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.displayNameInput"></a>

```csharp
public string DisplayNameInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.labelsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> LabelsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `ReplicasInput`<sup>Optional</sup> <a name="ReplicasInput" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.replicasInput"></a>

```csharp
public object ReplicasInput { get; }
```

- *Type:* object

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `BaseConfig`<sup>Required</sup> <a name="BaseConfig" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.baseConfig"></a>

```csharp
public string BaseConfig { get; }
```

- *Type:* string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.displayName"></a>

```csharp
public string DisplayName { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleSpannerInstanceConfigAConfig <a name="GoogleSpannerInstanceConfigAConfig" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSpannerInstanceConfigAConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string DisplayName,
    object Replicas,
    string BaseConfig = null,
    string Id = null,
    System.Collections.Generic.IDictionary<string, string> Labels = null,
    string Name = null,
    string Project = null,
    GoogleSpannerInstanceConfigTimeouts Timeouts = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.displayName">DisplayName</a></code> | <code>string</code> | The name of this instance configuration as it appears in UIs. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.replicas">Replicas</a></code> | <code>object</code> | replicas block. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.baseConfig">BaseConfig</a></code> | <code>string</code> | Base configuration name, e.g. nam3, based on which this configuration is created. Only set for user managed configurations. baseConfig must refer to a configuration of type GOOGLE_MANAGED in the same project as this configuration. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#id GoogleSpannerInstanceConfigA#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.labels">Labels</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.name">Name</a></code> | <code>string</code> | A unique identifier for the instance configuration. Values are of the form projects/<project>/instanceConfigs/[a-z][-a-z0-9]*. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#project GoogleSpannerInstanceConfigA#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts">GoogleSpannerInstanceConfigTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.displayName"></a>

```csharp
public string DisplayName { get; set; }
```

- *Type:* string

The name of this instance configuration as it appears in UIs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#display_name GoogleSpannerInstanceConfigA#display_name}

---

##### `Replicas`<sup>Required</sup> <a name="Replicas" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.replicas"></a>

```csharp
public object Replicas { get; set; }
```

- *Type:* object

replicas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#replicas GoogleSpannerInstanceConfigA#replicas}

---

##### `BaseConfig`<sup>Optional</sup> <a name="BaseConfig" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.baseConfig"></a>

```csharp
public string BaseConfig { get; set; }
```

- *Type:* string

Base configuration name, e.g. nam3, based on which this configuration is created. Only set for user managed configurations. baseConfig must refer to a configuration of type GOOGLE_MANAGED in the same project as this configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#base_config GoogleSpannerInstanceConfigA#base_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#id GoogleSpannerInstanceConfigA#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.labels"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Labels { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#labels GoogleSpannerInstanceConfigA#labels}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A unique identifier for the instance configuration. Values are of the form projects/<project>/instanceConfigs/[a-z][-a-z0-9]*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#name GoogleSpannerInstanceConfigA#name}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#project GoogleSpannerInstanceConfigA#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigAConfig.property.timeouts"></a>

```csharp
public GoogleSpannerInstanceConfigTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts">GoogleSpannerInstanceConfigTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#timeouts GoogleSpannerInstanceConfigA#timeouts}

---

### GoogleSpannerInstanceConfigReplicas <a name="GoogleSpannerInstanceConfigReplicas" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSpannerInstanceConfigReplicas {
    object DefaultLeaderLocation = null,
    string Location = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas.property.defaultLeaderLocation">DefaultLeaderLocation</a></code> | <code>object</code> | If true, this location is designated as the default leader location where leader replicas are placed. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas.property.location">Location</a></code> | <code>string</code> | The location of the serving resources, e.g. "us-central1". |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas.property.type">Type</a></code> | <code>string</code> | Indicates the type of replica.  See the [replica types documentation](https://cloud.google.com/spanner/docs/replication#replica_types) for more details. Possible values: ["READ_WRITE", "READ_ONLY", "WITNESS"]. |

---

##### `DefaultLeaderLocation`<sup>Optional</sup> <a name="DefaultLeaderLocation" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas.property.defaultLeaderLocation"></a>

```csharp
public object DefaultLeaderLocation { get; set; }
```

- *Type:* object

If true, this location is designated as the default leader location where leader replicas are placed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#default_leader_location GoogleSpannerInstanceConfigA#default_leader_location}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas.property.location"></a>

```csharp
public string Location { get; set; }
```

- *Type:* string

The location of the serving resources, e.g. "us-central1".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#location GoogleSpannerInstanceConfigA#location}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicas.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Indicates the type of replica.  See the [replica types documentation](https://cloud.google.com/spanner/docs/replication#replica_types) for more details. Possible values: ["READ_WRITE", "READ_ONLY", "WITNESS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#type GoogleSpannerInstanceConfigA#type}

---

### GoogleSpannerInstanceConfigTimeouts <a name="GoogleSpannerInstanceConfigTimeouts" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSpannerInstanceConfigTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#create GoogleSpannerInstanceConfigA#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#delete GoogleSpannerInstanceConfigA#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#update GoogleSpannerInstanceConfigA#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#create GoogleSpannerInstanceConfigA#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#delete GoogleSpannerInstanceConfigA#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.15.0/docs/resources/google_spanner_instance_config#update GoogleSpannerInstanceConfigA#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleSpannerInstanceConfigReplicasList <a name="GoogleSpannerInstanceConfigReplicasList" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSpannerInstanceConfigReplicasList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.get"></a>

```csharp
private GoogleSpannerInstanceConfigReplicasOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasList.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleSpannerInstanceConfigReplicasOutputReference <a name="GoogleSpannerInstanceConfigReplicasOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSpannerInstanceConfigReplicasOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resetDefaultLeaderLocation">ResetDefaultLeaderLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefaultLeaderLocation` <a name="ResetDefaultLeaderLocation" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resetDefaultLeaderLocation"></a>

```csharp
private void ResetDefaultLeaderLocation()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.resetType"></a>

```csharp
private void ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.defaultLeaderLocationInput">DefaultLeaderLocationInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.locationInput">LocationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.defaultLeaderLocation">DefaultLeaderLocation</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.location">Location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DefaultLeaderLocationInput`<sup>Optional</sup> <a name="DefaultLeaderLocationInput" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.defaultLeaderLocationInput"></a>

```csharp
public object DefaultLeaderLocationInput { get; }
```

- *Type:* object

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.locationInput"></a>

```csharp
public string LocationInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `DefaultLeaderLocation`<sup>Required</sup> <a name="DefaultLeaderLocation" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.defaultLeaderLocation"></a>

```csharp
public object DefaultLeaderLocation { get; }
```

- *Type:* object

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.location"></a>

```csharp
public string Location { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigReplicasOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---


### GoogleSpannerInstanceConfigTimeoutsOutputReference <a name="GoogleSpannerInstanceConfigTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GoogleSpannerInstanceConfigTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googleSpannerInstanceConfig.GoogleSpannerInstanceConfigTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




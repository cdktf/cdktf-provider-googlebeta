# `googlePubsubLiteTopic` Submodule <a name="`googlePubsubLiteTopic` Submodule" id="@cdktf/provider-google-beta.googlePubsubLiteTopic"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GooglePubsubLiteTopic <a name="GooglePubsubLiteTopic" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic google_pubsub_lite_topic}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubLiteTopic(Construct Scope, string Id, GooglePubsubLiteTopicConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig">GooglePubsubLiteTopicConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig">GooglePubsubLiteTopicConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putPartitionConfig">PutPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putReservationConfig">PutReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putRetentionConfig">PutRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetPartitionConfig">ResetPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetReservationConfig">ResetReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetRetentionConfig">ResetRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetZone">ResetZone</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.hasResourceMove"></a>

```csharp
private object HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.importFrom.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, object Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveTo.parameter.index"></a>

- *Type:* object

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPartitionConfig` <a name="PutPartitionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putPartitionConfig"></a>

```csharp
private void PutPartitionConfig(GooglePubsubLiteTopicPartitionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putPartitionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a>

---

##### `PutReservationConfig` <a name="PutReservationConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putReservationConfig"></a>

```csharp
private void PutReservationConfig(GooglePubsubLiteTopicReservationConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putReservationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a>

---

##### `PutRetentionConfig` <a name="PutRetentionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putRetentionConfig"></a>

```csharp
private void PutRetentionConfig(GooglePubsubLiteTopicRetentionConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putRetentionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putTimeouts"></a>

```csharp
private void PutTimeouts(GooglePubsubLiteTopicTimeouts Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetPartitionConfig` <a name="ResetPartitionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetPartitionConfig"></a>

```csharp
private void ResetPartitionConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetProject"></a>

```csharp
private void ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetRegion"></a>

```csharp
private void ResetRegion()
```

##### `ResetReservationConfig` <a name="ResetReservationConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetReservationConfig"></a>

```csharp
private void ResetReservationConfig()
```

##### `ResetRetentionConfig` <a name="ResetRetentionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetRetentionConfig"></a>

```csharp
private void ResetRetentionConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetTimeouts"></a>

```csharp
private void ResetTimeouts()
```

##### `ResetZone` <a name="ResetZone" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.resetZone"></a>

```csharp
private void ResetZone()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GooglePubsubLiteTopic resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isConstruct"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePubsubLiteTopic.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformElement"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePubsubLiteTopic.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformResource"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePubsubLiteTopic.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

GooglePubsubLiteTopic.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTF code for importing a GooglePubsubLiteTopic resource upon running "cdktf plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GooglePubsubLiteTopic to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GooglePubsubLiteTopic that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.generateConfigForImport.parameter.provider"></a>

- *Type:* HashiCorp.Cdktf.TerraformProvider

? Optional instance of the provider where the GooglePubsubLiteTopic to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.cdktfStack">CdktfStack</a></code> | <code>HashiCorp.Cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>HashiCorp.Cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.partitionConfig">PartitionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference">GooglePubsubLiteTopicPartitionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.reservationConfig">ReservationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference">GooglePubsubLiteTopicReservationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.retentionConfig">RetentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference">GooglePubsubLiteTopicRetentionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference">GooglePubsubLiteTopicTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.partitionConfigInput">PartitionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.projectInput">ProjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.regionInput">RegionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.reservationConfigInput">ReservationConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.retentionConfigInput">RetentionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.timeoutsInput">TimeoutsInput</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.zoneInput">ZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.project">Project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.zone">Zone</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.connection"></a>

```csharp
public object Connection { get; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.count"></a>

```csharp
public object Count { get; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.provisioners"></a>

```csharp
public object[] Provisioners { get; }
```

- *Type:* object[]

---

##### `PartitionConfig`<sup>Required</sup> <a name="PartitionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.partitionConfig"></a>

```csharp
public GooglePubsubLiteTopicPartitionConfigOutputReference PartitionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference">GooglePubsubLiteTopicPartitionConfigOutputReference</a>

---

##### `ReservationConfig`<sup>Required</sup> <a name="ReservationConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.reservationConfig"></a>

```csharp
public GooglePubsubLiteTopicReservationConfigOutputReference ReservationConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference">GooglePubsubLiteTopicReservationConfigOutputReference</a>

---

##### `RetentionConfig`<sup>Required</sup> <a name="RetentionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.retentionConfig"></a>

```csharp
public GooglePubsubLiteTopicRetentionConfigOutputReference RetentionConfig { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference">GooglePubsubLiteTopicRetentionConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.timeouts"></a>

```csharp
public GooglePubsubLiteTopicTimeoutsOutputReference Timeouts { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference">GooglePubsubLiteTopicTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PartitionConfigInput`<sup>Optional</sup> <a name="PartitionConfigInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.partitionConfigInput"></a>

```csharp
public GooglePubsubLiteTopicPartitionConfig PartitionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.projectInput"></a>

```csharp
public string ProjectInput { get; }
```

- *Type:* string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.regionInput"></a>

```csharp
public string RegionInput { get; }
```

- *Type:* string

---

##### `ReservationConfigInput`<sup>Optional</sup> <a name="ReservationConfigInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.reservationConfigInput"></a>

```csharp
public GooglePubsubLiteTopicReservationConfig ReservationConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a>

---

##### `RetentionConfigInput`<sup>Optional</sup> <a name="RetentionConfigInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.retentionConfigInput"></a>

```csharp
public GooglePubsubLiteTopicRetentionConfig RetentionConfigInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.timeoutsInput"></a>

```csharp
public object TimeoutsInput { get; }
```

- *Type:* object

---

##### `ZoneInput`<sup>Optional</sup> <a name="ZoneInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.zoneInput"></a>

```csharp
public string ZoneInput { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.project"></a>

```csharp
public string Project { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Zone`<sup>Required</sup> <a name="Zone" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.zone"></a>

```csharp
public string Zone { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopic.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GooglePubsubLiteTopicConfig <a name="GooglePubsubLiteTopicConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubLiteTopicConfig {
    object Connection = null,
    object Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    object[] Provisioners = null,
    string Name,
    string Id = null,
    GooglePubsubLiteTopicPartitionConfig PartitionConfig = null,
    string Project = null,
    string Region = null,
    GooglePubsubLiteTopicReservationConfig ReservationConfig = null,
    GooglePubsubLiteTopicRetentionConfig RetentionConfig = null,
    GooglePubsubLiteTopicTimeouts Timeouts = null,
    string Zone = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.connection">Connection</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.count">Count</a></code> | <code>object</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.dependsOn">DependsOn</a></code> | <code>HashiCorp.Cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.forEach">ForEach</a></code> | <code>HashiCorp.Cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.lifecycle">Lifecycle</a></code> | <code>HashiCorp.Cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.provider">Provider</a></code> | <code>HashiCorp.Cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.provisioners">Provisioners</a></code> | <code>object[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.name">Name</a></code> | <code>string</code> | Name of the topic. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.id">Id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#id GooglePubsubLiteTopic#id}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.partitionConfig">PartitionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a></code> | partition_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.project">Project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#project GooglePubsubLiteTopic#project}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.region">Region</a></code> | <code>string</code> | The region of the pubsub lite topic. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.reservationConfig">ReservationConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a></code> | reservation_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.retentionConfig">RetentionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a></code> | retention_config block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.zone">Zone</a></code> | <code>string</code> | The zone of the pubsub lite topic. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.connection"></a>

```csharp
public object Connection { get; set; }
```

- *Type:* object

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.count"></a>

```csharp
public object Count { get; set; }
```

- *Type:* object

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* HashiCorp.Cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* HashiCorp.Cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.provisioners"></a>

```csharp
public object[] Provisioners { get; set; }
```

- *Type:* object[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#name GooglePubsubLiteTopic#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#id GooglePubsubLiteTopic#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `PartitionConfig`<sup>Optional</sup> <a name="PartitionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.partitionConfig"></a>

```csharp
public GooglePubsubLiteTopicPartitionConfig PartitionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a>

partition_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#partition_config GooglePubsubLiteTopic#partition_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.project"></a>

```csharp
public string Project { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#project GooglePubsubLiteTopic#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.region"></a>

```csharp
public string Region { get; set; }
```

- *Type:* string

The region of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#region GooglePubsubLiteTopic#region}

---

##### `ReservationConfig`<sup>Optional</sup> <a name="ReservationConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.reservationConfig"></a>

```csharp
public GooglePubsubLiteTopicReservationConfig ReservationConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a>

reservation_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#reservation_config GooglePubsubLiteTopic#reservation_config}

---

##### `RetentionConfig`<sup>Optional</sup> <a name="RetentionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.retentionConfig"></a>

```csharp
public GooglePubsubLiteTopicRetentionConfig RetentionConfig { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a>

retention_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#retention_config GooglePubsubLiteTopic#retention_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.timeouts"></a>

```csharp
public GooglePubsubLiteTopicTimeouts Timeouts { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts">GooglePubsubLiteTopicTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#timeouts GooglePubsubLiteTopic#timeouts}

---

##### `Zone`<sup>Optional</sup> <a name="Zone" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicConfig.property.zone"></a>

```csharp
public string Zone { get; set; }
```

- *Type:* string

The zone of the pubsub lite topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#zone GooglePubsubLiteTopic#zone}

---

### GooglePubsubLiteTopicPartitionConfig <a name="GooglePubsubLiteTopicPartitionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubLiteTopicPartitionConfig {
    double Count,
    GooglePubsubLiteTopicPartitionConfigCapacity Capacity = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.property.count">Count</a></code> | <code>double</code> | The number of partitions in the topic. Must be at least 1. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a></code> | capacity block. |

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.property.count"></a>

```csharp
public double Count { get; set; }
```

- *Type:* double

The number of partitions in the topic. Must be at least 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#count GooglePubsubLiteTopic#count}

---

##### `Capacity`<sup>Optional</sup> <a name="Capacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig.property.capacity"></a>

```csharp
public GooglePubsubLiteTopicPartitionConfigCapacity Capacity { get; set; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a>

capacity block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#capacity GooglePubsubLiteTopic#capacity}

---

### GooglePubsubLiteTopicPartitionConfigCapacity <a name="GooglePubsubLiteTopicPartitionConfigCapacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubLiteTopicPartitionConfigCapacity {
    double PublishMibPerSec,
    double SubscribeMibPerSec
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.property.publishMibPerSec">PublishMibPerSec</a></code> | <code>double</code> | Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.property.subscribeMibPerSec">SubscribeMibPerSec</a></code> | <code>double</code> | Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16. |

---

##### `PublishMibPerSec`<sup>Required</sup> <a name="PublishMibPerSec" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.property.publishMibPerSec"></a>

```csharp
public double PublishMibPerSec { get; set; }
```

- *Type:* double

Subscribe throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#publish_mib_per_sec GooglePubsubLiteTopic#publish_mib_per_sec}

---

##### `SubscribeMibPerSec`<sup>Required</sup> <a name="SubscribeMibPerSec" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity.property.subscribeMibPerSec"></a>

```csharp
public double SubscribeMibPerSec { get; set; }
```

- *Type:* double

Publish throughput capacity per partition in MiB/s. Must be >= 4 and <= 16.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#subscribe_mib_per_sec GooglePubsubLiteTopic#subscribe_mib_per_sec}

---

### GooglePubsubLiteTopicReservationConfig <a name="GooglePubsubLiteTopicReservationConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubLiteTopicReservationConfig {
    string ThroughputReservation = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig.property.throughputReservation">ThroughputReservation</a></code> | <code>string</code> | The Reservation to use for this topic's throughput capacity. |

---

##### `ThroughputReservation`<sup>Optional</sup> <a name="ThroughputReservation" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig.property.throughputReservation"></a>

```csharp
public string ThroughputReservation { get; set; }
```

- *Type:* string

The Reservation to use for this topic's throughput capacity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#throughput_reservation GooglePubsubLiteTopic#throughput_reservation}

---

### GooglePubsubLiteTopicRetentionConfig <a name="GooglePubsubLiteTopicRetentionConfig" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubLiteTopicRetentionConfig {
    string PerPartitionBytes,
    string Period = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.property.perPartitionBytes">PerPartitionBytes</a></code> | <code>string</code> | The provisioned storage, in bytes, per partition. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.property.period">Period</a></code> | <code>string</code> | How long a published message is retained. |

---

##### `PerPartitionBytes`<sup>Required</sup> <a name="PerPartitionBytes" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.property.perPartitionBytes"></a>

```csharp
public string PerPartitionBytes { get; set; }
```

- *Type:* string

The provisioned storage, in bytes, per partition.

If the number of bytes stored
in any of the topic's partitions grows beyond this value, older messages will be
dropped to make room for newer ones, regardless of the value of period.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#per_partition_bytes GooglePubsubLiteTopic#per_partition_bytes}

---

##### `Period`<sup>Optional</sup> <a name="Period" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig.property.period"></a>

```csharp
public string Period { get; set; }
```

- *Type:* string

How long a published message is retained.

If unset, messages will be retained as
long as the bytes retained for each partition is below perPartitionBytes. A
duration in seconds with up to nine fractional digits, terminated by 's'.
Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#period GooglePubsubLiteTopic#period}

---

### GooglePubsubLiteTopicTimeouts <a name="GooglePubsubLiteTopicTimeouts" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubLiteTopicTimeouts {
    string Create = null,
    string Delete = null,
    string Update = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.create">Create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#create GooglePubsubLiteTopic#create}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.delete">Delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#delete GooglePubsubLiteTopic#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.update">Update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#update GooglePubsubLiteTopic#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.create"></a>

```csharp
public string Create { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#create GooglePubsubLiteTopic#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.delete"></a>

```csharp
public string Delete { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#delete GooglePubsubLiteTopic#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeouts.property.update"></a>

```csharp
public string Update { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.25.0/docs/resources/google_pubsub_lite_topic#update GooglePubsubLiteTopic#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GooglePubsubLiteTopicPartitionConfigCapacityOutputReference <a name="GooglePubsubLiteTopicPartitionConfigCapacityOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubLiteTopicPartitionConfigCapacityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSecInput">PublishMibPerSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSecInput">SubscribeMibPerSecInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSec">PublishMibPerSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSec">SubscribeMibPerSec</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PublishMibPerSecInput`<sup>Optional</sup> <a name="PublishMibPerSecInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSecInput"></a>

```csharp
public double PublishMibPerSecInput { get; }
```

- *Type:* double

---

##### `SubscribeMibPerSecInput`<sup>Optional</sup> <a name="SubscribeMibPerSecInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSecInput"></a>

```csharp
public double SubscribeMibPerSecInput { get; }
```

- *Type:* double

---

##### `PublishMibPerSec`<sup>Required</sup> <a name="PublishMibPerSec" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.publishMibPerSec"></a>

```csharp
public double PublishMibPerSec { get; }
```

- *Type:* double

---

##### `SubscribeMibPerSec`<sup>Required</sup> <a name="SubscribeMibPerSec" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.subscribeMibPerSec"></a>

```csharp
public double SubscribeMibPerSec { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference.property.internalValue"></a>

```csharp
public GooglePubsubLiteTopicPartitionConfigCapacity InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a>

---


### GooglePubsubLiteTopicPartitionConfigOutputReference <a name="GooglePubsubLiteTopicPartitionConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubLiteTopicPartitionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.putCapacity">PutCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resetCapacity">ResetCapacity</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCapacity` <a name="PutCapacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.putCapacity"></a>

```csharp
private void PutCapacity(GooglePubsubLiteTopicPartitionConfigCapacity Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.putCapacity.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a>

---

##### `ResetCapacity` <a name="ResetCapacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.resetCapacity"></a>

```csharp
private void ResetCapacity()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.capacity">Capacity</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference">GooglePubsubLiteTopicPartitionConfigCapacityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.capacityInput">CapacityInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.countInput">CountInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.count">Count</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.capacity"></a>

```csharp
public GooglePubsubLiteTopicPartitionConfigCapacityOutputReference Capacity { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacityOutputReference">GooglePubsubLiteTopicPartitionConfigCapacityOutputReference</a>

---

##### `CapacityInput`<sup>Optional</sup> <a name="CapacityInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.capacityInput"></a>

```csharp
public GooglePubsubLiteTopicPartitionConfigCapacity CapacityInput { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigCapacity">GooglePubsubLiteTopicPartitionConfigCapacity</a>

---

##### `CountInput`<sup>Optional</sup> <a name="CountInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.countInput"></a>

```csharp
public double CountInput { get; }
```

- *Type:* double

---

##### `Count`<sup>Required</sup> <a name="Count" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.count"></a>

```csharp
public double Count { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfigOutputReference.property.internalValue"></a>

```csharp
public GooglePubsubLiteTopicPartitionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicPartitionConfig">GooglePubsubLiteTopicPartitionConfig</a>

---


### GooglePubsubLiteTopicReservationConfigOutputReference <a name="GooglePubsubLiteTopicReservationConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubLiteTopicReservationConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resetThroughputReservation">ResetThroughputReservation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetThroughputReservation` <a name="ResetThroughputReservation" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.resetThroughputReservation"></a>

```csharp
private void ResetThroughputReservation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.throughputReservationInput">ThroughputReservationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.throughputReservation">ThroughputReservation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ThroughputReservationInput`<sup>Optional</sup> <a name="ThroughputReservationInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.throughputReservationInput"></a>

```csharp
public string ThroughputReservationInput { get; }
```

- *Type:* string

---

##### `ThroughputReservation`<sup>Required</sup> <a name="ThroughputReservation" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.throughputReservation"></a>

```csharp
public string ThroughputReservation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfigOutputReference.property.internalValue"></a>

```csharp
public GooglePubsubLiteTopicReservationConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicReservationConfig">GooglePubsubLiteTopicReservationConfig</a>

---


### GooglePubsubLiteTopicRetentionConfigOutputReference <a name="GooglePubsubLiteTopicRetentionConfigOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubLiteTopicRetentionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resetPeriod">ResetPeriod</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPeriod` <a name="ResetPeriod" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.resetPeriod"></a>

```csharp
private void ResetPeriod()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.periodInput">PeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytesInput">PerPartitionBytesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.period">Period</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytes">PerPartitionBytes</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.periodInput"></a>

```csharp
public string PeriodInput { get; }
```

- *Type:* string

---

##### `PerPartitionBytesInput`<sup>Optional</sup> <a name="PerPartitionBytesInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytesInput"></a>

```csharp
public string PerPartitionBytesInput { get; }
```

- *Type:* string

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.period"></a>

```csharp
public string Period { get; }
```

- *Type:* string

---

##### `PerPartitionBytes`<sup>Required</sup> <a name="PerPartitionBytes" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.perPartitionBytes"></a>

```csharp
public string PerPartitionBytes { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfigOutputReference.property.internalValue"></a>

```csharp
public GooglePubsubLiteTopicRetentionConfig InternalValue { get; }
```

- *Type:* <a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicRetentionConfig">GooglePubsubLiteTopicRetentionConfig</a>

---


### GooglePubsubLiteTopicTimeoutsOutputReference <a name="GooglePubsubLiteTopicTimeoutsOutputReference" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer"></a>

```csharp
using HashiCorp.Cdktf.Providers.GoogleBeta;

new GooglePubsubLiteTopicTimeoutsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>HashiCorp.Cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* HashiCorp.Cdktf.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* HashiCorp.Cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetCreate"></a>

```csharp
private void ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetDelete"></a>

```csharp
private void ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.resetUpdate"></a>

```csharp
private void ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.create">Create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.delete">Delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.update">Update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>object</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.createInput"></a>

```csharp
public string CreateInput { get; }
```

- *Type:* string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.deleteInput"></a>

```csharp
public string DeleteInput { get; }
```

- *Type:* string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.updateInput"></a>

```csharp
public string UpdateInput { get; }
```

- *Type:* string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.create"></a>

```csharp
public string Create { get; }
```

- *Type:* string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.delete"></a>

```csharp
public string Delete { get; }
```

- *Type:* string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.update"></a>

```csharp
public string Update { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google-beta.googlePubsubLiteTopic.GooglePubsubLiteTopicTimeoutsOutputReference.property.internalValue"></a>

```csharp
public object InternalValue { get; }
```

- *Type:* object

---




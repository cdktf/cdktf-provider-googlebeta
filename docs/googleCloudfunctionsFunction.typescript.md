# `googleCloudfunctionsFunction` Submodule <a name="`googleCloudfunctionsFunction` Submodule" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleCloudfunctionsFunction <a name="GoogleCloudfunctionsFunction" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function google_cloudfunctions_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

new googleCloudfunctionsFunction.GoogleCloudfunctionsFunction(scope: Construct, id: string, config: GoogleCloudfunctionsFunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig">GoogleCloudfunctionsFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig">GoogleCloudfunctionsFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putEventTrigger">putEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretEnvironmentVariables">putSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretVolumes">putSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSourceRepository">putSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetAvailableMemoryMb">resetAvailableMemoryMb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildEnvironmentVariables">resetBuildEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildServiceAccount">resetBuildServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildWorkerPool">resetBuildWorkerPool</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRegistry">resetDockerRegistry</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRepository">resetDockerRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEntryPoint">resetEntryPoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEnvironmentVariables">resetEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEventTrigger">resetEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerSecurityLevel">resetHttpsTriggerSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerUrl">resetHttpsTriggerUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetIngressSettings">resetIngressSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetKmsKeyName">resetKmsKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMaxInstances">resetMaxInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMinInstances">resetMinInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretEnvironmentVariables">resetSecretEnvironmentVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretVolumes">resetSecretVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetServiceAccountEmail">resetServiceAccountEmail</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveBucket">resetSourceArchiveBucket</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveObject">resetSourceArchiveObject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceRepository">resetSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeout">resetTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTriggerHttp">resetTriggerHttp</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnector">resetVpcConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnectorEgressSettings">resetVpcConnectorEgressSettings</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEventTrigger` <a name="putEventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putEventTrigger"></a>

```typescript
public putEventTrigger(value: GoogleCloudfunctionsFunctionEventTrigger): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putEventTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

---

##### `putSecretEnvironmentVariables` <a name="putSecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretEnvironmentVariables"></a>

```typescript
public putSecretEnvironmentVariables(value: IResolvable | GoogleCloudfunctionsFunctionSecretEnvironmentVariables[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretEnvironmentVariables.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>[]

---

##### `putSecretVolumes` <a name="putSecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretVolumes"></a>

```typescript
public putSecretVolumes(value: IResolvable | GoogleCloudfunctionsFunctionSecretVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSecretVolumes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>[]

---

##### `putSourceRepository` <a name="putSourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSourceRepository"></a>

```typescript
public putSourceRepository(value: GoogleCloudfunctionsFunctionSourceRepository): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putSourceRepository.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleCloudfunctionsFunctionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a>

---

##### `resetAvailableMemoryMb` <a name="resetAvailableMemoryMb" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetAvailableMemoryMb"></a>

```typescript
public resetAvailableMemoryMb(): void
```

##### `resetBuildEnvironmentVariables` <a name="resetBuildEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildEnvironmentVariables"></a>

```typescript
public resetBuildEnvironmentVariables(): void
```

##### `resetBuildServiceAccount` <a name="resetBuildServiceAccount" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildServiceAccount"></a>

```typescript
public resetBuildServiceAccount(): void
```

##### `resetBuildWorkerPool` <a name="resetBuildWorkerPool" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetBuildWorkerPool"></a>

```typescript
public resetBuildWorkerPool(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDockerRegistry` <a name="resetDockerRegistry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRegistry"></a>

```typescript
public resetDockerRegistry(): void
```

##### `resetDockerRepository` <a name="resetDockerRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetDockerRepository"></a>

```typescript
public resetDockerRepository(): void
```

##### `resetEntryPoint` <a name="resetEntryPoint" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEntryPoint"></a>

```typescript
public resetEntryPoint(): void
```

##### `resetEnvironmentVariables` <a name="resetEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEnvironmentVariables"></a>

```typescript
public resetEnvironmentVariables(): void
```

##### `resetEventTrigger` <a name="resetEventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetEventTrigger"></a>

```typescript
public resetEventTrigger(): void
```

##### `resetHttpsTriggerSecurityLevel` <a name="resetHttpsTriggerSecurityLevel" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerSecurityLevel"></a>

```typescript
public resetHttpsTriggerSecurityLevel(): void
```

##### `resetHttpsTriggerUrl` <a name="resetHttpsTriggerUrl" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetHttpsTriggerUrl"></a>

```typescript
public resetHttpsTriggerUrl(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIngressSettings` <a name="resetIngressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetIngressSettings"></a>

```typescript
public resetIngressSettings(): void
```

##### `resetKmsKeyName` <a name="resetKmsKeyName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetKmsKeyName"></a>

```typescript
public resetKmsKeyName(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetMaxInstances` <a name="resetMaxInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMaxInstances"></a>

```typescript
public resetMaxInstances(): void
```

##### `resetMinInstances` <a name="resetMinInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetMinInstances"></a>

```typescript
public resetMinInstances(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSecretEnvironmentVariables` <a name="resetSecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretEnvironmentVariables"></a>

```typescript
public resetSecretEnvironmentVariables(): void
```

##### `resetSecretVolumes` <a name="resetSecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSecretVolumes"></a>

```typescript
public resetSecretVolumes(): void
```

##### `resetServiceAccountEmail` <a name="resetServiceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetServiceAccountEmail"></a>

```typescript
public resetServiceAccountEmail(): void
```

##### `resetSourceArchiveBucket` <a name="resetSourceArchiveBucket" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveBucket"></a>

```typescript
public resetSourceArchiveBucket(): void
```

##### `resetSourceArchiveObject` <a name="resetSourceArchiveObject" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceArchiveObject"></a>

```typescript
public resetSourceArchiveObject(): void
```

##### `resetSourceRepository` <a name="resetSourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetSourceRepository"></a>

```typescript
public resetSourceRepository(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeout"></a>

```typescript
public resetTimeout(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTriggerHttp` <a name="resetTriggerHttp" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetTriggerHttp"></a>

```typescript
public resetTriggerHttp(): void
```

##### `resetVpcConnector` <a name="resetVpcConnector" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnector"></a>

```typescript
public resetVpcConnector(): void
```

##### `resetVpcConnectorEgressSettings` <a name="resetVpcConnectorEgressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.resetVpcConnectorEgressSettings"></a>

```typescript
public resetVpcConnectorEgressSettings(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleCloudfunctionsFunction resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isConstruct"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformElement"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformResource"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleCloudfunctionsFunction resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleCloudfunctionsFunction to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleCloudfunctionsFunction that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleCloudfunctionsFunction to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTrigger">eventTrigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference">GoogleCloudfunctionsFunctionEventTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariables">secretEnvironmentVariables</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList">GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumes">secretVolumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList">GoogleCloudfunctionsFunctionSecretVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepository">sourceRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference">GoogleCloudfunctionsFunctionSourceRepositoryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference">GoogleCloudfunctionsFunctionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMbInput">availableMemoryMbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariablesInput">buildEnvironmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccountInput">buildServiceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPoolInput">buildWorkerPoolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistryInput">dockerRegistryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepositoryInput">dockerRepositoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPointInput">entryPointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariablesInput">environmentVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTriggerInput">eventTriggerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevelInput">httpsTriggerSecurityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrlInput">httpsTriggerUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettingsInput">ingressSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyNameInput">kmsKeyNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstancesInput">maxInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstancesInput">minInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariablesInput">secretEnvironmentVariablesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumesInput">secretVolumesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmailInput">serviceAccountEmailInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucketInput">sourceArchiveBucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObjectInput">sourceArchiveObjectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepositoryInput">sourceRepositoryInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutInput">timeoutInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttpInput">triggerHttpInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettingsInput">vpcConnectorEgressSettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorInput">vpcConnectorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMb">availableMemoryMb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariables">buildEnvironmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccount">buildServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPool">buildWorkerPool</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistry">dockerRegistry</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepository">dockerRepository</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPoint">entryPoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevel">httpsTriggerSecurityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrl">httpsTriggerUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettings">ingressSettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstances">maxInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstances">minInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucket">sourceArchiveBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObject">sourceArchiveObject</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeout">timeout</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttp">triggerHttp</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnector">vpcConnector</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettings">vpcConnectorEgressSettings</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `eventTrigger`<sup>Required</sup> <a name="eventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTrigger"></a>

```typescript
public readonly eventTrigger: GoogleCloudfunctionsFunctionEventTriggerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference">GoogleCloudfunctionsFunctionEventTriggerOutputReference</a>

---

##### `secretEnvironmentVariables`<sup>Required</sup> <a name="secretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariables"></a>

```typescript
public readonly secretEnvironmentVariables: GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList">GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList</a>

---

##### `secretVolumes`<sup>Required</sup> <a name="secretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumes"></a>

```typescript
public readonly secretVolumes: GoogleCloudfunctionsFunctionSecretVolumesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList">GoogleCloudfunctionsFunctionSecretVolumesList</a>

---

##### `sourceRepository`<sup>Required</sup> <a name="sourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepository"></a>

```typescript
public readonly sourceRepository: GoogleCloudfunctionsFunctionSourceRepositoryOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference">GoogleCloudfunctionsFunctionSourceRepositoryOutputReference</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudfunctionsFunctionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference">GoogleCloudfunctionsFunctionTimeoutsOutputReference</a>

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

##### `availableMemoryMbInput`<sup>Optional</sup> <a name="availableMemoryMbInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMbInput"></a>

```typescript
public readonly availableMemoryMbInput: number;
```

- *Type:* number

---

##### `buildEnvironmentVariablesInput`<sup>Optional</sup> <a name="buildEnvironmentVariablesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariablesInput"></a>

```typescript
public readonly buildEnvironmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `buildServiceAccountInput`<sup>Optional</sup> <a name="buildServiceAccountInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccountInput"></a>

```typescript
public readonly buildServiceAccountInput: string;
```

- *Type:* string

---

##### `buildWorkerPoolInput`<sup>Optional</sup> <a name="buildWorkerPoolInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPoolInput"></a>

```typescript
public readonly buildWorkerPoolInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `dockerRegistryInput`<sup>Optional</sup> <a name="dockerRegistryInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistryInput"></a>

```typescript
public readonly dockerRegistryInput: string;
```

- *Type:* string

---

##### `dockerRepositoryInput`<sup>Optional</sup> <a name="dockerRepositoryInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepositoryInput"></a>

```typescript
public readonly dockerRepositoryInput: string;
```

- *Type:* string

---

##### `entryPointInput`<sup>Optional</sup> <a name="entryPointInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPointInput"></a>

```typescript
public readonly entryPointInput: string;
```

- *Type:* string

---

##### `environmentVariablesInput`<sup>Optional</sup> <a name="environmentVariablesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariablesInput"></a>

```typescript
public readonly environmentVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `eventTriggerInput`<sup>Optional</sup> <a name="eventTriggerInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.eventTriggerInput"></a>

```typescript
public readonly eventTriggerInput: GoogleCloudfunctionsFunctionEventTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

---

##### `httpsTriggerSecurityLevelInput`<sup>Optional</sup> <a name="httpsTriggerSecurityLevelInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevelInput"></a>

```typescript
public readonly httpsTriggerSecurityLevelInput: string;
```

- *Type:* string

---

##### `httpsTriggerUrlInput`<sup>Optional</sup> <a name="httpsTriggerUrlInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrlInput"></a>

```typescript
public readonly httpsTriggerUrlInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `ingressSettingsInput`<sup>Optional</sup> <a name="ingressSettingsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettingsInput"></a>

```typescript
public readonly ingressSettingsInput: string;
```

- *Type:* string

---

##### `kmsKeyNameInput`<sup>Optional</sup> <a name="kmsKeyNameInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyNameInput"></a>

```typescript
public readonly kmsKeyNameInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxInstancesInput`<sup>Optional</sup> <a name="maxInstancesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstancesInput"></a>

```typescript
public readonly maxInstancesInput: number;
```

- *Type:* number

---

##### `minInstancesInput`<sup>Optional</sup> <a name="minInstancesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstancesInput"></a>

```typescript
public readonly minInstancesInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `secretEnvironmentVariablesInput`<sup>Optional</sup> <a name="secretEnvironmentVariablesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretEnvironmentVariablesInput"></a>

```typescript
public readonly secretEnvironmentVariablesInput: IResolvable | GoogleCloudfunctionsFunctionSecretEnvironmentVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>[]

---

##### `secretVolumesInput`<sup>Optional</sup> <a name="secretVolumesInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.secretVolumesInput"></a>

```typescript
public readonly secretVolumesInput: IResolvable | GoogleCloudfunctionsFunctionSecretVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>[]

---

##### `serviceAccountEmailInput`<sup>Optional</sup> <a name="serviceAccountEmailInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmailInput"></a>

```typescript
public readonly serviceAccountEmailInput: string;
```

- *Type:* string

---

##### `sourceArchiveBucketInput`<sup>Optional</sup> <a name="sourceArchiveBucketInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucketInput"></a>

```typescript
public readonly sourceArchiveBucketInput: string;
```

- *Type:* string

---

##### `sourceArchiveObjectInput`<sup>Optional</sup> <a name="sourceArchiveObjectInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObjectInput"></a>

```typescript
public readonly sourceArchiveObjectInput: string;
```

- *Type:* string

---

##### `sourceRepositoryInput`<sup>Optional</sup> <a name="sourceRepositoryInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceRepositoryInput"></a>

```typescript
public readonly sourceRepositoryInput: GoogleCloudfunctionsFunctionSourceRepository;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleCloudfunctionsFunctionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a>

---

##### `triggerHttpInput`<sup>Optional</sup> <a name="triggerHttpInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttpInput"></a>

```typescript
public readonly triggerHttpInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vpcConnectorEgressSettingsInput`<sup>Optional</sup> <a name="vpcConnectorEgressSettingsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettingsInput"></a>

```typescript
public readonly vpcConnectorEgressSettingsInput: string;
```

- *Type:* string

---

##### `vpcConnectorInput`<sup>Optional</sup> <a name="vpcConnectorInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorInput"></a>

```typescript
public readonly vpcConnectorInput: string;
```

- *Type:* string

---

##### `availableMemoryMb`<sup>Required</sup> <a name="availableMemoryMb" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.availableMemoryMb"></a>

```typescript
public readonly availableMemoryMb: number;
```

- *Type:* number

---

##### `buildEnvironmentVariables`<sup>Required</sup> <a name="buildEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildEnvironmentVariables"></a>

```typescript
public readonly buildEnvironmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `buildServiceAccount`<sup>Required</sup> <a name="buildServiceAccount" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildServiceAccount"></a>

```typescript
public readonly buildServiceAccount: string;
```

- *Type:* string

---

##### `buildWorkerPool`<sup>Required</sup> <a name="buildWorkerPool" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.buildWorkerPool"></a>

```typescript
public readonly buildWorkerPool: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `dockerRegistry`<sup>Required</sup> <a name="dockerRegistry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRegistry"></a>

```typescript
public readonly dockerRegistry: string;
```

- *Type:* string

---

##### `dockerRepository`<sup>Required</sup> <a name="dockerRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.dockerRepository"></a>

```typescript
public readonly dockerRepository: string;
```

- *Type:* string

---

##### `entryPoint`<sup>Required</sup> <a name="entryPoint" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.entryPoint"></a>

```typescript
public readonly entryPoint: string;
```

- *Type:* string

---

##### `environmentVariables`<sup>Required</sup> <a name="environmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `httpsTriggerSecurityLevel`<sup>Required</sup> <a name="httpsTriggerSecurityLevel" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerSecurityLevel"></a>

```typescript
public readonly httpsTriggerSecurityLevel: string;
```

- *Type:* string

---

##### `httpsTriggerUrl`<sup>Required</sup> <a name="httpsTriggerUrl" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.httpsTriggerUrl"></a>

```typescript
public readonly httpsTriggerUrl: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `ingressSettings`<sup>Required</sup> <a name="ingressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.ingressSettings"></a>

```typescript
public readonly ingressSettings: string;
```

- *Type:* string

---

##### `kmsKeyName`<sup>Required</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `maxInstances`<sup>Required</sup> <a name="maxInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

---

##### `minInstances`<sup>Required</sup> <a name="minInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.minInstances"></a>

```typescript
public readonly minInstances: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `serviceAccountEmail`<sup>Required</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

---

##### `sourceArchiveBucket`<sup>Required</sup> <a name="sourceArchiveBucket" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveBucket"></a>

```typescript
public readonly sourceArchiveBucket: string;
```

- *Type:* string

---

##### `sourceArchiveObject`<sup>Required</sup> <a name="sourceArchiveObject" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.sourceArchiveObject"></a>

```typescript
public readonly sourceArchiveObject: string;
```

- *Type:* string

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

---

##### `triggerHttp`<sup>Required</sup> <a name="triggerHttp" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.triggerHttp"></a>

```typescript
public readonly triggerHttp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `vpcConnector`<sup>Required</sup> <a name="vpcConnector" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnector"></a>

```typescript
public readonly vpcConnector: string;
```

- *Type:* string

---

##### `vpcConnectorEgressSettings`<sup>Required</sup> <a name="vpcConnectorEgressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.vpcConnectorEgressSettings"></a>

```typescript
public readonly vpcConnectorEgressSettings: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleCloudfunctionsFunctionConfig <a name="GoogleCloudfunctionsFunctionConfig" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

const googleCloudfunctionsFunctionConfig: googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.name">name</a></code> | <code>string</code> | A user-defined name of the function. Function names must be unique globally. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.runtime">runtime</a></code> | <code>string</code> | The runtime in which the function is going to run. Eg. "nodejs12", "nodejs14", "python37", "go111". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.availableMemoryMb">availableMemoryMb</a></code> | <code>number</code> | Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildEnvironmentVariables">buildEnvironmentVariables</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value environment variable pairs available during build time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildServiceAccount">buildServiceAccount</a></code> | <code>string</code> | The fully-qualified name of the service account to be used for the build step of deploying this function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildWorkerPool">buildWorkerPool</a></code> | <code>string</code> | Name of the Cloud Build Custom Worker Pool that should be used to build the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.description">description</a></code> | <code>string</code> | Description of the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRegistry">dockerRegistry</a></code> | <code>string</code> | Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRepository">dockerRepository</a></code> | <code>string</code> | User managed repository created in Artifact Registry optionally with a customer managed encryption key. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.entryPoint">entryPoint</a></code> | <code>string</code> | Name of the function that will be executed when the Google Cloud Function is triggered. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.environmentVariables">environmentVariables</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value environment variable pairs to assign to the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.eventTrigger">eventTrigger</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a></code> | event_trigger block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerSecurityLevel">httpsTriggerSecurityLevel</a></code> | <code>string</code> | The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerUrl">httpsTriggerUrl</a></code> | <code>string</code> | URL which triggers function execution. Returned only if trigger_http is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#id GoogleCloudfunctionsFunction#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.ingressSettings">ingressSettings</a></code> | <code>string</code> | String value that controls what traffic can reach the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.kmsKeyName">kmsKeyName</a></code> | <code>string</code> | Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.maxInstances">maxInstances</a></code> | <code>number</code> | The limit on the maximum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.minInstances">minInstances</a></code> | <code>number</code> | The limit on the minimum number of function instances that may coexist at a given time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.project">project</a></code> | <code>string</code> | Project of the function. If it is not provided, the provider project is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.region">region</a></code> | <code>string</code> | Region of function. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretEnvironmentVariables">secretEnvironmentVariables</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>[]</code> | secret_environment_variables block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretVolumes">secretVolumes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>[]</code> | secret_volumes block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.serviceAccountEmail">serviceAccountEmail</a></code> | <code>string</code> | If provided, the self-provided service account to run the function with. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveBucket">sourceArchiveBucket</a></code> | <code>string</code> | The GCS bucket containing the zip archive which contains the function. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveObject">sourceArchiveObject</a></code> | <code>string</code> | The source archive object (file) in archive bucket. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceRepository">sourceRepository</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a></code> | source_repository block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeout">timeout</a></code> | <code>number</code> | Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.triggerHttp">triggerHttp</a></code> | <code>boolean \| cdktf.IResolvable</code> | Boolean variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnector">vpcConnector</a></code> | <code>string</code> | The VPC Network Connector that this cloud function can connect to. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnectorEgressSettings">vpcConnectorEgressSettings</a></code> | <code>string</code> | The egress settings for the connector, controlling what traffic is diverted through it. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

A user-defined name of the function. Function names must be unique globally.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#name GoogleCloudfunctionsFunction#name}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

The runtime in which the function is going to run. Eg. "nodejs12", "nodejs14", "python37", "go111".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#runtime GoogleCloudfunctionsFunction#runtime}

---

##### `availableMemoryMb`<sup>Optional</sup> <a name="availableMemoryMb" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.availableMemoryMb"></a>

```typescript
public readonly availableMemoryMb: number;
```

- *Type:* number

Memory (in MB), available to the function. Default value is 256. Possible values include 128, 256, 512, 1024, etc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#available_memory_mb GoogleCloudfunctionsFunction#available_memory_mb}

---

##### `buildEnvironmentVariables`<sup>Optional</sup> <a name="buildEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildEnvironmentVariables"></a>

```typescript
public readonly buildEnvironmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value environment variable pairs available during build time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#build_environment_variables GoogleCloudfunctionsFunction#build_environment_variables}

---

##### `buildServiceAccount`<sup>Optional</sup> <a name="buildServiceAccount" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildServiceAccount"></a>

```typescript
public readonly buildServiceAccount: string;
```

- *Type:* string

The fully-qualified name of the service account to be used for the build step of deploying this function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#build_service_account GoogleCloudfunctionsFunction#build_service_account}

---

##### `buildWorkerPool`<sup>Optional</sup> <a name="buildWorkerPool" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.buildWorkerPool"></a>

```typescript
public readonly buildWorkerPool: string;
```

- *Type:* string

Name of the Cloud Build Custom Worker Pool that should be used to build the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#build_worker_pool GoogleCloudfunctionsFunction#build_worker_pool}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Description of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#description GoogleCloudfunctionsFunction#description}

---

##### `dockerRegistry`<sup>Optional</sup> <a name="dockerRegistry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRegistry"></a>

```typescript
public readonly dockerRegistry: string;
```

- *Type:* string

Docker Registry to use for storing the function's Docker images. Allowed values are ARTIFACT_REGISTRY (default) and CONTAINER_REGISTRY.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#docker_registry GoogleCloudfunctionsFunction#docker_registry}

---

##### `dockerRepository`<sup>Optional</sup> <a name="dockerRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.dockerRepository"></a>

```typescript
public readonly dockerRepository: string;
```

- *Type:* string

User managed repository created in Artifact Registry optionally with a customer managed encryption key.

If specified, deployments will use Artifact Registry for storing images built with Cloud Build.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#docker_repository GoogleCloudfunctionsFunction#docker_repository}

---

##### `entryPoint`<sup>Optional</sup> <a name="entryPoint" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.entryPoint"></a>

```typescript
public readonly entryPoint: string;
```

- *Type:* string

Name of the function that will be executed when the Google Cloud Function is triggered.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#entry_point GoogleCloudfunctionsFunction#entry_point}

---

##### `environmentVariables`<sup>Optional</sup> <a name="environmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.environmentVariables"></a>

```typescript
public readonly environmentVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value environment variable pairs to assign to the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#environment_variables GoogleCloudfunctionsFunction#environment_variables}

---

##### `eventTrigger`<sup>Optional</sup> <a name="eventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.eventTrigger"></a>

```typescript
public readonly eventTrigger: GoogleCloudfunctionsFunctionEventTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

event_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#event_trigger GoogleCloudfunctionsFunction#event_trigger}

---

##### `httpsTriggerSecurityLevel`<sup>Optional</sup> <a name="httpsTriggerSecurityLevel" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerSecurityLevel"></a>

```typescript
public readonly httpsTriggerSecurityLevel: string;
```

- *Type:* string

The security level for the function. Defaults to SECURE_OPTIONAL. Valid only if trigger_http is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#https_trigger_security_level GoogleCloudfunctionsFunction#https_trigger_security_level}

---

##### `httpsTriggerUrl`<sup>Optional</sup> <a name="httpsTriggerUrl" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.httpsTriggerUrl"></a>

```typescript
public readonly httpsTriggerUrl: string;
```

- *Type:* string

URL which triggers function execution. Returned only if trigger_http is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#https_trigger_url GoogleCloudfunctionsFunction#https_trigger_url}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#id GoogleCloudfunctionsFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ingressSettings`<sup>Optional</sup> <a name="ingressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.ingressSettings"></a>

```typescript
public readonly ingressSettings: string;
```

- *Type:* string

String value that controls what traffic can reach the function.

Allowed values are ALLOW_ALL and ALLOW_INTERNAL_ONLY. Changes to this field will recreate the cloud function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#ingress_settings GoogleCloudfunctionsFunction#ingress_settings}

---

##### `kmsKeyName`<sup>Optional</sup> <a name="kmsKeyName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.kmsKeyName"></a>

```typescript
public readonly kmsKeyName: string;
```

- *Type:* string

Resource name of a KMS crypto key (managed by the user) used to encrypt/decrypt function resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#kms_key_name GoogleCloudfunctionsFunction#kms_key_name}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A set of key/value label pairs to assign to the function. Label keys must follow the requirements at https://cloud.google.com/resource-manager/docs/creating-managing-labels#requirements.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
				Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#labels GoogleCloudfunctionsFunction#labels}

---

##### `maxInstances`<sup>Optional</sup> <a name="maxInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.maxInstances"></a>

```typescript
public readonly maxInstances: number;
```

- *Type:* number

The limit on the maximum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#max_instances GoogleCloudfunctionsFunction#max_instances}

---

##### `minInstances`<sup>Optional</sup> <a name="minInstances" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.minInstances"></a>

```typescript
public readonly minInstances: number;
```

- *Type:* number

The limit on the minimum number of function instances that may coexist at a given time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#min_instances GoogleCloudfunctionsFunction#min_instances}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Project of the function. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#project GoogleCloudfunctionsFunction#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Region of function. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#region GoogleCloudfunctionsFunction#region}

---

##### `secretEnvironmentVariables`<sup>Optional</sup> <a name="secretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretEnvironmentVariables"></a>

```typescript
public readonly secretEnvironmentVariables: IResolvable | GoogleCloudfunctionsFunctionSecretEnvironmentVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>[]

secret_environment_variables block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#secret_environment_variables GoogleCloudfunctionsFunction#secret_environment_variables}

---

##### `secretVolumes`<sup>Optional</sup> <a name="secretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.secretVolumes"></a>

```typescript
public readonly secretVolumes: IResolvable | GoogleCloudfunctionsFunctionSecretVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>[]

secret_volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#secret_volumes GoogleCloudfunctionsFunction#secret_volumes}

---

##### `serviceAccountEmail`<sup>Optional</sup> <a name="serviceAccountEmail" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.serviceAccountEmail"></a>

```typescript
public readonly serviceAccountEmail: string;
```

- *Type:* string

If provided, the self-provided service account to run the function with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#service_account_email GoogleCloudfunctionsFunction#service_account_email}

---

##### `sourceArchiveBucket`<sup>Optional</sup> <a name="sourceArchiveBucket" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveBucket"></a>

```typescript
public readonly sourceArchiveBucket: string;
```

- *Type:* string

The GCS bucket containing the zip archive which contains the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#source_archive_bucket GoogleCloudfunctionsFunction#source_archive_bucket}

---

##### `sourceArchiveObject`<sup>Optional</sup> <a name="sourceArchiveObject" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceArchiveObject"></a>

```typescript
public readonly sourceArchiveObject: string;
```

- *Type:* string

The source archive object (file) in archive bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#source_archive_object GoogleCloudfunctionsFunction#source_archive_object}

---

##### `sourceRepository`<sup>Optional</sup> <a name="sourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.sourceRepository"></a>

```typescript
public readonly sourceRepository: GoogleCloudfunctionsFunctionSourceRepository;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

source_repository block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#source_repository GoogleCloudfunctionsFunction#source_repository}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeout"></a>

```typescript
public readonly timeout: number;
```

- *Type:* number

Timeout (in seconds) for the function. Default value is 60 seconds. Cannot be more than 540 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#timeout GoogleCloudfunctionsFunction#timeout}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleCloudfunctionsFunctionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#timeouts GoogleCloudfunctionsFunction#timeouts}

---

##### `triggerHttp`<sup>Optional</sup> <a name="triggerHttp" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.triggerHttp"></a>

```typescript
public readonly triggerHttp: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Boolean variable.

Any HTTP request (of a supported type) to the endpoint will trigger function execution. Supported HTTP request types are: POST, PUT, GET, DELETE, and OPTIONS. Endpoint is returned as https_trigger_url. Cannot be used with trigger_bucket and trigger_topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#trigger_http GoogleCloudfunctionsFunction#trigger_http}

---

##### `vpcConnector`<sup>Optional</sup> <a name="vpcConnector" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnector"></a>

```typescript
public readonly vpcConnector: string;
```

- *Type:* string

The VPC Network Connector that this cloud function can connect to.

It can be either the fully-qualified URI, or the short name of the network connector resource. The format of this field is projects/* /locations/* /connectors/*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#vpc_connector GoogleCloudfunctionsFunction#vpc_connector}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `vpcConnectorEgressSettings`<sup>Optional</sup> <a name="vpcConnectorEgressSettings" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionConfig.property.vpcConnectorEgressSettings"></a>

```typescript
public readonly vpcConnectorEgressSettings: string;
```

- *Type:* string

The egress settings for the connector, controlling what traffic is diverted through it.

Allowed values are ALL_TRAFFIC and PRIVATE_RANGES_ONLY. Defaults to PRIVATE_RANGES_ONLY. If unset, this field preserves the previously set value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#vpc_connector_egress_settings GoogleCloudfunctionsFunction#vpc_connector_egress_settings}

---

### GoogleCloudfunctionsFunctionEventTrigger <a name="GoogleCloudfunctionsFunctionEventTrigger" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

const googleCloudfunctionsFunctionEventTrigger: googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.eventType">eventType</a></code> | <code>string</code> | The type of event to observe. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.resource">resource</a></code> | <code>string</code> | The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic". |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.failurePolicy">failurePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | failure_policy block. |

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

The type of event to observe.

For example: "google.storage.object.finalize". See the documentation on calling Cloud Functions for a full reference of accepted triggers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#event_type GoogleCloudfunctionsFunction#event_type}

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

The name or partial URI of the resource from which to observe events. For example, "myBucket" or "projects/my-project/topics/my-topic".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#resource GoogleCloudfunctionsFunction#resource}

---

##### `failurePolicy`<sup>Optional</sup> <a name="failurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger.property.failurePolicy"></a>

```typescript
public readonly failurePolicy: GoogleCloudfunctionsFunctionEventTriggerFailurePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

failure_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#failure_policy GoogleCloudfunctionsFunction#failure_policy}

---

### GoogleCloudfunctionsFunctionEventTriggerFailurePolicy <a name="GoogleCloudfunctionsFunctionEventTriggerFailurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

const googleCloudfunctionsFunctionEventTriggerFailurePolicy: googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy.property.retry">retry</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether the function should be retried on failure. Defaults to false. |

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy.property.retry"></a>

```typescript
public readonly retry: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether the function should be retried on failure. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#retry GoogleCloudfunctionsFunction#retry}

---

### GoogleCloudfunctionsFunctionSecretEnvironmentVariables <a name="GoogleCloudfunctionsFunctionSecretEnvironmentVariables" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

const googleCloudfunctionsFunctionSecretEnvironmentVariables: googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.key">key</a></code> | <code>string</code> | Name of the environment variable. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.secret">secret</a></code> | <code>string</code> | ID of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.version">version</a></code> | <code>string</code> | Version of the secret (version number or the string "latest"). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.projectId">projectId</a></code> | <code>string</code> | Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Name of the environment variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#key GoogleCloudfunctionsFunction#key}

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

ID of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#secret GoogleCloudfunctionsFunction#secret}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the secret (version number or the string "latest").

It is recommended to use a numeric version for secret environment variables as any updates to the secret value is not reflected until new clones start.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#version GoogleCloudfunctionsFunction#version}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret.

If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#project_id GoogleCloudfunctionsFunction#project_id}

---

### GoogleCloudfunctionsFunctionSecretVolumes <a name="GoogleCloudfunctionsFunctionSecretVolumes" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

const googleCloudfunctionsFunctionSecretVolumes: googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.mountPath">mountPath</a></code> | <code>string</code> | The path within the container to mount the secret volume. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.secret">secret</a></code> | <code>string</code> | ID of the secret in secret manager (not the full resource name). |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.projectId">projectId</a></code> | <code>string</code> | Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.versions">versions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>[]</code> | versions block. |

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

The path within the container to mount the secret volume.

For example, setting the mount_path as "/etc/secrets" would mount the secret value files under the "/etc/secrets" directory. This directory will also be completely shadowed and unavailable to mount any other secrets. Recommended mount paths: "/etc/secrets" Restricted mount paths: "/cloudsql", "/dev/log", "/pod", "/proc", "/var/log".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#mount_path GoogleCloudfunctionsFunction#mount_path}

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

ID of the secret in secret manager (not the full resource name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#secret GoogleCloudfunctionsFunction#secret}

---

##### `projectId`<sup>Optional</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

Project identifier (due to a known limitation, only project number is supported by this field) of the project that contains the secret.

If not set, it will be populated with the function's project, assuming that the secret exists in the same project as of the function.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#project_id GoogleCloudfunctionsFunction#project_id}

---

##### `versions`<sup>Optional</sup> <a name="versions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes.property.versions"></a>

```typescript
public readonly versions: IResolvable | GoogleCloudfunctionsFunctionSecretVolumesVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>[]

versions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#versions GoogleCloudfunctionsFunction#versions}

---

### GoogleCloudfunctionsFunctionSecretVolumesVersions <a name="GoogleCloudfunctionsFunctionSecretVolumesVersions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

const googleCloudfunctionsFunctionSecretVolumesVersions: googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.path">path</a></code> | <code>string</code> | Relative path of the file under the mount path where the secret value for this version will be fetched and made available. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.version">version</a></code> | <code>string</code> | Version of the secret (version number or the string "latest"). |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Relative path of the file under the mount path where the secret value for this version will be fetched and made available.

For example, setting the mount_path as "/etc/secrets" and path as "/secret_foo" would mount the secret value file at "/etc/secrets/secret_foo".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#path GoogleCloudfunctionsFunction#path}

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

Version of the secret (version number or the string "latest").

It is preferable to use "latest" version with secret volumes as secret value changes are reflected immediately.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#version GoogleCloudfunctionsFunction#version}

---

### GoogleCloudfunctionsFunctionSourceRepository <a name="GoogleCloudfunctionsFunctionSourceRepository" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

const googleCloudfunctionsFunctionSourceRepository: googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository.property.url">url</a></code> | <code>string</code> | The URL pointing to the hosted repository where the function is defined. |

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

The URL pointing to the hosted repository where the function is defined.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#url GoogleCloudfunctionsFunction#url}

---

### GoogleCloudfunctionsFunctionTimeouts <a name="GoogleCloudfunctionsFunctionTimeouts" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

const googleCloudfunctionsFunctionTimeouts: googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#create GoogleCloudfunctionsFunction#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#delete GoogleCloudfunctionsFunction#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.read">read</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#read GoogleCloudfunctionsFunction#read}. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#update GoogleCloudfunctionsFunction#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#create GoogleCloudfunctionsFunction#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#delete GoogleCloudfunctionsFunction#delete}.

---

##### `read`<sup>Optional</sup> <a name="read" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#read GoogleCloudfunctionsFunction#read}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.19.0/docs/resources/google_cloudfunctions_function#update GoogleCloudfunctionsFunction#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference <a name="GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

new googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retryInput">retryInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry">retry</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `retryInput`<sup>Optional</sup> <a name="retryInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retryInput"></a>

```typescript
public readonly retryInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `retry`<sup>Required</sup> <a name="retry" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.retry"></a>

```typescript
public readonly retry: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudfunctionsFunctionEventTriggerFailurePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

---


### GoogleCloudfunctionsFunctionEventTriggerOutputReference <a name="GoogleCloudfunctionsFunctionEventTriggerOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

new googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy">putFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resetFailurePolicy">resetFailurePolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFailurePolicy` <a name="putFailurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy"></a>

```typescript
public putFailurePolicy(value: GoogleCloudfunctionsFunctionEventTriggerFailurePolicy): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.putFailurePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

---

##### `resetFailurePolicy` <a name="resetFailurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.resetFailurePolicy"></a>

```typescript
public resetFailurePolicy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy">failurePolicy</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference">GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventTypeInput">eventTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicyInput">failurePolicyInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resourceInput">resourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventType">eventType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resource">resource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `failurePolicy`<sup>Required</sup> <a name="failurePolicy" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicy"></a>

```typescript
public readonly failurePolicy: GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference">GoogleCloudfunctionsFunctionEventTriggerFailurePolicyOutputReference</a>

---

##### `eventTypeInput`<sup>Optional</sup> <a name="eventTypeInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventTypeInput"></a>

```typescript
public readonly eventTypeInput: string;
```

- *Type:* string

---

##### `failurePolicyInput`<sup>Optional</sup> <a name="failurePolicyInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.failurePolicyInput"></a>

```typescript
public readonly failurePolicyInput: GoogleCloudfunctionsFunctionEventTriggerFailurePolicy;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerFailurePolicy">GoogleCloudfunctionsFunctionEventTriggerFailurePolicy</a>

---

##### `resourceInput`<sup>Optional</sup> <a name="resourceInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resourceInput"></a>

```typescript
public readonly resourceInput: string;
```

- *Type:* string

---

##### `eventType`<sup>Required</sup> <a name="eventType" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.eventType"></a>

```typescript
public readonly eventType: string;
```

- *Type:* string

---

##### `resource`<sup>Required</sup> <a name="resource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.resource"></a>

```typescript
public readonly resource: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTriggerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudfunctionsFunctionEventTrigger;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionEventTrigger">GoogleCloudfunctionsFunctionEventTrigger</a>

---


### GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList <a name="GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

new googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get"></a>

```typescript
public get(index: number): GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctionsFunctionSecretEnvironmentVariables[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>[]

---


### GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference <a name="GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

new googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariablesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctionsFunctionSecretEnvironmentVariables;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretEnvironmentVariables">GoogleCloudfunctionsFunctionSecretEnvironmentVariables</a>

---


### GoogleCloudfunctionsFunctionSecretVolumesList <a name="GoogleCloudfunctionsFunctionSecretVolumesList" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

new googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.get"></a>

```typescript
public get(index: number): GoogleCloudfunctionsFunctionSecretVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctionsFunctionSecretVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>[]

---


### GoogleCloudfunctionsFunctionSecretVolumesOutputReference <a name="GoogleCloudfunctionsFunctionSecretVolumesOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

new googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.putVersions">putVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetProjectId">resetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetVersions">resetVersions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVersions` <a name="putVersions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.putVersions"></a>

```typescript
public putVersions(value: IResolvable | GoogleCloudfunctionsFunctionSecretVolumesVersions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.putVersions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>[]

---

##### `resetProjectId` <a name="resetProjectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetProjectId"></a>

```typescript
public resetProjectId(): void
```

##### `resetVersions` <a name="resetVersions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.resetVersions"></a>

```typescript
public resetVersions(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versions">versions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList">GoogleCloudfunctionsFunctionSecretVolumesVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPathInput">mountPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectIdInput">projectIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secretInput">secretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versionsInput">versionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath">mountPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectId">projectId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secret">secret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `versions`<sup>Required</sup> <a name="versions" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versions"></a>

```typescript
public readonly versions: GoogleCloudfunctionsFunctionSecretVolumesVersionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList">GoogleCloudfunctionsFunctionSecretVolumesVersionsList</a>

---

##### `mountPathInput`<sup>Optional</sup> <a name="mountPathInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPathInput"></a>

```typescript
public readonly mountPathInput: string;
```

- *Type:* string

---

##### `projectIdInput`<sup>Optional</sup> <a name="projectIdInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectIdInput"></a>

```typescript
public readonly projectIdInput: string;
```

- *Type:* string

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secretInput"></a>

```typescript
public readonly secretInput: string;
```

- *Type:* string

---

##### `versionsInput`<sup>Optional</sup> <a name="versionsInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.versionsInput"></a>

```typescript
public readonly versionsInput: IResolvable | GoogleCloudfunctionsFunctionSecretVolumesVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>[]

---

##### `mountPath`<sup>Required</sup> <a name="mountPath" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.mountPath"></a>

```typescript
public readonly mountPath: string;
```

- *Type:* string

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.projectId"></a>

```typescript
public readonly projectId: string;
```

- *Type:* string

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.secret"></a>

```typescript
public readonly secret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctionsFunctionSecretVolumes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumes">GoogleCloudfunctionsFunctionSecretVolumes</a>

---


### GoogleCloudfunctionsFunctionSecretVolumesVersionsList <a name="GoogleCloudfunctionsFunctionSecretVolumesVersionsList" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

new googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.get"></a>

```typescript
public get(index: number): GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctionsFunctionSecretVolumesVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>[]

---


### GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference <a name="GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

new googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctionsFunctionSecretVolumesVersions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSecretVolumesVersions">GoogleCloudfunctionsFunctionSecretVolumesVersions</a>

---


### GoogleCloudfunctionsFunctionSourceRepositoryOutputReference <a name="GoogleCloudfunctionsFunctionSourceRepositoryOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

new googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl">deployedUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deployedUrl`<sup>Required</sup> <a name="deployedUrl" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.deployedUrl"></a>

```typescript
public readonly deployedUrl: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepositoryOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleCloudfunctionsFunctionSourceRepository;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionSourceRepository">GoogleCloudfunctionsFunctionSourceRepository</a>

---


### GoogleCloudfunctionsFunctionTimeoutsOutputReference <a name="GoogleCloudfunctionsFunctionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleCloudfunctionsFunction } from '@cdktf/provider-google-beta'

new googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetRead">resetRead</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetRead` <a name="resetRead" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetRead"></a>

```typescript
public resetRead(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.readInput">readInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.read">read</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `readInput`<sup>Optional</sup> <a name="readInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.readInput"></a>

```typescript
public readonly readInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `read`<sup>Required</sup> <a name="read" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.read"></a>

```typescript
public readonly read: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleCloudfunctionsFunctionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleCloudfunctionsFunction.GoogleCloudfunctionsFunctionTimeouts">GoogleCloudfunctionsFunctionTimeouts</a>

---




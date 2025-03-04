# `googleAppEngineFlexibleAppVersion` Submodule <a name="`googleAppEngineFlexibleAppVersion` Submodule" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleAppEngineFlexibleAppVersion <a name="GoogleAppEngineFlexibleAppVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version google_app_engine_flexible_app_version}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion(scope: Construct, id: string, config: GoogleAppEngineFlexibleAppVersionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig">GoogleAppEngineFlexibleAppVersionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig">GoogleAppEngineFlexibleAppVersionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putApiConfig">putApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putAutomaticScaling">putAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putDeployment">putDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEndpointsApiService">putEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEntrypoint">putEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putFlexibleRuntimeSettings">putFlexibleRuntimeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putHandlers">putHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putLivenessCheck">putLivenessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putManualScaling">putManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putReadinessCheck">putReadinessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putResources">putResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putVpcAccessConnector">putVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetApiConfig">resetApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetAutomaticScaling">resetAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetBetaSettings">resetBetaSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDefaultExpiration">resetDefaultExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDeleteServiceOnDestroy">resetDeleteServiceOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDeployment">resetDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEndpointsApiService">resetEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEntrypoint">resetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEnvVariables">resetEnvVariables</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetFlexibleRuntimeSettings">resetFlexibleRuntimeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetHandlers">resetHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetInboundServices">resetInboundServices</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetInstanceClass">resetInstanceClass</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetManualScaling">resetManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNobuildFilesRegex">resetNobuildFilesRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNoopOnDestroy">resetNoopOnDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetResources">resetResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeApiVersion">resetRuntimeApiVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeChannel">resetRuntimeChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeMainExecutablePath">resetRuntimeMainExecutablePath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetServingStatus">resetServingStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetVersionId">resetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetVpcAccessConnector">resetVpcAccessConnector</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putApiConfig` <a name="putApiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putApiConfig"></a>

```typescript
public putApiConfig(value: GoogleAppEngineFlexibleAppVersionApiConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putApiConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a>

---

##### `putAutomaticScaling` <a name="putAutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putAutomaticScaling"></a>

```typescript
public putAutomaticScaling(value: GoogleAppEngineFlexibleAppVersionAutomaticScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putAutomaticScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a>

---

##### `putDeployment` <a name="putDeployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putDeployment"></a>

```typescript
public putDeployment(value: GoogleAppEngineFlexibleAppVersionDeployment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putDeployment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a>

---

##### `putEndpointsApiService` <a name="putEndpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEndpointsApiService"></a>

```typescript
public putEndpointsApiService(value: GoogleAppEngineFlexibleAppVersionEndpointsApiService): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEndpointsApiService.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a>

---

##### `putEntrypoint` <a name="putEntrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEntrypoint"></a>

```typescript
public putEntrypoint(value: GoogleAppEngineFlexibleAppVersionEntrypoint): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putEntrypoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a>

---

##### `putFlexibleRuntimeSettings` <a name="putFlexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putFlexibleRuntimeSettings"></a>

```typescript
public putFlexibleRuntimeSettings(value: GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putFlexibleRuntimeSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a>

---

##### `putHandlers` <a name="putHandlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putHandlers"></a>

```typescript
public putHandlers(value: IResolvable | GoogleAppEngineFlexibleAppVersionHandlers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putHandlers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers">GoogleAppEngineFlexibleAppVersionHandlers</a>[]

---

##### `putLivenessCheck` <a name="putLivenessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putLivenessCheck"></a>

```typescript
public putLivenessCheck(value: GoogleAppEngineFlexibleAppVersionLivenessCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putLivenessCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a>

---

##### `putManualScaling` <a name="putManualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putManualScaling"></a>

```typescript
public putManualScaling(value: GoogleAppEngineFlexibleAppVersionManualScaling): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putManualScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putNetwork"></a>

```typescript
public putNetwork(value: GoogleAppEngineFlexibleAppVersionNetwork): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a>

---

##### `putReadinessCheck` <a name="putReadinessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putReadinessCheck"></a>

```typescript
public putReadinessCheck(value: GoogleAppEngineFlexibleAppVersionReadinessCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putReadinessCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a>

---

##### `putResources` <a name="putResources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putResources"></a>

```typescript
public putResources(value: GoogleAppEngineFlexibleAppVersionResources): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putResources.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleAppEngineFlexibleAppVersionTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts">GoogleAppEngineFlexibleAppVersionTimeouts</a>

---

##### `putVpcAccessConnector` <a name="putVpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putVpcAccessConnector"></a>

```typescript
public putVpcAccessConnector(value: GoogleAppEngineFlexibleAppVersionVpcAccessConnector): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.putVpcAccessConnector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a>

---

##### `resetApiConfig` <a name="resetApiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetApiConfig"></a>

```typescript
public resetApiConfig(): void
```

##### `resetAutomaticScaling` <a name="resetAutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetAutomaticScaling"></a>

```typescript
public resetAutomaticScaling(): void
```

##### `resetBetaSettings` <a name="resetBetaSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetBetaSettings"></a>

```typescript
public resetBetaSettings(): void
```

##### `resetDefaultExpiration` <a name="resetDefaultExpiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDefaultExpiration"></a>

```typescript
public resetDefaultExpiration(): void
```

##### `resetDeleteServiceOnDestroy` <a name="resetDeleteServiceOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDeleteServiceOnDestroy"></a>

```typescript
public resetDeleteServiceOnDestroy(): void
```

##### `resetDeployment` <a name="resetDeployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetDeployment"></a>

```typescript
public resetDeployment(): void
```

##### `resetEndpointsApiService` <a name="resetEndpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEndpointsApiService"></a>

```typescript
public resetEndpointsApiService(): void
```

##### `resetEntrypoint` <a name="resetEntrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEntrypoint"></a>

```typescript
public resetEntrypoint(): void
```

##### `resetEnvVariables` <a name="resetEnvVariables" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetEnvVariables"></a>

```typescript
public resetEnvVariables(): void
```

##### `resetFlexibleRuntimeSettings` <a name="resetFlexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetFlexibleRuntimeSettings"></a>

```typescript
public resetFlexibleRuntimeSettings(): void
```

##### `resetHandlers` <a name="resetHandlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetHandlers"></a>

```typescript
public resetHandlers(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInboundServices` <a name="resetInboundServices" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetInboundServices"></a>

```typescript
public resetInboundServices(): void
```

##### `resetInstanceClass` <a name="resetInstanceClass" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetInstanceClass"></a>

```typescript
public resetInstanceClass(): void
```

##### `resetManualScaling` <a name="resetManualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetManualScaling"></a>

```typescript
public resetManualScaling(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNobuildFilesRegex` <a name="resetNobuildFilesRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNobuildFilesRegex"></a>

```typescript
public resetNobuildFilesRegex(): void
```

##### `resetNoopOnDestroy` <a name="resetNoopOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetNoopOnDestroy"></a>

```typescript
public resetNoopOnDestroy(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetResources` <a name="resetResources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetResources"></a>

```typescript
public resetResources(): void
```

##### `resetRuntimeApiVersion` <a name="resetRuntimeApiVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeApiVersion"></a>

```typescript
public resetRuntimeApiVersion(): void
```

##### `resetRuntimeChannel` <a name="resetRuntimeChannel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeChannel"></a>

```typescript
public resetRuntimeChannel(): void
```

##### `resetRuntimeMainExecutablePath` <a name="resetRuntimeMainExecutablePath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetRuntimeMainExecutablePath"></a>

```typescript
public resetRuntimeMainExecutablePath(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetServingStatus` <a name="resetServingStatus" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetServingStatus"></a>

```typescript
public resetServingStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetVersionId` <a name="resetVersionId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetVersionId"></a>

```typescript
public resetVersionId(): void
```

##### `resetVpcAccessConnector` <a name="resetVpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.resetVpcAccessConnector"></a>

```typescript
public resetVpcAccessConnector(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleAppEngineFlexibleAppVersion resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isConstruct"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformElement"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformResource"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleAppEngineFlexibleAppVersion resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleAppEngineFlexibleAppVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleAppEngineFlexibleAppVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleAppEngineFlexibleAppVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.apiConfig">apiConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference">GoogleAppEngineFlexibleAppVersionApiConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.automaticScaling">automaticScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.endpointsApiService">endpointsApiService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference">GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference">GoogleAppEngineFlexibleAppVersionEntrypointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.flexibleRuntimeSettings">flexibleRuntimeSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.handlers">handlers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList">GoogleAppEngineFlexibleAppVersionHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.livenessCheck">livenessCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference">GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.manualScaling">manualScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference">GoogleAppEngineFlexibleAppVersionManualScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.network">network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference">GoogleAppEngineFlexibleAppVersionNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.readinessCheck">readinessCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference">GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference">GoogleAppEngineFlexibleAppVersionResourcesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference">GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.vpcAccessConnector">vpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference">GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.apiConfigInput">apiConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.automaticScalingInput">automaticScalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.betaSettingsInput">betaSettingsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.defaultExpirationInput">defaultExpirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deleteServiceOnDestroyInput">deleteServiceOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deploymentInput">deploymentInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.endpointsApiServiceInput">endpointsApiServiceInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.entrypointInput">entrypointInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.envVariablesInput">envVariablesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.flexibleRuntimeSettingsInput">flexibleRuntimeSettingsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.handlersInput">handlersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers">GoogleAppEngineFlexibleAppVersionHandlers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.inboundServicesInput">inboundServicesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.instanceClassInput">instanceClassInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.livenessCheckInput">livenessCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.manualScalingInput">manualScalingInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.networkInput">networkInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.nobuildFilesRegexInput">nobuildFilesRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.noopOnDestroyInput">noopOnDestroyInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.readinessCheckInput">readinessCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.resourcesInput">resourcesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeApiVersionInput">runtimeApiVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeChannelInput">runtimeChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeInput">runtimeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeMainExecutablePathInput">runtimeMainExecutablePathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceInput">serviceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.servingStatusInput">servingStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts">GoogleAppEngineFlexibleAppVersionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.versionIdInput">versionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.vpcAccessConnectorInput">vpcAccessConnectorInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.betaSettings">betaSettings</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.defaultExpiration">defaultExpiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deleteServiceOnDestroy">deleteServiceOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.envVariables">envVariables</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.inboundServices">inboundServices</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.instanceClass">instanceClass</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.nobuildFilesRegex">nobuildFilesRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.noopOnDestroy">noopOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtime">runtime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeApiVersion">runtimeApiVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeChannel">runtimeChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeMainExecutablePath">runtimeMainExecutablePath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.servingStatus">servingStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.versionId">versionId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiConfig`<sup>Required</sup> <a name="apiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.apiConfig"></a>

```typescript
public readonly apiConfig: GoogleAppEngineFlexibleAppVersionApiConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference">GoogleAppEngineFlexibleAppVersionApiConfigOutputReference</a>

---

##### `automaticScaling`<sup>Required</sup> <a name="automaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.automaticScaling"></a>

```typescript
public readonly automaticScaling: GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference</a>

---

##### `deployment`<sup>Required</sup> <a name="deployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deployment"></a>

```typescript
public readonly deployment: GoogleAppEngineFlexibleAppVersionDeploymentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentOutputReference</a>

---

##### `endpointsApiService`<sup>Required</sup> <a name="endpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.endpointsApiService"></a>

```typescript
public readonly endpointsApiService: GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference">GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference</a>

---

##### `entrypoint`<sup>Required</sup> <a name="entrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.entrypoint"></a>

```typescript
public readonly entrypoint: GoogleAppEngineFlexibleAppVersionEntrypointOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference">GoogleAppEngineFlexibleAppVersionEntrypointOutputReference</a>

---

##### `flexibleRuntimeSettings`<sup>Required</sup> <a name="flexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.flexibleRuntimeSettings"></a>

```typescript
public readonly flexibleRuntimeSettings: GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference</a>

---

##### `handlers`<sup>Required</sup> <a name="handlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.handlers"></a>

```typescript
public readonly handlers: GoogleAppEngineFlexibleAppVersionHandlersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList">GoogleAppEngineFlexibleAppVersionHandlersList</a>

---

##### `livenessCheck`<sup>Required</sup> <a name="livenessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.livenessCheck"></a>

```typescript
public readonly livenessCheck: GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference">GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference</a>

---

##### `manualScaling`<sup>Required</sup> <a name="manualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.manualScaling"></a>

```typescript
public readonly manualScaling: GoogleAppEngineFlexibleAppVersionManualScalingOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference">GoogleAppEngineFlexibleAppVersionManualScalingOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.network"></a>

```typescript
public readonly network: GoogleAppEngineFlexibleAppVersionNetworkOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference">GoogleAppEngineFlexibleAppVersionNetworkOutputReference</a>

---

##### `readinessCheck`<sup>Required</sup> <a name="readinessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.readinessCheck"></a>

```typescript
public readonly readinessCheck: GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference">GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference</a>

---

##### `resources`<sup>Required</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.resources"></a>

```typescript
public readonly resources: GoogleAppEngineFlexibleAppVersionResourcesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference">GoogleAppEngineFlexibleAppVersionResourcesOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference">GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference</a>

---

##### `vpcAccessConnector`<sup>Required</sup> <a name="vpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.vpcAccessConnector"></a>

```typescript
public readonly vpcAccessConnector: GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference">GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference</a>

---

##### `apiConfigInput`<sup>Optional</sup> <a name="apiConfigInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.apiConfigInput"></a>

```typescript
public readonly apiConfigInput: GoogleAppEngineFlexibleAppVersionApiConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a>

---

##### `automaticScalingInput`<sup>Optional</sup> <a name="automaticScalingInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.automaticScalingInput"></a>

```typescript
public readonly automaticScalingInput: GoogleAppEngineFlexibleAppVersionAutomaticScaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a>

---

##### `betaSettingsInput`<sup>Optional</sup> <a name="betaSettingsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.betaSettingsInput"></a>

```typescript
public readonly betaSettingsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultExpirationInput`<sup>Optional</sup> <a name="defaultExpirationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.defaultExpirationInput"></a>

```typescript
public readonly defaultExpirationInput: string;
```

- *Type:* string

---

##### `deleteServiceOnDestroyInput`<sup>Optional</sup> <a name="deleteServiceOnDestroyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deleteServiceOnDestroyInput"></a>

```typescript
public readonly deleteServiceOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `deploymentInput`<sup>Optional</sup> <a name="deploymentInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deploymentInput"></a>

```typescript
public readonly deploymentInput: GoogleAppEngineFlexibleAppVersionDeployment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a>

---

##### `endpointsApiServiceInput`<sup>Optional</sup> <a name="endpointsApiServiceInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.endpointsApiServiceInput"></a>

```typescript
public readonly endpointsApiServiceInput: GoogleAppEngineFlexibleAppVersionEndpointsApiService;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a>

---

##### `entrypointInput`<sup>Optional</sup> <a name="entrypointInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.entrypointInput"></a>

```typescript
public readonly entrypointInput: GoogleAppEngineFlexibleAppVersionEntrypoint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a>

---

##### `envVariablesInput`<sup>Optional</sup> <a name="envVariablesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.envVariablesInput"></a>

```typescript
public readonly envVariablesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `flexibleRuntimeSettingsInput`<sup>Optional</sup> <a name="flexibleRuntimeSettingsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.flexibleRuntimeSettingsInput"></a>

```typescript
public readonly flexibleRuntimeSettingsInput: GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a>

---

##### `handlersInput`<sup>Optional</sup> <a name="handlersInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.handlersInput"></a>

```typescript
public readonly handlersInput: IResolvable | GoogleAppEngineFlexibleAppVersionHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers">GoogleAppEngineFlexibleAppVersionHandlers</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inboundServicesInput`<sup>Optional</sup> <a name="inboundServicesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.inboundServicesInput"></a>

```typescript
public readonly inboundServicesInput: string[];
```

- *Type:* string[]

---

##### `instanceClassInput`<sup>Optional</sup> <a name="instanceClassInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.instanceClassInput"></a>

```typescript
public readonly instanceClassInput: string;
```

- *Type:* string

---

##### `livenessCheckInput`<sup>Optional</sup> <a name="livenessCheckInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.livenessCheckInput"></a>

```typescript
public readonly livenessCheckInput: GoogleAppEngineFlexibleAppVersionLivenessCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a>

---

##### `manualScalingInput`<sup>Optional</sup> <a name="manualScalingInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.manualScalingInput"></a>

```typescript
public readonly manualScalingInput: GoogleAppEngineFlexibleAppVersionManualScaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.networkInput"></a>

```typescript
public readonly networkInput: GoogleAppEngineFlexibleAppVersionNetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a>

---

##### `nobuildFilesRegexInput`<sup>Optional</sup> <a name="nobuildFilesRegexInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.nobuildFilesRegexInput"></a>

```typescript
public readonly nobuildFilesRegexInput: string;
```

- *Type:* string

---

##### `noopOnDestroyInput`<sup>Optional</sup> <a name="noopOnDestroyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.noopOnDestroyInput"></a>

```typescript
public readonly noopOnDestroyInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `readinessCheckInput`<sup>Optional</sup> <a name="readinessCheckInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.readinessCheckInput"></a>

```typescript
public readonly readinessCheckInput: GoogleAppEngineFlexibleAppVersionReadinessCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a>

---

##### `resourcesInput`<sup>Optional</sup> <a name="resourcesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.resourcesInput"></a>

```typescript
public readonly resourcesInput: GoogleAppEngineFlexibleAppVersionResources;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a>

---

##### `runtimeApiVersionInput`<sup>Optional</sup> <a name="runtimeApiVersionInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeApiVersionInput"></a>

```typescript
public readonly runtimeApiVersionInput: string;
```

- *Type:* string

---

##### `runtimeChannelInput`<sup>Optional</sup> <a name="runtimeChannelInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeChannelInput"></a>

```typescript
public readonly runtimeChannelInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: string;
```

- *Type:* string

---

##### `runtimeMainExecutablePathInput`<sup>Optional</sup> <a name="runtimeMainExecutablePathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeMainExecutablePathInput"></a>

```typescript
public readonly runtimeMainExecutablePathInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceInput"></a>

```typescript
public readonly serviceInput: string;
```

- *Type:* string

---

##### `servingStatusInput`<sup>Optional</sup> <a name="servingStatusInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.servingStatusInput"></a>

```typescript
public readonly servingStatusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleAppEngineFlexibleAppVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts">GoogleAppEngineFlexibleAppVersionTimeouts</a>

---

##### `versionIdInput`<sup>Optional</sup> <a name="versionIdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.versionIdInput"></a>

```typescript
public readonly versionIdInput: string;
```

- *Type:* string

---

##### `vpcAccessConnectorInput`<sup>Optional</sup> <a name="vpcAccessConnectorInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.vpcAccessConnectorInput"></a>

```typescript
public readonly vpcAccessConnectorInput: GoogleAppEngineFlexibleAppVersionVpcAccessConnector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a>

---

##### `betaSettings`<sup>Required</sup> <a name="betaSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.betaSettings"></a>

```typescript
public readonly betaSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultExpiration`<sup>Required</sup> <a name="defaultExpiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.defaultExpiration"></a>

```typescript
public readonly defaultExpiration: string;
```

- *Type:* string

---

##### `deleteServiceOnDestroy`<sup>Required</sup> <a name="deleteServiceOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.deleteServiceOnDestroy"></a>

```typescript
public readonly deleteServiceOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `envVariables`<sup>Required</sup> <a name="envVariables" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.envVariables"></a>

```typescript
public readonly envVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inboundServices`<sup>Required</sup> <a name="inboundServices" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.inboundServices"></a>

```typescript
public readonly inboundServices: string[];
```

- *Type:* string[]

---

##### `instanceClass`<sup>Required</sup> <a name="instanceClass" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

---

##### `nobuildFilesRegex`<sup>Required</sup> <a name="nobuildFilesRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.nobuildFilesRegex"></a>

```typescript
public readonly nobuildFilesRegex: string;
```

- *Type:* string

---

##### `noopOnDestroy`<sup>Required</sup> <a name="noopOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.noopOnDestroy"></a>

```typescript
public readonly noopOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

---

##### `runtimeApiVersion`<sup>Required</sup> <a name="runtimeApiVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeApiVersion"></a>

```typescript
public readonly runtimeApiVersion: string;
```

- *Type:* string

---

##### `runtimeChannel`<sup>Required</sup> <a name="runtimeChannel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeChannel"></a>

```typescript
public readonly runtimeChannel: string;
```

- *Type:* string

---

##### `runtimeMainExecutablePath`<sup>Required</sup> <a name="runtimeMainExecutablePath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.runtimeMainExecutablePath"></a>

```typescript
public readonly runtimeMainExecutablePath: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `servingStatus`<sup>Required</sup> <a name="servingStatus" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.servingStatus"></a>

```typescript
public readonly servingStatus: string;
```

- *Type:* string

---

##### `versionId`<sup>Required</sup> <a name="versionId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersion.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleAppEngineFlexibleAppVersionApiConfig <a name="GoogleAppEngineFlexibleAppVersionApiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionApiConfig: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.script">script</a></code> | <code>string</code> | Path to the script from the application root directory. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.authFailAction">authFailAction</a></code> | <code>string</code> | Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.login">login</a></code> | <code>string</code> | Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.securityLevel">securityLevel</a></code> | <code>string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.url">url</a></code> | <code>string</code> | URL to serve the endpoint at. |

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#script GoogleAppEngineFlexibleAppVersion#script}

---

##### `authFailAction`<sup>Optional</sup> <a name="authFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.authFailAction"></a>

```typescript
public readonly authFailAction: string;
```

- *Type:* string

Action to take when users access resources that require authentication. Default value: "AUTH_FAIL_ACTION_REDIRECT" Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#auth_fail_action GoogleAppEngineFlexibleAppVersion#auth_fail_action}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

Level of login required to access this resource. Default value: "LOGIN_OPTIONAL" Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#login GoogleAppEngineFlexibleAppVersion#login}

---

##### `securityLevel`<sup>Optional</sup> <a name="securityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#security_level GoogleAppEngineFlexibleAppVersion#security_level}

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

URL to serve the endpoint at.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#url GoogleAppEngineFlexibleAppVersion#url}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScaling <a name="GoogleAppEngineFlexibleAppVersionAutomaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionAutomaticScaling: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.cpuUtilization">cpuUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | cpu_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.coolDownPeriod">coolDownPeriod</a></code> | <code>string</code> | The time period that the Autoscaler should wait before it starts collecting information from a new instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.diskUtilization">diskUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | disk_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxConcurrentRequests">maxConcurrentRequests</a></code> | <code>number</code> | Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxIdleInstances">maxIdleInstances</a></code> | <code>number</code> | Maximum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxPendingLatency">maxPendingLatency</a></code> | <code>string</code> | Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxTotalInstances">maxTotalInstances</a></code> | <code>number</code> | Maximum number of instances that should be started to handle requests for this version. Default: 20. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minIdleInstances">minIdleInstances</a></code> | <code>number</code> | Minimum number of idle instances that should be maintained for this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minPendingLatency">minPendingLatency</a></code> | <code>string</code> | Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minTotalInstances">minTotalInstances</a></code> | <code>number</code> | Minimum number of running instances that should be maintained for this version. Default: 2. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.networkUtilization">networkUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | network_utilization block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.requestUtilization">requestUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | request_utilization block. |

---

##### `cpuUtilization`<sup>Required</sup> <a name="cpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.cpuUtilization"></a>

```typescript
public readonly cpuUtilization: GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

cpu_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#cpu_utilization GoogleAppEngineFlexibleAppVersion#cpu_utilization}

---

##### `coolDownPeriod`<sup>Optional</sup> <a name="coolDownPeriod" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.coolDownPeriod"></a>

```typescript
public readonly coolDownPeriod: string;
```

- *Type:* string

The time period that the Autoscaler should wait before it starts collecting information from a new instance.

This prevents the autoscaler from collecting information when the instance is initializing,
during which the collected usage would not be reliable. Default: 120s

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#cool_down_period GoogleAppEngineFlexibleAppVersion#cool_down_period}

---

##### `diskUtilization`<sup>Optional</sup> <a name="diskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.diskUtilization"></a>

```typescript
public readonly diskUtilization: GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

disk_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#disk_utilization GoogleAppEngineFlexibleAppVersion#disk_utilization}

---

##### `maxConcurrentRequests`<sup>Optional</sup> <a name="maxConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxConcurrentRequests"></a>

```typescript
public readonly maxConcurrentRequests: number;
```

- *Type:* number

Number of concurrent requests an automatic scaling instance can accept before the scheduler spawns a new instance.

Defaults to a runtime-specific value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#max_concurrent_requests GoogleAppEngineFlexibleAppVersion#max_concurrent_requests}

---

##### `maxIdleInstances`<sup>Optional</sup> <a name="maxIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxIdleInstances"></a>

```typescript
public readonly maxIdleInstances: number;
```

- *Type:* number

Maximum number of idle instances that should be maintained for this version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#max_idle_instances GoogleAppEngineFlexibleAppVersion#max_idle_instances}

---

##### `maxPendingLatency`<sup>Optional</sup> <a name="maxPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxPendingLatency"></a>

```typescript
public readonly maxPendingLatency: string;
```

- *Type:* string

Maximum amount of time that a request should wait in the pending queue before starting a new instance to handle it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#max_pending_latency GoogleAppEngineFlexibleAppVersion#max_pending_latency}

---

##### `maxTotalInstances`<sup>Optional</sup> <a name="maxTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.maxTotalInstances"></a>

```typescript
public readonly maxTotalInstances: number;
```

- *Type:* number

Maximum number of instances that should be started to handle requests for this version. Default: 20.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#max_total_instances GoogleAppEngineFlexibleAppVersion#max_total_instances}

---

##### `minIdleInstances`<sup>Optional</sup> <a name="minIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minIdleInstances"></a>

```typescript
public readonly minIdleInstances: number;
```

- *Type:* number

Minimum number of idle instances that should be maintained for this version.

Only applicable for the default version of a service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#min_idle_instances GoogleAppEngineFlexibleAppVersion#min_idle_instances}

---

##### `minPendingLatency`<sup>Optional</sup> <a name="minPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minPendingLatency"></a>

```typescript
public readonly minPendingLatency: string;
```

- *Type:* string

Minimum amount of time a request should wait in the pending queue before starting a new instance to handle it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#min_pending_latency GoogleAppEngineFlexibleAppVersion#min_pending_latency}

---

##### `minTotalInstances`<sup>Optional</sup> <a name="minTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.minTotalInstances"></a>

```typescript
public readonly minTotalInstances: number;
```

- *Type:* number

Minimum number of running instances that should be maintained for this version. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#min_total_instances GoogleAppEngineFlexibleAppVersion#min_total_instances}

---

##### `networkUtilization`<sup>Optional</sup> <a name="networkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.networkUtilization"></a>

```typescript
public readonly networkUtilization: GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

network_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#network_utilization GoogleAppEngineFlexibleAppVersion#network_utilization}

---

##### `requestUtilization`<sup>Optional</sup> <a name="requestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling.property.requestUtilization"></a>

```typescript
public readonly requestUtilization: GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

request_utilization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#request_utilization GoogleAppEngineFlexibleAppVersion#request_utilization}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.targetUtilization">targetUtilization</a></code> | <code>number</code> | Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.aggregationWindowLength">aggregationWindowLength</a></code> | <code>string</code> | Period of time over which CPU utilization is calculated. |

---

##### `targetUtilization`<sup>Required</sup> <a name="targetUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.targetUtilization"></a>

```typescript
public readonly targetUtilization: number;
```

- *Type:* number

Target CPU utilization ratio to maintain when scaling. Must be between 0 and 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#target_utilization GoogleAppEngineFlexibleAppVersion#target_utilization}

---

##### `aggregationWindowLength`<sup>Optional</sup> <a name="aggregationWindowLength" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization.property.aggregationWindowLength"></a>

```typescript
public readonly aggregationWindowLength: string;
```

- *Type:* string

Period of time over which CPU utilization is calculated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#aggregation_window_length GoogleAppEngineFlexibleAppVersion#aggregation_window_length}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadBytesPerSecond">targetReadBytesPerSecond</a></code> | <code>number</code> | Target bytes read per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadOpsPerSecond">targetReadOpsPerSecond</a></code> | <code>number</code> | Target ops read per seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteBytesPerSecond">targetWriteBytesPerSecond</a></code> | <code>number</code> | Target bytes written per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteOpsPerSecond">targetWriteOpsPerSecond</a></code> | <code>number</code> | Target ops written per second. |

---

##### `targetReadBytesPerSecond`<sup>Optional</sup> <a name="targetReadBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadBytesPerSecond"></a>

```typescript
public readonly targetReadBytesPerSecond: number;
```

- *Type:* number

Target bytes read per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#target_read_bytes_per_second GoogleAppEngineFlexibleAppVersion#target_read_bytes_per_second}

---

##### `targetReadOpsPerSecond`<sup>Optional</sup> <a name="targetReadOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetReadOpsPerSecond"></a>

```typescript
public readonly targetReadOpsPerSecond: number;
```

- *Type:* number

Target ops read per seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#target_read_ops_per_second GoogleAppEngineFlexibleAppVersion#target_read_ops_per_second}

---

##### `targetWriteBytesPerSecond`<sup>Optional</sup> <a name="targetWriteBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteBytesPerSecond"></a>

```typescript
public readonly targetWriteBytesPerSecond: number;
```

- *Type:* number

Target bytes written per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#target_write_bytes_per_second GoogleAppEngineFlexibleAppVersion#target_write_bytes_per_second}

---

##### `targetWriteOpsPerSecond`<sup>Optional</sup> <a name="targetWriteOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization.property.targetWriteOpsPerSecond"></a>

```typescript
public readonly targetWriteOpsPerSecond: number;
```

- *Type:* number

Target ops written per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#target_write_ops_per_second GoogleAppEngineFlexibleAppVersion#target_write_ops_per_second}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedBytesPerSecond">targetReceivedBytesPerSecond</a></code> | <code>number</code> | Target bytes received per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedPacketsPerSecond">targetReceivedPacketsPerSecond</a></code> | <code>number</code> | Target packets received per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentBytesPerSecond">targetSentBytesPerSecond</a></code> | <code>number</code> | Target bytes sent per second. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentPacketsPerSecond">targetSentPacketsPerSecond</a></code> | <code>number</code> | Target packets sent per second. |

---

##### `targetReceivedBytesPerSecond`<sup>Optional</sup> <a name="targetReceivedBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedBytesPerSecond"></a>

```typescript
public readonly targetReceivedBytesPerSecond: number;
```

- *Type:* number

Target bytes received per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#target_received_bytes_per_second GoogleAppEngineFlexibleAppVersion#target_received_bytes_per_second}

---

##### `targetReceivedPacketsPerSecond`<sup>Optional</sup> <a name="targetReceivedPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetReceivedPacketsPerSecond"></a>

```typescript
public readonly targetReceivedPacketsPerSecond: number;
```

- *Type:* number

Target packets received per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#target_received_packets_per_second GoogleAppEngineFlexibleAppVersion#target_received_packets_per_second}

---

##### `targetSentBytesPerSecond`<sup>Optional</sup> <a name="targetSentBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentBytesPerSecond"></a>

```typescript
public readonly targetSentBytesPerSecond: number;
```

- *Type:* number

Target bytes sent per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#target_sent_bytes_per_second GoogleAppEngineFlexibleAppVersion#target_sent_bytes_per_second}

---

##### `targetSentPacketsPerSecond`<sup>Optional</sup> <a name="targetSentPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization.property.targetSentPacketsPerSecond"></a>

```typescript
public readonly targetSentPacketsPerSecond: number;
```

- *Type:* number

Target packets sent per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#target_sent_packets_per_second GoogleAppEngineFlexibleAppVersion#target_sent_packets_per_second}

---

### GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetConcurrentRequests">targetConcurrentRequests</a></code> | <code>number</code> | Target number of concurrent requests. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetRequestCountPerSecond">targetRequestCountPerSecond</a></code> | <code>string</code> | Target requests per second. |

---

##### `targetConcurrentRequests`<sup>Optional</sup> <a name="targetConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetConcurrentRequests"></a>

```typescript
public readonly targetConcurrentRequests: number;
```

- *Type:* number

Target number of concurrent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#target_concurrent_requests GoogleAppEngineFlexibleAppVersion#target_concurrent_requests}

---

##### `targetRequestCountPerSecond`<sup>Optional</sup> <a name="targetRequestCountPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization.property.targetRequestCountPerSecond"></a>

```typescript
public readonly targetRequestCountPerSecond: string;
```

- *Type:* string

Target requests per second.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#target_request_count_per_second GoogleAppEngineFlexibleAppVersion#target_request_count_per_second}

---

### GoogleAppEngineFlexibleAppVersionConfig <a name="GoogleAppEngineFlexibleAppVersionConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionConfig: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.livenessCheck">livenessCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a></code> | liveness_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.readinessCheck">readinessCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a></code> | readiness_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtime">runtime</a></code> | <code>string</code> | Desired runtime. Example python27. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.service">service</a></code> | <code>string</code> | AppEngine service resource. Can contain numbers, letters, and hyphens. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.apiConfig">apiConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a></code> | api_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.automaticScaling">automaticScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a></code> | automatic_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.betaSettings">betaSettings</a></code> | <code>{[ key: string ]: string}</code> | Metadata settings that are supplied to this version to enable beta runtime features. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.defaultExpiration">defaultExpiration</a></code> | <code>string</code> | Duration that static files should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.deleteServiceOnDestroy">deleteServiceOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to 'true', the service will be deleted if it is the last version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.deployment">deployment</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a></code> | deployment block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.endpointsApiService">endpointsApiService</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a></code> | endpoints_api_service block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.entrypoint">entrypoint</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a></code> | entrypoint block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.envVariables">envVariables</a></code> | <code>{[ key: string ]: string}</code> | Environment variables available to the application. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.flexibleRuntimeSettings">flexibleRuntimeSettings</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a></code> | flexible_runtime_settings block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.handlers">handlers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers">GoogleAppEngineFlexibleAppVersionHandlers</a>[]</code> | handlers block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#id GoogleAppEngineFlexibleAppVersion#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.inboundServices">inboundServices</a></code> | <code>string[]</code> | A list of the types of messages that this application is able to receive. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.instanceClass">instanceClass</a></code> | <code>string</code> | Instance class that is used to run this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.manualScaling">manualScaling</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a></code> | manual_scaling block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.network">network</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a></code> | network block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.nobuildFilesRegex">nobuildFilesRegex</a></code> | <code>string</code> | Files that match this pattern will not be built into this version. Only applicable for Go runtimes. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.noopOnDestroy">noopOnDestroy</a></code> | <code>boolean \| cdktf.IResolvable</code> | If set to 'true', the application version will not be deleted. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#project GoogleAppEngineFlexibleAppVersion#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.resources">resources</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a></code> | resources block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeApiVersion">runtimeApiVersion</a></code> | <code>string</code> | The version of the API in the given runtime environment. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeChannel">runtimeChannel</a></code> | <code>string</code> | The channel of the runtime to use. Only available for some runtimes. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeMainExecutablePath">runtimeMainExecutablePath</a></code> | <code>string</code> | The path or name of the app's main executable. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | The identity that the deployed version will run as. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.servingStatus">servingStatus</a></code> | <code>string</code> | Current serving status of this version. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts">GoogleAppEngineFlexibleAppVersionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.versionId">versionId</a></code> | <code>string</code> | Relative name of the version within the service. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.vpcAccessConnector">vpcAccessConnector</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a></code> | vpc_access_connector block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `livenessCheck`<sup>Required</sup> <a name="livenessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.livenessCheck"></a>

```typescript
public readonly livenessCheck: GoogleAppEngineFlexibleAppVersionLivenessCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a>

liveness_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#liveness_check GoogleAppEngineFlexibleAppVersion#liveness_check}

---

##### `readinessCheck`<sup>Required</sup> <a name="readinessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.readinessCheck"></a>

```typescript
public readonly readinessCheck: GoogleAppEngineFlexibleAppVersionReadinessCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a>

readiness_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#readiness_check GoogleAppEngineFlexibleAppVersion#readiness_check}

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtime"></a>

```typescript
public readonly runtime: string;
```

- *Type:* string

Desired runtime. Example python27.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#runtime GoogleAppEngineFlexibleAppVersion#runtime}

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

AppEngine service resource. Can contain numbers, letters, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#service GoogleAppEngineFlexibleAppVersion#service}

---

##### `apiConfig`<sup>Optional</sup> <a name="apiConfig" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.apiConfig"></a>

```typescript
public readonly apiConfig: GoogleAppEngineFlexibleAppVersionApiConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a>

api_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#api_config GoogleAppEngineFlexibleAppVersion#api_config}

---

##### `automaticScaling`<sup>Optional</sup> <a name="automaticScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.automaticScaling"></a>

```typescript
public readonly automaticScaling: GoogleAppEngineFlexibleAppVersionAutomaticScaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a>

automatic_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#automatic_scaling GoogleAppEngineFlexibleAppVersion#automatic_scaling}

---

##### `betaSettings`<sup>Optional</sup> <a name="betaSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.betaSettings"></a>

```typescript
public readonly betaSettings: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Metadata settings that are supplied to this version to enable beta runtime features.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#beta_settings GoogleAppEngineFlexibleAppVersion#beta_settings}

---

##### `defaultExpiration`<sup>Optional</sup> <a name="defaultExpiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.defaultExpiration"></a>

```typescript
public readonly defaultExpiration: string;
```

- *Type:* string

Duration that static files should be cached by web proxies and browsers.

Only applicable if the corresponding StaticFilesHandler does not specify its own expiration time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#default_expiration GoogleAppEngineFlexibleAppVersion#default_expiration}

---

##### `deleteServiceOnDestroy`<sup>Optional</sup> <a name="deleteServiceOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.deleteServiceOnDestroy"></a>

```typescript
public readonly deleteServiceOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to 'true', the service will be deleted if it is the last version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#delete_service_on_destroy GoogleAppEngineFlexibleAppVersion#delete_service_on_destroy}

---

##### `deployment`<sup>Optional</sup> <a name="deployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.deployment"></a>

```typescript
public readonly deployment: GoogleAppEngineFlexibleAppVersionDeployment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a>

deployment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#deployment GoogleAppEngineFlexibleAppVersion#deployment}

---

##### `endpointsApiService`<sup>Optional</sup> <a name="endpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.endpointsApiService"></a>

```typescript
public readonly endpointsApiService: GoogleAppEngineFlexibleAppVersionEndpointsApiService;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a>

endpoints_api_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#endpoints_api_service GoogleAppEngineFlexibleAppVersion#endpoints_api_service}

---

##### `entrypoint`<sup>Optional</sup> <a name="entrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.entrypoint"></a>

```typescript
public readonly entrypoint: GoogleAppEngineFlexibleAppVersionEntrypoint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a>

entrypoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#entrypoint GoogleAppEngineFlexibleAppVersion#entrypoint}

---

##### `envVariables`<sup>Optional</sup> <a name="envVariables" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.envVariables"></a>

```typescript
public readonly envVariables: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Environment variables available to the application.

As these are not returned in the API request, Terraform will not detect any changes made outside of the Terraform config.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#env_variables GoogleAppEngineFlexibleAppVersion#env_variables}

---

##### `flexibleRuntimeSettings`<sup>Optional</sup> <a name="flexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.flexibleRuntimeSettings"></a>

```typescript
public readonly flexibleRuntimeSettings: GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a>

flexible_runtime_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#flexible_runtime_settings GoogleAppEngineFlexibleAppVersion#flexible_runtime_settings}

---

##### `handlers`<sup>Optional</sup> <a name="handlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.handlers"></a>

```typescript
public readonly handlers: IResolvable | GoogleAppEngineFlexibleAppVersionHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers">GoogleAppEngineFlexibleAppVersionHandlers</a>[]

handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#handlers GoogleAppEngineFlexibleAppVersion#handlers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#id GoogleAppEngineFlexibleAppVersion#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inboundServices`<sup>Optional</sup> <a name="inboundServices" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.inboundServices"></a>

```typescript
public readonly inboundServices: string[];
```

- *Type:* string[]

A list of the types of messages that this application is able to receive.

Possible values: ["INBOUND_SERVICE_MAIL", "INBOUND_SERVICE_MAIL_BOUNCE", "INBOUND_SERVICE_XMPP_ERROR", "INBOUND_SERVICE_XMPP_MESSAGE", "INBOUND_SERVICE_XMPP_SUBSCRIBE", "INBOUND_SERVICE_XMPP_PRESENCE", "INBOUND_SERVICE_CHANNEL_PRESENCE", "INBOUND_SERVICE_WARMUP"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#inbound_services GoogleAppEngineFlexibleAppVersion#inbound_services}

---

##### `instanceClass`<sup>Optional</sup> <a name="instanceClass" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.instanceClass"></a>

```typescript
public readonly instanceClass: string;
```

- *Type:* string

Instance class that is used to run this version.

Valid values are
AutomaticScaling: F1, F2, F4, F4_1G
ManualScaling: B1, B2, B4, B8, B4_1G
Defaults to F1 for AutomaticScaling and B1 for ManualScaling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#instance_class GoogleAppEngineFlexibleAppVersion#instance_class}

---

##### `manualScaling`<sup>Optional</sup> <a name="manualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.manualScaling"></a>

```typescript
public readonly manualScaling: GoogleAppEngineFlexibleAppVersionManualScaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a>

manual_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#manual_scaling GoogleAppEngineFlexibleAppVersion#manual_scaling}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.network"></a>

```typescript
public readonly network: GoogleAppEngineFlexibleAppVersionNetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#network GoogleAppEngineFlexibleAppVersion#network}

---

##### `nobuildFilesRegex`<sup>Optional</sup> <a name="nobuildFilesRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.nobuildFilesRegex"></a>

```typescript
public readonly nobuildFilesRegex: string;
```

- *Type:* string

Files that match this pattern will not be built into this version. Only applicable for Go runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#nobuild_files_regex GoogleAppEngineFlexibleAppVersion#nobuild_files_regex}

---

##### `noopOnDestroy`<sup>Optional</sup> <a name="noopOnDestroy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.noopOnDestroy"></a>

```typescript
public readonly noopOnDestroy: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If set to 'true', the application version will not be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#noop_on_destroy GoogleAppEngineFlexibleAppVersion#noop_on_destroy}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#project GoogleAppEngineFlexibleAppVersion#project}.

---

##### `resources`<sup>Optional</sup> <a name="resources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.resources"></a>

```typescript
public readonly resources: GoogleAppEngineFlexibleAppVersionResources;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a>

resources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#resources GoogleAppEngineFlexibleAppVersion#resources}

---

##### `runtimeApiVersion`<sup>Optional</sup> <a name="runtimeApiVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeApiVersion"></a>

```typescript
public readonly runtimeApiVersion: string;
```

- *Type:* string

The version of the API in the given runtime environment.

Please see the app.yaml reference for valid values at 'https://cloud.google.com/appengine/docs/standard/<language>/config/appref'\
Substitute '<language>' with 'python', 'java', 'php', 'ruby', 'go' or 'nodejs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#runtime_api_version GoogleAppEngineFlexibleAppVersion#runtime_api_version}

---

##### `runtimeChannel`<sup>Optional</sup> <a name="runtimeChannel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeChannel"></a>

```typescript
public readonly runtimeChannel: string;
```

- *Type:* string

The channel of the runtime to use. Only available for some runtimes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#runtime_channel GoogleAppEngineFlexibleAppVersion#runtime_channel}

---

##### `runtimeMainExecutablePath`<sup>Optional</sup> <a name="runtimeMainExecutablePath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.runtimeMainExecutablePath"></a>

```typescript
public readonly runtimeMainExecutablePath: string;
```

- *Type:* string

The path or name of the app's main executable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#runtime_main_executable_path GoogleAppEngineFlexibleAppVersion#runtime_main_executable_path}

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

The identity that the deployed version will run as.

Admin API will use the App Engine Appspot service account as
default if this field is neither provided in app.yaml file nor through CLI flag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#service_account GoogleAppEngineFlexibleAppVersion#service_account}

---

##### `servingStatus`<sup>Optional</sup> <a name="servingStatus" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.servingStatus"></a>

```typescript
public readonly servingStatus: string;
```

- *Type:* string

Current serving status of this version.

Only the versions with a SERVING status create instances and can be billed. Default value: "SERVING" Possible values: ["SERVING", "STOPPED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#serving_status GoogleAppEngineFlexibleAppVersion#serving_status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleAppEngineFlexibleAppVersionTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts">GoogleAppEngineFlexibleAppVersionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#timeouts GoogleAppEngineFlexibleAppVersion#timeouts}

---

##### `versionId`<sup>Optional</sup> <a name="versionId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.versionId"></a>

```typescript
public readonly versionId: string;
```

- *Type:* string

Relative name of the version within the service.

For example, 'v1'. Version names can contain only lowercase letters, numbers, or hyphens.
Reserved names,"default", "latest", and any name with the prefix "ah-".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#version_id GoogleAppEngineFlexibleAppVersion#version_id}

---

##### `vpcAccessConnector`<sup>Optional</sup> <a name="vpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionConfig.property.vpcAccessConnector"></a>

```typescript
public readonly vpcAccessConnector: GoogleAppEngineFlexibleAppVersionVpcAccessConnector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a>

vpc_access_connector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#vpc_access_connector GoogleAppEngineFlexibleAppVersion#vpc_access_connector}

---

### GoogleAppEngineFlexibleAppVersionDeployment <a name="GoogleAppEngineFlexibleAppVersionDeployment" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionDeployment: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.cloudBuildOptions">cloudBuildOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | cloud_build_options block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.container">container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a></code> | container block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.files">files</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles">GoogleAppEngineFlexibleAppVersionDeploymentFiles</a>[]</code> | files block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.zip">zip</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a></code> | zip block. |

---

##### `cloudBuildOptions`<sup>Optional</sup> <a name="cloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.cloudBuildOptions"></a>

```typescript
public readonly cloudBuildOptions: GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

cloud_build_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#cloud_build_options GoogleAppEngineFlexibleAppVersion#cloud_build_options}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.container"></a>

```typescript
public readonly container: GoogleAppEngineFlexibleAppVersionDeploymentContainer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#container GoogleAppEngineFlexibleAppVersion#container}

---

##### `files`<sup>Optional</sup> <a name="files" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.files"></a>

```typescript
public readonly files: IResolvable | GoogleAppEngineFlexibleAppVersionDeploymentFiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles">GoogleAppEngineFlexibleAppVersionDeploymentFiles</a>[]

files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#files GoogleAppEngineFlexibleAppVersion#files}

---

##### `zip`<sup>Optional</sup> <a name="zip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment.property.zip"></a>

```typescript
public readonly zip: GoogleAppEngineFlexibleAppVersionDeploymentZip;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a>

zip block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#zip GoogleAppEngineFlexibleAppVersion#zip}

---

### GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions <a name="GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.appYamlPath">appYamlPath</a></code> | <code>string</code> | Path to the yaml file used in deployment, used to determine runtime configuration details. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.cloudBuildTimeout">cloudBuildTimeout</a></code> | <code>string</code> | The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes. |

---

##### `appYamlPath`<sup>Required</sup> <a name="appYamlPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.appYamlPath"></a>

```typescript
public readonly appYamlPath: string;
```

- *Type:* string

Path to the yaml file used in deployment, used to determine runtime configuration details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#app_yaml_path GoogleAppEngineFlexibleAppVersion#app_yaml_path}

---

##### `cloudBuildTimeout`<sup>Optional</sup> <a name="cloudBuildTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions.property.cloudBuildTimeout"></a>

```typescript
public readonly cloudBuildTimeout: string;
```

- *Type:* string

The Cloud Build timeout used as part of any dependent builds performed by version creation. Defaults to 10 minutes.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example: "3.5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#cloud_build_timeout GoogleAppEngineFlexibleAppVersion#cloud_build_timeout}

---

### GoogleAppEngineFlexibleAppVersionDeploymentContainer <a name="GoogleAppEngineFlexibleAppVersionDeploymentContainer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionDeploymentContainer: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer.property.image">image</a></code> | <code>string</code> | URI to the hosted container image in Google Container Registry. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

URI to the hosted container image in Google Container Registry.

The URI must be fully qualified and include a tag or digest.
Examples: "gcr.io/my-project/image:tag" or "gcr.io/my-project/image@digest"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#image GoogleAppEngineFlexibleAppVersion#image}

---

### GoogleAppEngineFlexibleAppVersionDeploymentFiles <a name="GoogleAppEngineFlexibleAppVersionDeploymentFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionDeploymentFiles: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.sha1Sum">sha1Sum</a></code> | <code>string</code> | SHA1 checksum of the file. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}.

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#source_url GoogleAppEngineFlexibleAppVersion#source_url}

---

##### `sha1Sum`<sup>Optional</sup> <a name="sha1Sum" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles.property.sha1Sum"></a>

```typescript
public readonly sha1Sum: string;
```

- *Type:* string

SHA1 checksum of the file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#sha1_sum GoogleAppEngineFlexibleAppVersion#sha1_sum}

---

### GoogleAppEngineFlexibleAppVersionDeploymentZip <a name="GoogleAppEngineFlexibleAppVersionDeploymentZip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionDeploymentZip: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | Source URL. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.property.filesCount">filesCount</a></code> | <code>number</code> | files count. |

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

Source URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#source_url GoogleAppEngineFlexibleAppVersion#source_url}

---

##### `filesCount`<sup>Optional</sup> <a name="filesCount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip.property.filesCount"></a>

```typescript
public readonly filesCount: number;
```

- *Type:* number

files count.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#files_count GoogleAppEngineFlexibleAppVersion#files_count}

---

### GoogleAppEngineFlexibleAppVersionEndpointsApiService <a name="GoogleAppEngineFlexibleAppVersionEndpointsApiService" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionEndpointsApiService: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.name">name</a></code> | <code>string</code> | Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.configId">configId</a></code> | <code>string</code> | Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.disableTraceSampling">disableTraceSampling</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable or disable trace sampling. By default, this is set to false for enabled. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.rolloutStrategy">rolloutStrategy</a></code> | <code>string</code> | Endpoints rollout strategy. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Endpoints service name which is the name of the "service" resource in the Service Management API. For example "myapi.endpoints.myproject.cloud.goog".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}

---

##### `configId`<sup>Optional</sup> <a name="configId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

Endpoints service configuration ID as specified by the Service Management API. For example "2016-09-19r1".

By default, the rollout strategy for Endpoints is "FIXED". This means that Endpoints starts up with a particular configuration ID.
When a new configuration is rolled out, Endpoints must be given the new configuration ID. The configId field is used to give the configuration ID
and is required in this case.

Endpoints also has a rollout strategy called "MANAGED". When using this, Endpoints fetches the latest configuration and does not need
the configuration ID. In this case, configId must be omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#config_id GoogleAppEngineFlexibleAppVersion#config_id}

---

##### `disableTraceSampling`<sup>Optional</sup> <a name="disableTraceSampling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.disableTraceSampling"></a>

```typescript
public readonly disableTraceSampling: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable or disable trace sampling. By default, this is set to false for enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#disable_trace_sampling GoogleAppEngineFlexibleAppVersion#disable_trace_sampling}

---

##### `rolloutStrategy`<sup>Optional</sup> <a name="rolloutStrategy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService.property.rolloutStrategy"></a>

```typescript
public readonly rolloutStrategy: string;
```

- *Type:* string

Endpoints rollout strategy.

If FIXED, configId must be specified. If MANAGED, configId must be omitted. Default value: "FIXED" Possible values: ["FIXED", "MANAGED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#rollout_strategy GoogleAppEngineFlexibleAppVersion#rollout_strategy}

---

### GoogleAppEngineFlexibleAppVersionEntrypoint <a name="GoogleAppEngineFlexibleAppVersionEntrypoint" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionEntrypoint: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint.property.shell">shell</a></code> | <code>string</code> | The format should be a shell command that can be fed to bash -c. |

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

The format should be a shell command that can be fed to bash -c.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#shell GoogleAppEngineFlexibleAppVersion#shell}

---

### GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings <a name="GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionFlexibleRuntimeSettings: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | Operating System of the application runtime. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | The runtime version of an App Engine flexible application. |

---

##### `operatingSystem`<sup>Optional</sup> <a name="operatingSystem" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

Operating System of the application runtime.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#operating_system GoogleAppEngineFlexibleAppVersion#operating_system}

---

##### `runtimeVersion`<sup>Optional</sup> <a name="runtimeVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

The runtime version of an App Engine flexible application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#runtime_version GoogleAppEngineFlexibleAppVersion#runtime_version}

---

### GoogleAppEngineFlexibleAppVersionHandlers <a name="GoogleAppEngineFlexibleAppVersionHandlers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionHandlers: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.authFailAction">authFailAction</a></code> | <code>string</code> | Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.login">login</a></code> | <code>string</code> | Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.redirectHttpResponseCode">redirectHttpResponseCode</a></code> | <code>string</code> | 30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.script">script</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a></code> | script block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.securityLevel">securityLevel</a></code> | <code>string</code> | Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.staticFiles">staticFiles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | static_files block. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.urlRegex">urlRegex</a></code> | <code>string</code> | URL prefix. |

---

##### `authFailAction`<sup>Optional</sup> <a name="authFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.authFailAction"></a>

```typescript
public readonly authFailAction: string;
```

- *Type:* string

Actions to take when the user is not logged in. Possible values: ["AUTH_FAIL_ACTION_REDIRECT", "AUTH_FAIL_ACTION_UNAUTHORIZED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#auth_fail_action GoogleAppEngineFlexibleAppVersion#auth_fail_action}

---

##### `login`<sup>Optional</sup> <a name="login" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

Methods to restrict access to a URL based on login status. Possible values: ["LOGIN_OPTIONAL", "LOGIN_ADMIN", "LOGIN_REQUIRED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#login GoogleAppEngineFlexibleAppVersion#login}

---

##### `redirectHttpResponseCode`<sup>Optional</sup> <a name="redirectHttpResponseCode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.redirectHttpResponseCode"></a>

```typescript
public readonly redirectHttpResponseCode: string;
```

- *Type:* string

30x code to use when performing redirects for the secure field. Possible values: ["REDIRECT_HTTP_RESPONSE_CODE_301", "REDIRECT_HTTP_RESPONSE_CODE_302", "REDIRECT_HTTP_RESPONSE_CODE_303", "REDIRECT_HTTP_RESPONSE_CODE_307"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#redirect_http_response_code GoogleAppEngineFlexibleAppVersion#redirect_http_response_code}

---

##### `script`<sup>Optional</sup> <a name="script" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.script"></a>

```typescript
public readonly script: GoogleAppEngineFlexibleAppVersionHandlersScript;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a>

script block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#script GoogleAppEngineFlexibleAppVersion#script}

---

##### `securityLevel`<sup>Optional</sup> <a name="securityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

Security (HTTPS) enforcement for this URL. Possible values: ["SECURE_DEFAULT", "SECURE_NEVER", "SECURE_OPTIONAL", "SECURE_ALWAYS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#security_level GoogleAppEngineFlexibleAppVersion#security_level}

---

##### `staticFiles`<sup>Optional</sup> <a name="staticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.staticFiles"></a>

```typescript
public readonly staticFiles: GoogleAppEngineFlexibleAppVersionHandlersStaticFiles;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a>

static_files block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#static_files GoogleAppEngineFlexibleAppVersion#static_files}

---

##### `urlRegex`<sup>Optional</sup> <a name="urlRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers.property.urlRegex"></a>

```typescript
public readonly urlRegex: string;
```

- *Type:* string

URL prefix.

Uses regular expression syntax, which means regexp special characters must be escaped, but should not contain groupings.
All URLs that begin with this prefix are handled by this handler, using the portion of the URL after the prefix as part of the file path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#url_regex GoogleAppEngineFlexibleAppVersion#url_regex}

---

### GoogleAppEngineFlexibleAppVersionHandlersScript <a name="GoogleAppEngineFlexibleAppVersionHandlersScript" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionHandlersScript: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript.property.scriptPath">scriptPath</a></code> | <code>string</code> | Path to the script from the application root directory. |

---

##### `scriptPath`<sup>Required</sup> <a name="scriptPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript.property.scriptPath"></a>

```typescript
public readonly scriptPath: string;
```

- *Type:* string

Path to the script from the application root directory.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#script_path GoogleAppEngineFlexibleAppVersion#script_path}

---

### GoogleAppEngineFlexibleAppVersionHandlersStaticFiles <a name="GoogleAppEngineFlexibleAppVersionHandlersStaticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionHandlersStaticFiles: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.applicationReadable">applicationReadable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether files should also be uploaded as code data. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.expiration">expiration</a></code> | <code>string</code> | Time a static file served by this handler should be cached by web proxies and browsers. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.mimeType">mimeType</a></code> | <code>string</code> | MIME type used to serve all files served by this handler. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.path">path</a></code> | <code>string</code> | Path to the static files matched by the URL pattern, from the application root directory. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.requireMatchingFile">requireMatchingFile</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether this handler should match the request if the file referenced by the handler does not exist. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.uploadPathRegex">uploadPathRegex</a></code> | <code>string</code> | Regular expression that matches the file paths for all files that should be referenced by this handler. |

---

##### `applicationReadable`<sup>Optional</sup> <a name="applicationReadable" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.applicationReadable"></a>

```typescript
public readonly applicationReadable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether files should also be uploaded as code data.

By default, files declared in static file handlers are
uploaded as static data and are only served to end users; they cannot be read by the application. If enabled,
uploads are charged against both your code and static data storage resource quotas.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#application_readable GoogleAppEngineFlexibleAppVersion#application_readable}

---

##### `expiration`<sup>Optional</sup> <a name="expiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

Time a static file served by this handler should be cached by web proxies and browsers.

A duration in seconds with up to nine fractional digits, terminated by 's'. Example "3.5s".
Default is '0s'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#expiration GoogleAppEngineFlexibleAppVersion#expiration}

---

##### `httpHeaders`<sup>Optional</sup> <a name="httpHeaders" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

HTTP headers to use for all responses from these URLs. An object containing a list of "key:value" value pairs.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#http_headers GoogleAppEngineFlexibleAppVersion#http_headers}

---

##### `mimeType`<sup>Optional</sup> <a name="mimeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

MIME type used to serve all files served by this handler.

Defaults to file-specific MIME types, which are derived from each file's filename extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#mime_type GoogleAppEngineFlexibleAppVersion#mime_type}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

Path to the static files matched by the URL pattern, from the application root directory.

The path can refer to text matched in groupings in the URL pattern.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#path GoogleAppEngineFlexibleAppVersion#path}

---

##### `requireMatchingFile`<sup>Optional</sup> <a name="requireMatchingFile" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.requireMatchingFile"></a>

```typescript
public readonly requireMatchingFile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether this handler should match the request if the file referenced by the handler does not exist.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#require_matching_file GoogleAppEngineFlexibleAppVersion#require_matching_file}

---

##### `uploadPathRegex`<sup>Optional</sup> <a name="uploadPathRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles.property.uploadPathRegex"></a>

```typescript
public readonly uploadPathRegex: string;
```

- *Type:* string

Regular expression that matches the file paths for all files that should be referenced by this handler.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#upload_path_regex GoogleAppEngineFlexibleAppVersion#upload_path_regex}

---

### GoogleAppEngineFlexibleAppVersionLivenessCheck <a name="GoogleAppEngineFlexibleAppVersionLivenessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionLivenessCheck: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.path">path</a></code> | <code>string</code> | The request path. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.checkInterval">checkInterval</a></code> | <code>string</code> | Interval between health checks. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Number of consecutive failed checks required before considering the VM unhealthy. Default: 4. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.host">host</a></code> | <code>string</code> | Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.initialDelay">initialDelay</a></code> | <code>string</code> | The initial delay before starting to execute the checks. Default: "300s". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.successThreshold">successThreshold</a></code> | <code>number</code> | Number of consecutive successful checks required before considering the VM healthy. Default: 2. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.timeout">timeout</a></code> | <code>string</code> | Time before the check is considered failed. Default: "4s". |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#path GoogleAppEngineFlexibleAppVersion#path}

---

##### `checkInterval`<sup>Optional</sup> <a name="checkInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.checkInterval"></a>

```typescript
public readonly checkInterval: string;
```

- *Type:* string

Interval between health checks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#check_interval GoogleAppEngineFlexibleAppVersion#check_interval}

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Number of consecutive failed checks required before considering the VM unhealthy. Default: 4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#failure_threshold GoogleAppEngineFlexibleAppVersion#failure_threshold}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#host GoogleAppEngineFlexibleAppVersion#host}

---

##### `initialDelay`<sup>Optional</sup> <a name="initialDelay" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.initialDelay"></a>

```typescript
public readonly initialDelay: string;
```

- *Type:* string

The initial delay before starting to execute the checks. Default: "300s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#initial_delay GoogleAppEngineFlexibleAppVersion#initial_delay}

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

Number of consecutive successful checks required before considering the VM healthy. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#success_threshold GoogleAppEngineFlexibleAppVersion#success_threshold}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Time before the check is considered failed. Default: "4s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#timeout GoogleAppEngineFlexibleAppVersion#timeout}

---

### GoogleAppEngineFlexibleAppVersionManualScaling <a name="GoogleAppEngineFlexibleAppVersionManualScaling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionManualScaling: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling.property.instances">instances</a></code> | <code>number</code> | Number of instances to assign to the service at the start. |

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number

Number of instances to assign to the service at the start.

**Note:** When managing the number of instances at runtime through the App Engine Admin API or the (now deprecated) Python 2
Modules API set_num_instances() you must use 'lifecycle.ignore_changes = ["manual_scaling"[0].instances]' to prevent drift detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#instances GoogleAppEngineFlexibleAppVersion#instances}

---

### GoogleAppEngineFlexibleAppVersionNetwork <a name="GoogleAppEngineFlexibleAppVersionNetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionNetwork: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.name">name</a></code> | <code>string</code> | Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.forwardedPorts">forwardedPorts</a></code> | <code>string[]</code> | List of ports, or port pairs, to forward from the virtual machine to the application container. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.instanceIpMode">instanceIpMode</a></code> | <code>string</code> | Prevent instances from receiving an ephemeral external IP address. Possible values: ["EXTERNAL", "INTERNAL"]. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.instanceTag">instanceTag</a></code> | <code>string</code> | Tag to apply to the instance during creation. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.sessionAffinity">sessionAffinity</a></code> | <code>boolean \| cdktf.IResolvable</code> | Enable session affinity. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.subnetwork">subnetwork</a></code> | <code>string</code> | Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Google Compute Engine network where the virtual machines are created. Specify the short name, not the resource path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}

---

##### `forwardedPorts`<sup>Optional</sup> <a name="forwardedPorts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.forwardedPorts"></a>

```typescript
public readonly forwardedPorts: string[];
```

- *Type:* string[]

List of ports, or port pairs, to forward from the virtual machine to the application container.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#forwarded_ports GoogleAppEngineFlexibleAppVersion#forwarded_ports}

---

##### `instanceIpMode`<sup>Optional</sup> <a name="instanceIpMode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.instanceIpMode"></a>

```typescript
public readonly instanceIpMode: string;
```

- *Type:* string

Prevent instances from receiving an ephemeral external IP address. Possible values: ["EXTERNAL", "INTERNAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#instance_ip_mode GoogleAppEngineFlexibleAppVersion#instance_ip_mode}

---

##### `instanceTag`<sup>Optional</sup> <a name="instanceTag" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.instanceTag"></a>

```typescript
public readonly instanceTag: string;
```

- *Type:* string

Tag to apply to the instance during creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#instance_tag GoogleAppEngineFlexibleAppVersion#instance_tag}

---

##### `sessionAffinity`<sup>Optional</sup> <a name="sessionAffinity" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Enable session affinity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#session_affinity GoogleAppEngineFlexibleAppVersion#session_affinity}

---

##### `subnetwork`<sup>Optional</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

Google Cloud Platform sub-network where the virtual machines are created. Specify the short name, not the resource path.

If the network that the instance is being created in is a Legacy network, then the IP address is allocated from the IPv4Range.
If the network that the instance is being created in is an auto Subnet Mode Network, then only network name should be specified (not the subnetworkName) and the IP address is created from the IPCidrRange of the subnetwork that exists in that zone for that network.
If the network that the instance is being created in is a custom Subnet Mode Network, then the subnetworkName must be specified and the IP address is created from the IPCidrRange of the subnetwork.
If specified, the subnetwork must exist in the same region as the App Engine flexible environment application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#subnetwork GoogleAppEngineFlexibleAppVersion#subnetwork}

---

### GoogleAppEngineFlexibleAppVersionReadinessCheck <a name="GoogleAppEngineFlexibleAppVersionReadinessCheck" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionReadinessCheck: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.path">path</a></code> | <code>string</code> | The request path. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.appStartTimeout">appStartTimeout</a></code> | <code>string</code> | A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.checkInterval">checkInterval</a></code> | <code>string</code> | Interval between health checks.  Default: "5s". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | Number of consecutive failed checks required before removing traffic. Default: 2. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.host">host</a></code> | <code>string</code> | Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com". |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.successThreshold">successThreshold</a></code> | <code>number</code> | Number of consecutive successful checks required before receiving traffic. Default: 2. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.timeout">timeout</a></code> | <code>string</code> | Time before the check is considered failed. Default: "4s". |

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

The request path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#path GoogleAppEngineFlexibleAppVersion#path}

---

##### `appStartTimeout`<sup>Optional</sup> <a name="appStartTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.appStartTimeout"></a>

```typescript
public readonly appStartTimeout: string;
```

- *Type:* string

A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic.

Default: "300s"

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#app_start_timeout GoogleAppEngineFlexibleAppVersion#app_start_timeout}

---

##### `checkInterval`<sup>Optional</sup> <a name="checkInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.checkInterval"></a>

```typescript
public readonly checkInterval: string;
```

- *Type:* string

Interval between health checks.  Default: "5s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#check_interval GoogleAppEngineFlexibleAppVersion#check_interval}

---

##### `failureThreshold`<sup>Optional</sup> <a name="failureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

Number of consecutive failed checks required before removing traffic. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#failure_threshold GoogleAppEngineFlexibleAppVersion#failure_threshold}

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

Host header to send when performing a HTTP Readiness check. Example: "myapp.appspot.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#host GoogleAppEngineFlexibleAppVersion#host}

---

##### `successThreshold`<sup>Optional</sup> <a name="successThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

Number of consecutive successful checks required before receiving traffic. Default: 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#success_threshold GoogleAppEngineFlexibleAppVersion#success_threshold}

---

##### `timeout`<sup>Optional</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

Time before the check is considered failed. Default: "4s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#timeout GoogleAppEngineFlexibleAppVersion#timeout}

---

### GoogleAppEngineFlexibleAppVersionResources <a name="GoogleAppEngineFlexibleAppVersionResources" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionResources: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.cpu">cpu</a></code> | <code>number</code> | Number of CPU cores needed. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.diskGb">diskGb</a></code> | <code>number</code> | Disk size (GB) needed. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.memoryGb">memoryGb</a></code> | <code>number</code> | Memory (GB) needed. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.volumes">volumes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes">GoogleAppEngineFlexibleAppVersionResourcesVolumes</a>[]</code> | volumes block. |

---

##### `cpu`<sup>Optional</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

Number of CPU cores needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#cpu GoogleAppEngineFlexibleAppVersion#cpu}

---

##### `diskGb`<sup>Optional</sup> <a name="diskGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.diskGb"></a>

```typescript
public readonly diskGb: number;
```

- *Type:* number

Disk size (GB) needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#disk_gb GoogleAppEngineFlexibleAppVersion#disk_gb}

---

##### `memoryGb`<sup>Optional</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

Memory (GB) needed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#memory_gb GoogleAppEngineFlexibleAppVersion#memory_gb}

---

##### `volumes`<sup>Optional</sup> <a name="volumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources.property.volumes"></a>

```typescript
public readonly volumes: IResolvable | GoogleAppEngineFlexibleAppVersionResourcesVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes">GoogleAppEngineFlexibleAppVersionResourcesVolumes</a>[]

volumes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#volumes GoogleAppEngineFlexibleAppVersion#volumes}

---

### GoogleAppEngineFlexibleAppVersionResourcesVolumes <a name="GoogleAppEngineFlexibleAppVersionResourcesVolumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionResourcesVolumes: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.name">name</a></code> | <code>string</code> | Unique name for the volume. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.sizeGb">sizeGb</a></code> | <code>number</code> | Volume size in gigabytes. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.volumeType">volumeType</a></code> | <code>string</code> | Underlying volume type, e.g. 'tmpfs'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Unique name for the volume.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

Volume size in gigabytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#size_gb GoogleAppEngineFlexibleAppVersion#size_gb}

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

Underlying volume type, e.g. 'tmpfs'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#volume_type GoogleAppEngineFlexibleAppVersion#volume_type}

---

### GoogleAppEngineFlexibleAppVersionTimeouts <a name="GoogleAppEngineFlexibleAppVersionTimeouts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionTimeouts: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#create GoogleAppEngineFlexibleAppVersion#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#delete GoogleAppEngineFlexibleAppVersion#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#update GoogleAppEngineFlexibleAppVersion#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#create GoogleAppEngineFlexibleAppVersion#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#delete GoogleAppEngineFlexibleAppVersion#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#update GoogleAppEngineFlexibleAppVersion#update}.

---

### GoogleAppEngineFlexibleAppVersionVpcAccessConnector <a name="GoogleAppEngineFlexibleAppVersionVpcAccessConnector" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

const googleAppEngineFlexibleAppVersionVpcAccessConnector: googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector.property.name">name</a></code> | <code>string</code> | Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Full Serverless VPC Access Connector name e.g. /projects/my-project/locations/us-central1/connectors/c1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.24.0/docs/resources/google_app_engine_flexible_app_version#name GoogleAppEngineFlexibleAppVersion#name}

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleAppEngineFlexibleAppVersionApiConfigOutputReference <a name="GoogleAppEngineFlexibleAppVersionApiConfigOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetAuthFailAction">resetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetLogin">resetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetSecurityLevel">resetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthFailAction` <a name="resetAuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetAuthFailAction"></a>

```typescript
public resetAuthFailAction(): void
```

##### `resetLogin` <a name="resetLogin" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetLogin"></a>

```typescript
public resetLogin(): void
```

##### `resetSecurityLevel` <a name="resetSecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetSecurityLevel"></a>

```typescript
public resetSecurityLevel(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailActionInput">authFailActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.loginInput">loginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.scriptInput">scriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevelInput">securityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailAction">authFailAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.script">script</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevel">securityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `authFailActionInput`<sup>Optional</sup> <a name="authFailActionInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailActionInput"></a>

```typescript
public readonly authFailActionInput: string;
```

- *Type:* string

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.loginInput"></a>

```typescript
public readonly loginInput: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.scriptInput"></a>

```typescript
public readonly scriptInput: string;
```

- *Type:* string

---

##### `securityLevelInput`<sup>Optional</sup> <a name="securityLevelInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevelInput"></a>

```typescript
public readonly securityLevelInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `authFailAction`<sup>Required</sup> <a name="authFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.authFailAction"></a>

```typescript
public readonly authFailAction: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.script"></a>

```typescript
public readonly script: string;
```

- *Type:* string

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionApiConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionApiConfig">GoogleAppEngineFlexibleAppVersionApiConfig</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resetAggregationWindowLength">resetAggregationWindowLength</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAggregationWindowLength` <a name="resetAggregationWindowLength" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.resetAggregationWindowLength"></a>

```typescript
public resetAggregationWindowLength(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLengthInput">aggregationWindowLengthInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilizationInput">targetUtilizationInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLength">aggregationWindowLength</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilization">targetUtilization</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `aggregationWindowLengthInput`<sup>Optional</sup> <a name="aggregationWindowLengthInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLengthInput"></a>

```typescript
public readonly aggregationWindowLengthInput: string;
```

- *Type:* string

---

##### `targetUtilizationInput`<sup>Optional</sup> <a name="targetUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilizationInput"></a>

```typescript
public readonly targetUtilizationInput: number;
```

- *Type:* number

---

##### `aggregationWindowLength`<sup>Required</sup> <a name="aggregationWindowLength" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.aggregationWindowLength"></a>

```typescript
public readonly aggregationWindowLength: string;
```

- *Type:* string

---

##### `targetUtilization`<sup>Required</sup> <a name="targetUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.targetUtilization"></a>

```typescript
public readonly targetUtilization: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadBytesPerSecond">resetTargetReadBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadOpsPerSecond">resetTargetReadOpsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteBytesPerSecond">resetTargetWriteBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteOpsPerSecond">resetTargetWriteOpsPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetReadBytesPerSecond` <a name="resetTargetReadBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadBytesPerSecond"></a>

```typescript
public resetTargetReadBytesPerSecond(): void
```

##### `resetTargetReadOpsPerSecond` <a name="resetTargetReadOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetReadOpsPerSecond"></a>

```typescript
public resetTargetReadOpsPerSecond(): void
```

##### `resetTargetWriteBytesPerSecond` <a name="resetTargetWriteBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteBytesPerSecond"></a>

```typescript
public resetTargetWriteBytesPerSecond(): void
```

##### `resetTargetWriteOpsPerSecond` <a name="resetTargetWriteOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.resetTargetWriteOpsPerSecond"></a>

```typescript
public resetTargetWriteOpsPerSecond(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecondInput">targetReadBytesPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecondInput">targetReadOpsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecondInput">targetWriteBytesPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecondInput">targetWriteOpsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecond">targetReadBytesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecond">targetReadOpsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecond">targetWriteBytesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecond">targetWriteOpsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetReadBytesPerSecondInput`<sup>Optional</sup> <a name="targetReadBytesPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecondInput"></a>

```typescript
public readonly targetReadBytesPerSecondInput: number;
```

- *Type:* number

---

##### `targetReadOpsPerSecondInput`<sup>Optional</sup> <a name="targetReadOpsPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecondInput"></a>

```typescript
public readonly targetReadOpsPerSecondInput: number;
```

- *Type:* number

---

##### `targetWriteBytesPerSecondInput`<sup>Optional</sup> <a name="targetWriteBytesPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecondInput"></a>

```typescript
public readonly targetWriteBytesPerSecondInput: number;
```

- *Type:* number

---

##### `targetWriteOpsPerSecondInput`<sup>Optional</sup> <a name="targetWriteOpsPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecondInput"></a>

```typescript
public readonly targetWriteOpsPerSecondInput: number;
```

- *Type:* number

---

##### `targetReadBytesPerSecond`<sup>Required</sup> <a name="targetReadBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadBytesPerSecond"></a>

```typescript
public readonly targetReadBytesPerSecond: number;
```

- *Type:* number

---

##### `targetReadOpsPerSecond`<sup>Required</sup> <a name="targetReadOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetReadOpsPerSecond"></a>

```typescript
public readonly targetReadOpsPerSecond: number;
```

- *Type:* number

---

##### `targetWriteBytesPerSecond`<sup>Required</sup> <a name="targetWriteBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteBytesPerSecond"></a>

```typescript
public readonly targetWriteBytesPerSecond: number;
```

- *Type:* number

---

##### `targetWriteOpsPerSecond`<sup>Required</sup> <a name="targetWriteOpsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.targetWriteOpsPerSecond"></a>

```typescript
public readonly targetWriteOpsPerSecond: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedBytesPerSecond">resetTargetReceivedBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedPacketsPerSecond">resetTargetReceivedPacketsPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentBytesPerSecond">resetTargetSentBytesPerSecond</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentPacketsPerSecond">resetTargetSentPacketsPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetReceivedBytesPerSecond` <a name="resetTargetReceivedBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedBytesPerSecond"></a>

```typescript
public resetTargetReceivedBytesPerSecond(): void
```

##### `resetTargetReceivedPacketsPerSecond` <a name="resetTargetReceivedPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetReceivedPacketsPerSecond"></a>

```typescript
public resetTargetReceivedPacketsPerSecond(): void
```

##### `resetTargetSentBytesPerSecond` <a name="resetTargetSentBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentBytesPerSecond"></a>

```typescript
public resetTargetSentBytesPerSecond(): void
```

##### `resetTargetSentPacketsPerSecond` <a name="resetTargetSentPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.resetTargetSentPacketsPerSecond"></a>

```typescript
public resetTargetSentPacketsPerSecond(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecondInput">targetReceivedBytesPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecondInput">targetReceivedPacketsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecondInput">targetSentBytesPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecondInput">targetSentPacketsPerSecondInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecond">targetReceivedBytesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecond">targetReceivedPacketsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecond">targetSentBytesPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecond">targetSentPacketsPerSecond</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetReceivedBytesPerSecondInput`<sup>Optional</sup> <a name="targetReceivedBytesPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecondInput"></a>

```typescript
public readonly targetReceivedBytesPerSecondInput: number;
```

- *Type:* number

---

##### `targetReceivedPacketsPerSecondInput`<sup>Optional</sup> <a name="targetReceivedPacketsPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecondInput"></a>

```typescript
public readonly targetReceivedPacketsPerSecondInput: number;
```

- *Type:* number

---

##### `targetSentBytesPerSecondInput`<sup>Optional</sup> <a name="targetSentBytesPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecondInput"></a>

```typescript
public readonly targetSentBytesPerSecondInput: number;
```

- *Type:* number

---

##### `targetSentPacketsPerSecondInput`<sup>Optional</sup> <a name="targetSentPacketsPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecondInput"></a>

```typescript
public readonly targetSentPacketsPerSecondInput: number;
```

- *Type:* number

---

##### `targetReceivedBytesPerSecond`<sup>Required</sup> <a name="targetReceivedBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedBytesPerSecond"></a>

```typescript
public readonly targetReceivedBytesPerSecond: number;
```

- *Type:* number

---

##### `targetReceivedPacketsPerSecond`<sup>Required</sup> <a name="targetReceivedPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetReceivedPacketsPerSecond"></a>

```typescript
public readonly targetReceivedPacketsPerSecond: number;
```

- *Type:* number

---

##### `targetSentBytesPerSecond`<sup>Required</sup> <a name="targetSentBytesPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentBytesPerSecond"></a>

```typescript
public readonly targetSentBytesPerSecond: number;
```

- *Type:* number

---

##### `targetSentPacketsPerSecond`<sup>Required</sup> <a name="targetSentPacketsPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.targetSentPacketsPerSecond"></a>

```typescript
public readonly targetSentPacketsPerSecond: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization">putCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization">putDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization">putNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization">putRequestUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetCoolDownPeriod">resetCoolDownPeriod</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetDiskUtilization">resetDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests">resetMaxConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances">resetMaxIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency">resetMaxPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxTotalInstances">resetMaxTotalInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinIdleInstances">resetMinIdleInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinPendingLatency">resetMinPendingLatency</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinTotalInstances">resetMinTotalInstances</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetNetworkUtilization">resetNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetRequestUtilization">resetRequestUtilization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCpuUtilization` <a name="putCpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization"></a>

```typescript
public putCpuUtilization(value: GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putCpuUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---

##### `putDiskUtilization` <a name="putDiskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization"></a>

```typescript
public putDiskUtilization(value: GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putDiskUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---

##### `putNetworkUtilization` <a name="putNetworkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization"></a>

```typescript
public putNetworkUtilization(value: GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putNetworkUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---

##### `putRequestUtilization` <a name="putRequestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization"></a>

```typescript
public putRequestUtilization(value: GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.putRequestUtilization.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---

##### `resetCoolDownPeriod` <a name="resetCoolDownPeriod" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetCoolDownPeriod"></a>

```typescript
public resetCoolDownPeriod(): void
```

##### `resetDiskUtilization` <a name="resetDiskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetDiskUtilization"></a>

```typescript
public resetDiskUtilization(): void
```

##### `resetMaxConcurrentRequests` <a name="resetMaxConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxConcurrentRequests"></a>

```typescript
public resetMaxConcurrentRequests(): void
```

##### `resetMaxIdleInstances` <a name="resetMaxIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxIdleInstances"></a>

```typescript
public resetMaxIdleInstances(): void
```

##### `resetMaxPendingLatency` <a name="resetMaxPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxPendingLatency"></a>

```typescript
public resetMaxPendingLatency(): void
```

##### `resetMaxTotalInstances` <a name="resetMaxTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMaxTotalInstances"></a>

```typescript
public resetMaxTotalInstances(): void
```

##### `resetMinIdleInstances` <a name="resetMinIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinIdleInstances"></a>

```typescript
public resetMinIdleInstances(): void
```

##### `resetMinPendingLatency` <a name="resetMinPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinPendingLatency"></a>

```typescript
public resetMinPendingLatency(): void
```

##### `resetMinTotalInstances` <a name="resetMinTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetMinTotalInstances"></a>

```typescript
public resetMinTotalInstances(): void
```

##### `resetNetworkUtilization` <a name="resetNetworkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetNetworkUtilization"></a>

```typescript
public resetNetworkUtilization(): void
```

##### `resetRequestUtilization` <a name="resetRequestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.resetRequestUtilization"></a>

```typescript
public resetRequestUtilization(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilization">cpuUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilization">diskUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilization">networkUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilization">requestUtilization</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriodInput">coolDownPeriodInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilizationInput">cpuUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilizationInput">diskUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput">maxConcurrentRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput">maxIdleInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput">maxPendingLatencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstancesInput">maxTotalInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput">minIdleInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput">minPendingLatencyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstancesInput">minTotalInstancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilizationInput">networkUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilizationInput">requestUtilizationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriod">coolDownPeriod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests">maxConcurrentRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstances">maxIdleInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatency">maxPendingLatency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstances">maxTotalInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstances">minIdleInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatency">minPendingLatency</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstances">minTotalInstances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cpuUtilization`<sup>Required</sup> <a name="cpuUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilization"></a>

```typescript
public readonly cpuUtilization: GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilizationOutputReference</a>

---

##### `diskUtilization`<sup>Required</sup> <a name="diskUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilization"></a>

```typescript
public readonly diskUtilization: GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilizationOutputReference</a>

---

##### `networkUtilization`<sup>Required</sup> <a name="networkUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilization"></a>

```typescript
public readonly networkUtilization: GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilizationOutputReference</a>

---

##### `requestUtilization`<sup>Required</sup> <a name="requestUtilization" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilization"></a>

```typescript
public readonly requestUtilization: GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference</a>

---

##### `coolDownPeriodInput`<sup>Optional</sup> <a name="coolDownPeriodInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriodInput"></a>

```typescript
public readonly coolDownPeriodInput: string;
```

- *Type:* string

---

##### `cpuUtilizationInput`<sup>Optional</sup> <a name="cpuUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.cpuUtilizationInput"></a>

```typescript
public readonly cpuUtilizationInput: GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingCpuUtilization</a>

---

##### `diskUtilizationInput`<sup>Optional</sup> <a name="diskUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.diskUtilizationInput"></a>

```typescript
public readonly diskUtilizationInput: GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingDiskUtilization</a>

---

##### `maxConcurrentRequestsInput`<sup>Optional</sup> <a name="maxConcurrentRequestsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequestsInput"></a>

```typescript
public readonly maxConcurrentRequestsInput: number;
```

- *Type:* number

---

##### `maxIdleInstancesInput`<sup>Optional</sup> <a name="maxIdleInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstancesInput"></a>

```typescript
public readonly maxIdleInstancesInput: number;
```

- *Type:* number

---

##### `maxPendingLatencyInput`<sup>Optional</sup> <a name="maxPendingLatencyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatencyInput"></a>

```typescript
public readonly maxPendingLatencyInput: string;
```

- *Type:* string

---

##### `maxTotalInstancesInput`<sup>Optional</sup> <a name="maxTotalInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstancesInput"></a>

```typescript
public readonly maxTotalInstancesInput: number;
```

- *Type:* number

---

##### `minIdleInstancesInput`<sup>Optional</sup> <a name="minIdleInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstancesInput"></a>

```typescript
public readonly minIdleInstancesInput: number;
```

- *Type:* number

---

##### `minPendingLatencyInput`<sup>Optional</sup> <a name="minPendingLatencyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatencyInput"></a>

```typescript
public readonly minPendingLatencyInput: string;
```

- *Type:* string

---

##### `minTotalInstancesInput`<sup>Optional</sup> <a name="minTotalInstancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstancesInput"></a>

```typescript
public readonly minTotalInstancesInput: number;
```

- *Type:* number

---

##### `networkUtilizationInput`<sup>Optional</sup> <a name="networkUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.networkUtilizationInput"></a>

```typescript
public readonly networkUtilizationInput: GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingNetworkUtilization</a>

---

##### `requestUtilizationInput`<sup>Optional</sup> <a name="requestUtilizationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.requestUtilizationInput"></a>

```typescript
public readonly requestUtilizationInput: GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---

##### `coolDownPeriod`<sup>Required</sup> <a name="coolDownPeriod" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.coolDownPeriod"></a>

```typescript
public readonly coolDownPeriod: string;
```

- *Type:* string

---

##### `maxConcurrentRequests`<sup>Required</sup> <a name="maxConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxConcurrentRequests"></a>

```typescript
public readonly maxConcurrentRequests: number;
```

- *Type:* number

---

##### `maxIdleInstances`<sup>Required</sup> <a name="maxIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxIdleInstances"></a>

```typescript
public readonly maxIdleInstances: number;
```

- *Type:* number

---

##### `maxPendingLatency`<sup>Required</sup> <a name="maxPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxPendingLatency"></a>

```typescript
public readonly maxPendingLatency: string;
```

- *Type:* string

---

##### `maxTotalInstances`<sup>Required</sup> <a name="maxTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.maxTotalInstances"></a>

```typescript
public readonly maxTotalInstances: number;
```

- *Type:* number

---

##### `minIdleInstances`<sup>Required</sup> <a name="minIdleInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minIdleInstances"></a>

```typescript
public readonly minIdleInstances: number;
```

- *Type:* number

---

##### `minPendingLatency`<sup>Required</sup> <a name="minPendingLatency" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minPendingLatency"></a>

```typescript
public readonly minPendingLatency: string;
```

- *Type:* string

---

##### `minTotalInstances`<sup>Required</sup> <a name="minTotalInstances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.minTotalInstances"></a>

```typescript
public readonly minTotalInstances: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionAutomaticScaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScaling">GoogleAppEngineFlexibleAppVersionAutomaticScaling</a>

---


### GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference <a name="GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetConcurrentRequests">resetTargetConcurrentRequests</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetRequestCountPerSecond">resetTargetRequestCountPerSecond</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTargetConcurrentRequests` <a name="resetTargetConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetConcurrentRequests"></a>

```typescript
public resetTargetConcurrentRequests(): void
```

##### `resetTargetRequestCountPerSecond` <a name="resetTargetRequestCountPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.resetTargetRequestCountPerSecond"></a>

```typescript
public resetTargetRequestCountPerSecond(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequestsInput">targetConcurrentRequestsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecondInput">targetRequestCountPerSecondInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequests">targetConcurrentRequests</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecond">targetRequestCountPerSecond</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `targetConcurrentRequestsInput`<sup>Optional</sup> <a name="targetConcurrentRequestsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequestsInput"></a>

```typescript
public readonly targetConcurrentRequestsInput: number;
```

- *Type:* number

---

##### `targetRequestCountPerSecondInput`<sup>Optional</sup> <a name="targetRequestCountPerSecondInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecondInput"></a>

```typescript
public readonly targetRequestCountPerSecondInput: string;
```

- *Type:* string

---

##### `targetConcurrentRequests`<sup>Required</sup> <a name="targetConcurrentRequests" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetConcurrentRequests"></a>

```typescript
public readonly targetConcurrentRequests: number;
```

- *Type:* number

---

##### `targetRequestCountPerSecond`<sup>Required</sup> <a name="targetRequestCountPerSecond" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.targetRequestCountPerSecond"></a>

```typescript
public readonly targetRequestCountPerSecond: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilizationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization">GoogleAppEngineFlexibleAppVersionAutomaticScalingRequestUtilization</a>

---


### GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resetCloudBuildTimeout">resetCloudBuildTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCloudBuildTimeout` <a name="resetCloudBuildTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.resetCloudBuildTimeout"></a>

```typescript
public resetCloudBuildTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPathInput">appYamlPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeoutInput">cloudBuildTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPath">appYamlPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeout">cloudBuildTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appYamlPathInput`<sup>Optional</sup> <a name="appYamlPathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPathInput"></a>

```typescript
public readonly appYamlPathInput: string;
```

- *Type:* string

---

##### `cloudBuildTimeoutInput`<sup>Optional</sup> <a name="cloudBuildTimeoutInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeoutInput"></a>

```typescript
public readonly cloudBuildTimeoutInput: string;
```

- *Type:* string

---

##### `appYamlPath`<sup>Required</sup> <a name="appYamlPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.appYamlPath"></a>

```typescript
public readonly appYamlPath: string;
```

- *Type:* string

---

##### `cloudBuildTimeout`<sup>Required</sup> <a name="cloudBuildTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.cloudBuildTimeout"></a>

```typescript
public readonly cloudBuildTimeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---


### GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.imageInput">imageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.image">image</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.imageInput"></a>

```typescript
public readonly imageInput: string;
```

- *Type:* string

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.image"></a>

```typescript
public readonly image: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionDeploymentContainer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a>

---


### GoogleAppEngineFlexibleAppVersionDeploymentFilesList <a name="GoogleAppEngineFlexibleAppVersionDeploymentFilesList" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.get"></a>

```typescript
public get(index: number): GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles">GoogleAppEngineFlexibleAppVersionDeploymentFiles</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineFlexibleAppVersionDeploymentFiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles">GoogleAppEngineFlexibleAppVersionDeploymentFiles</a>[]

---


### GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resetSha1Sum">resetSha1Sum</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSha1Sum` <a name="resetSha1Sum" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.resetSha1Sum"></a>

```typescript
public resetSha1Sum(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1SumInput">sha1SumInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrlInput">sourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1Sum">sha1Sum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles">GoogleAppEngineFlexibleAppVersionDeploymentFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sha1SumInput`<sup>Optional</sup> <a name="sha1SumInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1SumInput"></a>

```typescript
public readonly sha1SumInput: string;
```

- *Type:* string

---

##### `sourceUrlInput`<sup>Optional</sup> <a name="sourceUrlInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrlInput"></a>

```typescript
public readonly sourceUrlInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sha1Sum`<sup>Required</sup> <a name="sha1Sum" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sha1Sum"></a>

```typescript
public readonly sha1Sum: string;
```

- *Type:* string

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineFlexibleAppVersionDeploymentFiles;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles">GoogleAppEngineFlexibleAppVersionDeploymentFiles</a>

---


### GoogleAppEngineFlexibleAppVersionDeploymentOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions">putCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putFiles">putFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putZip">putZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetCloudBuildOptions">resetCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetContainer">resetContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetFiles">resetFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetZip">resetZip</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCloudBuildOptions` <a name="putCloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions"></a>

```typescript
public putCloudBuildOptions(value: GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putCloudBuildOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---

##### `putContainer` <a name="putContainer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putContainer"></a>

```typescript
public putContainer(value: GoogleAppEngineFlexibleAppVersionDeploymentContainer): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a>

---

##### `putFiles` <a name="putFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putFiles"></a>

```typescript
public putFiles(value: IResolvable | GoogleAppEngineFlexibleAppVersionDeploymentFiles[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putFiles.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles">GoogleAppEngineFlexibleAppVersionDeploymentFiles</a>[]

---

##### `putZip` <a name="putZip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putZip"></a>

```typescript
public putZip(value: GoogleAppEngineFlexibleAppVersionDeploymentZip): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.putZip.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a>

---

##### `resetCloudBuildOptions` <a name="resetCloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetCloudBuildOptions"></a>

```typescript
public resetCloudBuildOptions(): void
```

##### `resetContainer` <a name="resetContainer" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetContainer"></a>

```typescript
public resetContainer(): void
```

##### `resetFiles` <a name="resetFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetFiles"></a>

```typescript
public resetFiles(): void
```

##### `resetZip` <a name="resetZip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.resetZip"></a>

```typescript
public resetZip(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptions">cloudBuildOptions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.container">container</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.files">files</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList">GoogleAppEngineFlexibleAppVersionDeploymentFilesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.zip">zip</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptionsInput">cloudBuildOptionsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.containerInput">containerInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.filesInput">filesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles">GoogleAppEngineFlexibleAppVersionDeploymentFiles</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.zipInput">zipInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudBuildOptions`<sup>Required</sup> <a name="cloudBuildOptions" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptions"></a>

```typescript
public readonly cloudBuildOptions: GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptionsOutputReference</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.container"></a>

```typescript
public readonly container: GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentContainerOutputReference</a>

---

##### `files`<sup>Required</sup> <a name="files" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.files"></a>

```typescript
public readonly files: GoogleAppEngineFlexibleAppVersionDeploymentFilesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFilesList">GoogleAppEngineFlexibleAppVersionDeploymentFilesList</a>

---

##### `zip`<sup>Required</sup> <a name="zip" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.zip"></a>

```typescript
public readonly zip: GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference">GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference</a>

---

##### `cloudBuildOptionsInput`<sup>Optional</sup> <a name="cloudBuildOptionsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.cloudBuildOptionsInput"></a>

```typescript
public readonly cloudBuildOptionsInput: GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions">GoogleAppEngineFlexibleAppVersionDeploymentCloudBuildOptions</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.containerInput"></a>

```typescript
public readonly containerInput: GoogleAppEngineFlexibleAppVersionDeploymentContainer;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentContainer">GoogleAppEngineFlexibleAppVersionDeploymentContainer</a>

---

##### `filesInput`<sup>Optional</sup> <a name="filesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.filesInput"></a>

```typescript
public readonly filesInput: IResolvable | GoogleAppEngineFlexibleAppVersionDeploymentFiles[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentFiles">GoogleAppEngineFlexibleAppVersionDeploymentFiles</a>[]

---

##### `zipInput`<sup>Optional</sup> <a name="zipInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.zipInput"></a>

```typescript
public readonly zipInput: GoogleAppEngineFlexibleAppVersionDeploymentZip;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionDeployment;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeployment">GoogleAppEngineFlexibleAppVersionDeployment</a>

---


### GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference <a name="GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resetFilesCount">resetFilesCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFilesCount` <a name="resetFilesCount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.resetFilesCount"></a>

```typescript
public resetFilesCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCountInput">filesCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrlInput">sourceUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCount">filesCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrl">sourceUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `filesCountInput`<sup>Optional</sup> <a name="filesCountInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCountInput"></a>

```typescript
public readonly filesCountInput: number;
```

- *Type:* number

---

##### `sourceUrlInput`<sup>Optional</sup> <a name="sourceUrlInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrlInput"></a>

```typescript
public readonly sourceUrlInput: string;
```

- *Type:* string

---

##### `filesCount`<sup>Required</sup> <a name="filesCount" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.filesCount"></a>

```typescript
public readonly filesCount: number;
```

- *Type:* number

---

##### `sourceUrl`<sup>Required</sup> <a name="sourceUrl" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.sourceUrl"></a>

```typescript
public readonly sourceUrl: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZipOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionDeploymentZip;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionDeploymentZip">GoogleAppEngineFlexibleAppVersionDeploymentZip</a>

---


### GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference <a name="GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetConfigId">resetConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetDisableTraceSampling">resetDisableTraceSampling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetRolloutStrategy">resetRolloutStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigId` <a name="resetConfigId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetConfigId"></a>

```typescript
public resetConfigId(): void
```

##### `resetDisableTraceSampling` <a name="resetDisableTraceSampling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetDisableTraceSampling"></a>

```typescript
public resetDisableTraceSampling(): void
```

##### `resetRolloutStrategy` <a name="resetRolloutStrategy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.resetRolloutStrategy"></a>

```typescript
public resetRolloutStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configIdInput">configIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSamplingInput">disableTraceSamplingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategyInput">rolloutStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configId">configId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSampling">disableTraceSampling</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategy">rolloutStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configIdInput`<sup>Optional</sup> <a name="configIdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configIdInput"></a>

```typescript
public readonly configIdInput: string;
```

- *Type:* string

---

##### `disableTraceSamplingInput`<sup>Optional</sup> <a name="disableTraceSamplingInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSamplingInput"></a>

```typescript
public readonly disableTraceSamplingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `rolloutStrategyInput`<sup>Optional</sup> <a name="rolloutStrategyInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategyInput"></a>

```typescript
public readonly rolloutStrategyInput: string;
```

- *Type:* string

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.configId"></a>

```typescript
public readonly configId: string;
```

- *Type:* string

---

##### `disableTraceSampling`<sup>Required</sup> <a name="disableTraceSampling" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.disableTraceSampling"></a>

```typescript
public readonly disableTraceSampling: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rolloutStrategy`<sup>Required</sup> <a name="rolloutStrategy" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.rolloutStrategy"></a>

```typescript
public readonly rolloutStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiServiceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionEndpointsApiService;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEndpointsApiService">GoogleAppEngineFlexibleAppVersionEndpointsApiService</a>

---


### GoogleAppEngineFlexibleAppVersionEntrypointOutputReference <a name="GoogleAppEngineFlexibleAppVersionEntrypointOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.shellInput">shellInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.shell">shell</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `shellInput`<sup>Optional</sup> <a name="shellInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.shellInput"></a>

```typescript
public readonly shellInput: string;
```

- *Type:* string

---

##### `shell`<sup>Required</sup> <a name="shell" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.shell"></a>

```typescript
public readonly shell: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypointOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionEntrypoint;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionEntrypoint">GoogleAppEngineFlexibleAppVersionEntrypoint</a>

---


### GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference <a name="GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resetOperatingSystem">resetOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resetRuntimeVersion">resetRuntimeVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOperatingSystem` <a name="resetOperatingSystem" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resetOperatingSystem"></a>

```typescript
public resetOperatingSystem(): void
```

##### `resetRuntimeVersion` <a name="resetRuntimeVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.resetRuntimeVersion"></a>

```typescript
public resetRuntimeVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.operatingSystemInput">operatingSystemInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.operatingSystem">operatingSystem</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `operatingSystemInput`<sup>Optional</sup> <a name="operatingSystemInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.operatingSystemInput"></a>

```typescript
public readonly operatingSystemInput: string;
```

- *Type:* string

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `operatingSystem`<sup>Required</sup> <a name="operatingSystem" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.operatingSystem"></a>

```typescript
public readonly operatingSystem: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings">GoogleAppEngineFlexibleAppVersionFlexibleRuntimeSettings</a>

---


### GoogleAppEngineFlexibleAppVersionHandlersList <a name="GoogleAppEngineFlexibleAppVersionHandlersList" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.get"></a>

```typescript
public get(index: number): GoogleAppEngineFlexibleAppVersionHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers">GoogleAppEngineFlexibleAppVersionHandlers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineFlexibleAppVersionHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers">GoogleAppEngineFlexibleAppVersionHandlers</a>[]

---


### GoogleAppEngineFlexibleAppVersionHandlersOutputReference <a name="GoogleAppEngineFlexibleAppVersionHandlersOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putScript">putScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles">putStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetAuthFailAction">resetAuthFailAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetLogin">resetLogin</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetRedirectHttpResponseCode">resetRedirectHttpResponseCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetScript">resetScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetSecurityLevel">resetSecurityLevel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetStaticFiles">resetStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetUrlRegex">resetUrlRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScript` <a name="putScript" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putScript"></a>

```typescript
public putScript(value: GoogleAppEngineFlexibleAppVersionHandlersScript): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putScript.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a>

---

##### `putStaticFiles` <a name="putStaticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles"></a>

```typescript
public putStaticFiles(value: GoogleAppEngineFlexibleAppVersionHandlersStaticFiles): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.putStaticFiles.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a>

---

##### `resetAuthFailAction` <a name="resetAuthFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetAuthFailAction"></a>

```typescript
public resetAuthFailAction(): void
```

##### `resetLogin` <a name="resetLogin" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetLogin"></a>

```typescript
public resetLogin(): void
```

##### `resetRedirectHttpResponseCode` <a name="resetRedirectHttpResponseCode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetRedirectHttpResponseCode"></a>

```typescript
public resetRedirectHttpResponseCode(): void
```

##### `resetScript` <a name="resetScript" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetScript"></a>

```typescript
public resetScript(): void
```

##### `resetSecurityLevel` <a name="resetSecurityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetSecurityLevel"></a>

```typescript
public resetSecurityLevel(): void
```

##### `resetStaticFiles` <a name="resetStaticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetStaticFiles"></a>

```typescript
public resetStaticFiles(): void
```

##### `resetUrlRegex` <a name="resetUrlRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.resetUrlRegex"></a>

```typescript
public resetUrlRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.script">script</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference">GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.staticFiles">staticFiles</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference">GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.authFailActionInput">authFailActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.loginInput">loginInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput">redirectHttpResponseCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.scriptInput">scriptInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevelInput">securityLevelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.staticFilesInput">staticFilesInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegexInput">urlRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.authFailAction">authFailAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.login">login</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCode">redirectHttpResponseCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevel">securityLevel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegex">urlRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers">GoogleAppEngineFlexibleAppVersionHandlers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `script`<sup>Required</sup> <a name="script" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.script"></a>

```typescript
public readonly script: GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference">GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference</a>

---

##### `staticFiles`<sup>Required</sup> <a name="staticFiles" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.staticFiles"></a>

```typescript
public readonly staticFiles: GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference">GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference</a>

---

##### `authFailActionInput`<sup>Optional</sup> <a name="authFailActionInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.authFailActionInput"></a>

```typescript
public readonly authFailActionInput: string;
```

- *Type:* string

---

##### `loginInput`<sup>Optional</sup> <a name="loginInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.loginInput"></a>

```typescript
public readonly loginInput: string;
```

- *Type:* string

---

##### `redirectHttpResponseCodeInput`<sup>Optional</sup> <a name="redirectHttpResponseCodeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCodeInput"></a>

```typescript
public readonly redirectHttpResponseCodeInput: string;
```

- *Type:* string

---

##### `scriptInput`<sup>Optional</sup> <a name="scriptInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.scriptInput"></a>

```typescript
public readonly scriptInput: GoogleAppEngineFlexibleAppVersionHandlersScript;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a>

---

##### `securityLevelInput`<sup>Optional</sup> <a name="securityLevelInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevelInput"></a>

```typescript
public readonly securityLevelInput: string;
```

- *Type:* string

---

##### `staticFilesInput`<sup>Optional</sup> <a name="staticFilesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.staticFilesInput"></a>

```typescript
public readonly staticFilesInput: GoogleAppEngineFlexibleAppVersionHandlersStaticFiles;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a>

---

##### `urlRegexInput`<sup>Optional</sup> <a name="urlRegexInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegexInput"></a>

```typescript
public readonly urlRegexInput: string;
```

- *Type:* string

---

##### `authFailAction`<sup>Required</sup> <a name="authFailAction" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.authFailAction"></a>

```typescript
public readonly authFailAction: string;
```

- *Type:* string

---

##### `login`<sup>Required</sup> <a name="login" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.login"></a>

```typescript
public readonly login: string;
```

- *Type:* string

---

##### `redirectHttpResponseCode`<sup>Required</sup> <a name="redirectHttpResponseCode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.redirectHttpResponseCode"></a>

```typescript
public readonly redirectHttpResponseCode: string;
```

- *Type:* string

---

##### `securityLevel`<sup>Required</sup> <a name="securityLevel" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.securityLevel"></a>

```typescript
public readonly securityLevel: string;
```

- *Type:* string

---

##### `urlRegex`<sup>Required</sup> <a name="urlRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.urlRegex"></a>

```typescript
public readonly urlRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineFlexibleAppVersionHandlers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlers">GoogleAppEngineFlexibleAppVersionHandlers</a>

---


### GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference <a name="GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPathInput">scriptPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPath">scriptPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `scriptPathInput`<sup>Optional</sup> <a name="scriptPathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPathInput"></a>

```typescript
public readonly scriptPathInput: string;
```

- *Type:* string

---

##### `scriptPath`<sup>Required</sup> <a name="scriptPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.scriptPath"></a>

```typescript
public readonly scriptPath: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScriptOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionHandlersScript;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersScript">GoogleAppEngineFlexibleAppVersionHandlersScript</a>

---


### GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference <a name="GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable">resetApplicationReadable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetExpiration">resetExpiration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders">resetHttpHeaders</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetMimeType">resetMimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile">resetRequireMatchingFile</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex">resetUploadPathRegex</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApplicationReadable` <a name="resetApplicationReadable" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetApplicationReadable"></a>

```typescript
public resetApplicationReadable(): void
```

##### `resetExpiration` <a name="resetExpiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetExpiration"></a>

```typescript
public resetExpiration(): void
```

##### `resetHttpHeaders` <a name="resetHttpHeaders" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetHttpHeaders"></a>

```typescript
public resetHttpHeaders(): void
```

##### `resetMimeType` <a name="resetMimeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetMimeType"></a>

```typescript
public resetMimeType(): void
```

##### `resetPath` <a name="resetPath" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetPath"></a>

```typescript
public resetPath(): void
```

##### `resetRequireMatchingFile` <a name="resetRequireMatchingFile" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetRequireMatchingFile"></a>

```typescript
public resetRequireMatchingFile(): void
```

##### `resetUploadPathRegex` <a name="resetUploadPathRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.resetUploadPathRegex"></a>

```typescript
public resetUploadPathRegex(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput">applicationReadableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expirationInput">expirationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput">httpHeadersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput">mimeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput">requireMatchingFileInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput">uploadPathRegexInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadable">applicationReadable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expiration">expiration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeaders">httpHeaders</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeType">mimeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile">requireMatchingFile</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex">uploadPathRegex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `applicationReadableInput`<sup>Optional</sup> <a name="applicationReadableInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadableInput"></a>

```typescript
public readonly applicationReadableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expirationInput`<sup>Optional</sup> <a name="expirationInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expirationInput"></a>

```typescript
public readonly expirationInput: string;
```

- *Type:* string

---

##### `httpHeadersInput`<sup>Optional</sup> <a name="httpHeadersInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeadersInput"></a>

```typescript
public readonly httpHeadersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mimeTypeInput`<sup>Optional</sup> <a name="mimeTypeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeTypeInput"></a>

```typescript
public readonly mimeTypeInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `requireMatchingFileInput`<sup>Optional</sup> <a name="requireMatchingFileInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFileInput"></a>

```typescript
public readonly requireMatchingFileInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uploadPathRegexInput`<sup>Optional</sup> <a name="uploadPathRegexInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegexInput"></a>

```typescript
public readonly uploadPathRegexInput: string;
```

- *Type:* string

---

##### `applicationReadable`<sup>Required</sup> <a name="applicationReadable" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.applicationReadable"></a>

```typescript
public readonly applicationReadable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `expiration`<sup>Required</sup> <a name="expiration" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.expiration"></a>

```typescript
public readonly expiration: string;
```

- *Type:* string

---

##### `httpHeaders`<sup>Required</sup> <a name="httpHeaders" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.httpHeaders"></a>

```typescript
public readonly httpHeaders: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `mimeType`<sup>Required</sup> <a name="mimeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.mimeType"></a>

```typescript
public readonly mimeType: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `requireMatchingFile`<sup>Required</sup> <a name="requireMatchingFile" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.requireMatchingFile"></a>

```typescript
public readonly requireMatchingFile: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `uploadPathRegex`<sup>Required</sup> <a name="uploadPathRegex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.uploadPathRegex"></a>

```typescript
public readonly uploadPathRegex: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFilesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionHandlersStaticFiles;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionHandlersStaticFiles">GoogleAppEngineFlexibleAppVersionHandlersStaticFiles</a>

---


### GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference <a name="GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetCheckInterval">resetCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetInitialDelay">resetInitialDelay</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetSuccessThreshold">resetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCheckInterval` <a name="resetCheckInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetCheckInterval"></a>

```typescript
public resetCheckInterval(): void
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetInitialDelay` <a name="resetInitialDelay" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetInitialDelay"></a>

```typescript
public resetInitialDelay(): void
```

##### `resetSuccessThreshold` <a name="resetSuccessThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetSuccessThreshold"></a>

```typescript
public resetSuccessThreshold(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkIntervalInput">checkIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelayInput">initialDelayInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThresholdInput">successThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkInterval">checkInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelay">initialDelay</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThreshold">successThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `checkIntervalInput`<sup>Optional</sup> <a name="checkIntervalInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkIntervalInput"></a>

```typescript
public readonly checkIntervalInput: string;
```

- *Type:* string

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `initialDelayInput`<sup>Optional</sup> <a name="initialDelayInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelayInput"></a>

```typescript
public readonly initialDelayInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `successThresholdInput`<sup>Optional</sup> <a name="successThresholdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThresholdInput"></a>

```typescript
public readonly successThresholdInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `checkInterval`<sup>Required</sup> <a name="checkInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.checkInterval"></a>

```typescript
public readonly checkInterval: string;
```

- *Type:* string

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `initialDelay`<sup>Required</sup> <a name="initialDelay" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.initialDelay"></a>

```typescript
public readonly initialDelay: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionLivenessCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionLivenessCheck">GoogleAppEngineFlexibleAppVersionLivenessCheck</a>

---


### GoogleAppEngineFlexibleAppVersionManualScalingOutputReference <a name="GoogleAppEngineFlexibleAppVersionManualScalingOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.instancesInput">instancesInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.instances">instances</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.instancesInput"></a>

```typescript
public readonly instancesInput: number;
```

- *Type:* number

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.instances"></a>

```typescript
public readonly instances: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScalingOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionManualScaling;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionManualScaling">GoogleAppEngineFlexibleAppVersionManualScaling</a>

---


### GoogleAppEngineFlexibleAppVersionNetworkOutputReference <a name="GoogleAppEngineFlexibleAppVersionNetworkOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetForwardedPorts">resetForwardedPorts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceIpMode">resetInstanceIpMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceTag">resetInstanceTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetSessionAffinity">resetSessionAffinity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetSubnetwork">resetSubnetwork</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetForwardedPorts` <a name="resetForwardedPorts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetForwardedPorts"></a>

```typescript
public resetForwardedPorts(): void
```

##### `resetInstanceIpMode` <a name="resetInstanceIpMode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceIpMode"></a>

```typescript
public resetInstanceIpMode(): void
```

##### `resetInstanceTag` <a name="resetInstanceTag" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetInstanceTag"></a>

```typescript
public resetInstanceTag(): void
```

##### `resetSessionAffinity` <a name="resetSessionAffinity" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetSessionAffinity"></a>

```typescript
public resetSessionAffinity(): void
```

##### `resetSubnetwork` <a name="resetSubnetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.resetSubnetwork"></a>

```typescript
public resetSubnetwork(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPortsInput">forwardedPortsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceIpModeInput">instanceIpModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTagInput">instanceTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinityInput">sessionAffinityInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPorts">forwardedPorts</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceIpMode">instanceIpMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTag">instanceTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinity">sessionAffinity</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `forwardedPortsInput`<sup>Optional</sup> <a name="forwardedPortsInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPortsInput"></a>

```typescript
public readonly forwardedPortsInput: string[];
```

- *Type:* string[]

---

##### `instanceIpModeInput`<sup>Optional</sup> <a name="instanceIpModeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceIpModeInput"></a>

```typescript
public readonly instanceIpModeInput: string;
```

- *Type:* string

---

##### `instanceTagInput`<sup>Optional</sup> <a name="instanceTagInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTagInput"></a>

```typescript
public readonly instanceTagInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sessionAffinityInput`<sup>Optional</sup> <a name="sessionAffinityInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinityInput"></a>

```typescript
public readonly sessionAffinityInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `forwardedPorts`<sup>Required</sup> <a name="forwardedPorts" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.forwardedPorts"></a>

```typescript
public readonly forwardedPorts: string[];
```

- *Type:* string[]

---

##### `instanceIpMode`<sup>Required</sup> <a name="instanceIpMode" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceIpMode"></a>

```typescript
public readonly instanceIpMode: string;
```

- *Type:* string

---

##### `instanceTag`<sup>Required</sup> <a name="instanceTag" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.instanceTag"></a>

```typescript
public readonly instanceTag: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sessionAffinity`<sup>Required</sup> <a name="sessionAffinity" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.sessionAffinity"></a>

```typescript
public readonly sessionAffinity: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetworkOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionNetwork;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionNetwork">GoogleAppEngineFlexibleAppVersionNetwork</a>

---


### GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference <a name="GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetAppStartTimeout">resetAppStartTimeout</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetCheckInterval">resetCheckInterval</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetFailureThreshold">resetFailureThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetSuccessThreshold">resetSuccessThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetTimeout">resetTimeout</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAppStartTimeout` <a name="resetAppStartTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetAppStartTimeout"></a>

```typescript
public resetAppStartTimeout(): void
```

##### `resetCheckInterval` <a name="resetCheckInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetCheckInterval"></a>

```typescript
public resetCheckInterval(): void
```

##### `resetFailureThreshold` <a name="resetFailureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetFailureThreshold"></a>

```typescript
public resetFailureThreshold(): void
```

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetSuccessThreshold` <a name="resetSuccessThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetSuccessThreshold"></a>

```typescript
public resetSuccessThreshold(): void
```

##### `resetTimeout` <a name="resetTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.resetTimeout"></a>

```typescript
public resetTimeout(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeoutInput">appStartTimeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkIntervalInput">checkIntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThresholdInput">failureThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.pathInput">pathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThresholdInput">successThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeoutInput">timeoutInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeout">appStartTimeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkInterval">checkInterval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThreshold">failureThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThreshold">successThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeout">timeout</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `appStartTimeoutInput`<sup>Optional</sup> <a name="appStartTimeoutInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeoutInput"></a>

```typescript
public readonly appStartTimeoutInput: string;
```

- *Type:* string

---

##### `checkIntervalInput`<sup>Optional</sup> <a name="checkIntervalInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkIntervalInput"></a>

```typescript
public readonly checkIntervalInput: string;
```

- *Type:* string

---

##### `failureThresholdInput`<sup>Optional</sup> <a name="failureThresholdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThresholdInput"></a>

```typescript
public readonly failureThresholdInput: number;
```

- *Type:* number

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.pathInput"></a>

```typescript
public readonly pathInput: string;
```

- *Type:* string

---

##### `successThresholdInput`<sup>Optional</sup> <a name="successThresholdInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThresholdInput"></a>

```typescript
public readonly successThresholdInput: number;
```

- *Type:* number

---

##### `timeoutInput`<sup>Optional</sup> <a name="timeoutInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeoutInput"></a>

```typescript
public readonly timeoutInput: string;
```

- *Type:* string

---

##### `appStartTimeout`<sup>Required</sup> <a name="appStartTimeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.appStartTimeout"></a>

```typescript
public readonly appStartTimeout: string;
```

- *Type:* string

---

##### `checkInterval`<sup>Required</sup> <a name="checkInterval" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.checkInterval"></a>

```typescript
public readonly checkInterval: string;
```

- *Type:* string

---

##### `failureThreshold`<sup>Required</sup> <a name="failureThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.failureThreshold"></a>

```typescript
public readonly failureThreshold: number;
```

- *Type:* number

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `successThreshold`<sup>Required</sup> <a name="successThreshold" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.successThreshold"></a>

```typescript
public readonly successThreshold: number;
```

- *Type:* number

---

##### `timeout`<sup>Required</sup> <a name="timeout" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.timeout"></a>

```typescript
public readonly timeout: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionReadinessCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionReadinessCheck">GoogleAppEngineFlexibleAppVersionReadinessCheck</a>

---


### GoogleAppEngineFlexibleAppVersionResourcesOutputReference <a name="GoogleAppEngineFlexibleAppVersionResourcesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.putVolumes">putVolumes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetCpu">resetCpu</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetDiskGb">resetDiskGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetMemoryGb">resetMemoryGb</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetVolumes">resetVolumes</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVolumes` <a name="putVolumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.putVolumes"></a>

```typescript
public putVolumes(value: IResolvable | GoogleAppEngineFlexibleAppVersionResourcesVolumes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.putVolumes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes">GoogleAppEngineFlexibleAppVersionResourcesVolumes</a>[]

---

##### `resetCpu` <a name="resetCpu" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetCpu"></a>

```typescript
public resetCpu(): void
```

##### `resetDiskGb` <a name="resetDiskGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetDiskGb"></a>

```typescript
public resetDiskGb(): void
```

##### `resetMemoryGb` <a name="resetMemoryGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetMemoryGb"></a>

```typescript
public resetMemoryGb(): void
```

##### `resetVolumes` <a name="resetVolumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.resetVolumes"></a>

```typescript
public resetVolumes(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.volumes">volumes</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList">GoogleAppEngineFlexibleAppVersionResourcesVolumesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.cpuInput">cpuInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.diskGbInput">diskGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGbInput">memoryGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.volumesInput">volumesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes">GoogleAppEngineFlexibleAppVersionResourcesVolumes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.cpu">cpu</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.diskGb">diskGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGb">memoryGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `volumes`<sup>Required</sup> <a name="volumes" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.volumes"></a>

```typescript
public readonly volumes: GoogleAppEngineFlexibleAppVersionResourcesVolumesList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList">GoogleAppEngineFlexibleAppVersionResourcesVolumesList</a>

---

##### `cpuInput`<sup>Optional</sup> <a name="cpuInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.cpuInput"></a>

```typescript
public readonly cpuInput: number;
```

- *Type:* number

---

##### `diskGbInput`<sup>Optional</sup> <a name="diskGbInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.diskGbInput"></a>

```typescript
public readonly diskGbInput: number;
```

- *Type:* number

---

##### `memoryGbInput`<sup>Optional</sup> <a name="memoryGbInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGbInput"></a>

```typescript
public readonly memoryGbInput: number;
```

- *Type:* number

---

##### `volumesInput`<sup>Optional</sup> <a name="volumesInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.volumesInput"></a>

```typescript
public readonly volumesInput: IResolvable | GoogleAppEngineFlexibleAppVersionResourcesVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes">GoogleAppEngineFlexibleAppVersionResourcesVolumes</a>[]

---

##### `cpu`<sup>Required</sup> <a name="cpu" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.cpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* number

---

##### `diskGb`<sup>Required</sup> <a name="diskGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.diskGb"></a>

```typescript
public readonly diskGb: number;
```

- *Type:* number

---

##### `memoryGb`<sup>Required</sup> <a name="memoryGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.memoryGb"></a>

```typescript
public readonly memoryGb: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionResources;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResources">GoogleAppEngineFlexibleAppVersionResources</a>

---


### GoogleAppEngineFlexibleAppVersionResourcesVolumesList <a name="GoogleAppEngineFlexibleAppVersionResourcesVolumesList" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.get"></a>

```typescript
public get(index: number): GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes">GoogleAppEngineFlexibleAppVersionResourcesVolumes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineFlexibleAppVersionResourcesVolumes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes">GoogleAppEngineFlexibleAppVersionResourcesVolumes</a>[]

---


### GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference <a name="GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGbInput">sizeGbInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeTypeInput">volumeTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGb">sizeGb</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeType">volumeType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes">GoogleAppEngineFlexibleAppVersionResourcesVolumes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `sizeGbInput`<sup>Optional</sup> <a name="sizeGbInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGbInput"></a>

```typescript
public readonly sizeGbInput: number;
```

- *Type:* number

---

##### `volumeTypeInput`<sup>Optional</sup> <a name="volumeTypeInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeTypeInput"></a>

```typescript
public readonly volumeTypeInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sizeGb`<sup>Required</sup> <a name="sizeGb" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.sizeGb"></a>

```typescript
public readonly sizeGb: number;
```

- *Type:* number

---

##### `volumeType`<sup>Required</sup> <a name="volumeType" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.volumeType"></a>

```typescript
public readonly volumeType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineFlexibleAppVersionResourcesVolumes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionResourcesVolumes">GoogleAppEngineFlexibleAppVersionResourcesVolumes</a>

---


### GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference <a name="GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts">GoogleAppEngineFlexibleAppVersionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleAppEngineFlexibleAppVersionTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionTimeouts">GoogleAppEngineFlexibleAppVersionTimeouts</a>

---


### GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference <a name="GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer"></a>

```typescript
import { googleAppEngineFlexibleAppVersion } from '@cdktf/provider-google-beta'

new googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnectorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleAppEngineFlexibleAppVersionVpcAccessConnector;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleAppEngineFlexibleAppVersion.GoogleAppEngineFlexibleAppVersionVpcAccessConnector">GoogleAppEngineFlexibleAppVersionVpcAccessConnector</a>

---




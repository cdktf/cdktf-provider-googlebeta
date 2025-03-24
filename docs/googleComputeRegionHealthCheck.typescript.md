# `googleComputeRegionHealthCheck` Submodule <a name="`googleComputeRegionHealthCheck` Submodule" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleComputeRegionHealthCheck <a name="GoogleComputeRegionHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check google_compute_region_health_check}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

new googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck(scope: Construct, id: string, config: GoogleComputeRegionHealthCheckConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig">GoogleComputeRegionHealthCheckConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig">GoogleComputeRegionHealthCheckConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putGrpcHealthCheck">putGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck">putHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck">putHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck">putHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putLogConfig">putLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putSslHealthCheck">putSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTcpHealthCheck">putTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetCheckIntervalSec">resetCheckIntervalSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetGrpcHealthCheck">resetGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHealthyThreshold">resetHealthyThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttp2HealthCheck">resetHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttpHealthCheck">resetHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttpsHealthCheck">resetHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetLogConfig">resetLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetSslHealthCheck">resetSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTcpHealthCheck">resetTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTimeoutSec">resetTimeoutSec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetUnhealthyThreshold">resetUnhealthyThreshold</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGrpcHealthCheck` <a name="putGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putGrpcHealthCheck"></a>

```typescript
public putGrpcHealthCheck(value: GoogleComputeRegionHealthCheckGrpcHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putGrpcHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a>

---

##### `putHttp2HealthCheck` <a name="putHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck"></a>

```typescript
public putHttp2HealthCheck(value: GoogleComputeRegionHealthCheckHttp2HealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttp2HealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a>

---

##### `putHttpHealthCheck` <a name="putHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck"></a>

```typescript
public putHttpHealthCheck(value: GoogleComputeRegionHealthCheckHttpHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a>

---

##### `putHttpsHealthCheck` <a name="putHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck"></a>

```typescript
public putHttpsHealthCheck(value: GoogleComputeRegionHealthCheckHttpsHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putHttpsHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a>

---

##### `putLogConfig` <a name="putLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putLogConfig"></a>

```typescript
public putLogConfig(value: GoogleComputeRegionHealthCheckLogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putLogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a>

---

##### `putSslHealthCheck` <a name="putSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putSslHealthCheck"></a>

```typescript
public putSslHealthCheck(value: GoogleComputeRegionHealthCheckSslHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putSslHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a>

---

##### `putTcpHealthCheck` <a name="putTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTcpHealthCheck"></a>

```typescript
public putTcpHealthCheck(value: GoogleComputeRegionHealthCheckTcpHealthCheck): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTcpHealthCheck.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleComputeRegionHealthCheckTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a>

---

##### `resetCheckIntervalSec` <a name="resetCheckIntervalSec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetCheckIntervalSec"></a>

```typescript
public resetCheckIntervalSec(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetGrpcHealthCheck` <a name="resetGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetGrpcHealthCheck"></a>

```typescript
public resetGrpcHealthCheck(): void
```

##### `resetHealthyThreshold` <a name="resetHealthyThreshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHealthyThreshold"></a>

```typescript
public resetHealthyThreshold(): void
```

##### `resetHttp2HealthCheck` <a name="resetHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttp2HealthCheck"></a>

```typescript
public resetHttp2HealthCheck(): void
```

##### `resetHttpHealthCheck` <a name="resetHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttpHealthCheck"></a>

```typescript
public resetHttpHealthCheck(): void
```

##### `resetHttpsHealthCheck` <a name="resetHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetHttpsHealthCheck"></a>

```typescript
public resetHttpsHealthCheck(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLogConfig` <a name="resetLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetLogConfig"></a>

```typescript
public resetLogConfig(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSslHealthCheck` <a name="resetSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetSslHealthCheck"></a>

```typescript
public resetSslHealthCheck(): void
```

##### `resetTcpHealthCheck` <a name="resetTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTcpHealthCheck"></a>

```typescript
public resetTcpHealthCheck(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTimeoutSec` <a name="resetTimeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetTimeoutSec"></a>

```typescript
public resetTimeoutSec(): void
```

##### `resetUnhealthyThreshold` <a name="resetUnhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.resetUnhealthyThreshold"></a>

```typescript
public resetUnhealthyThreshold(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleComputeRegionHealthCheck resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isConstruct"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformElement"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformResource"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleComputeRegionHealthCheck resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleComputeRegionHealthCheck to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleComputeRegionHealthCheck that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleComputeRegionHealthCheck to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.grpcHealthCheck">grpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference">GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthCheckId">healthCheckId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.http2HealthCheck">http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference">GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpHealthCheck">httpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference">GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpsHealthCheck">httpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference">GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference">GoogleComputeRegionHealthCheckLogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.sslHealthCheck">sslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference">GoogleComputeRegionHealthCheckSslHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tcpHealthCheck">tcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference">GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference">GoogleComputeRegionHealthCheckTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.checkIntervalSecInput">checkIntervalSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.grpcHealthCheckInput">grpcHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthyThresholdInput">healthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.http2HealthCheckInput">http2HealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpHealthCheckInput">httpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpsHealthCheckInput">httpsHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.logConfigInput">logConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.sslHealthCheckInput">sslHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tcpHealthCheckInput">tcpHealthCheckInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutSecInput">timeoutSecInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.unhealthyThresholdInput">unhealthyThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.checkIntervalSec">checkIntervalSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutSec">timeoutSec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `grpcHealthCheck`<sup>Required</sup> <a name="grpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.grpcHealthCheck"></a>

```typescript
public readonly grpcHealthCheck: GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference">GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference</a>

---

##### `healthCheckId`<sup>Required</sup> <a name="healthCheckId" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthCheckId"></a>

```typescript
public readonly healthCheckId: number;
```

- *Type:* number

---

##### `http2HealthCheck`<sup>Required</sup> <a name="http2HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.http2HealthCheck"></a>

```typescript
public readonly http2HealthCheck: GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference">GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference</a>

---

##### `httpHealthCheck`<sup>Required</sup> <a name="httpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpHealthCheck"></a>

```typescript
public readonly httpHealthCheck: GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference">GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference</a>

---

##### `httpsHealthCheck`<sup>Required</sup> <a name="httpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpsHealthCheck"></a>

```typescript
public readonly httpsHealthCheck: GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference">GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference</a>

---

##### `logConfig`<sup>Required</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.logConfig"></a>

```typescript
public readonly logConfig: GoogleComputeRegionHealthCheckLogConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference">GoogleComputeRegionHealthCheckLogConfigOutputReference</a>

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `sslHealthCheck`<sup>Required</sup> <a name="sslHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.sslHealthCheck"></a>

```typescript
public readonly sslHealthCheck: GoogleComputeRegionHealthCheckSslHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference">GoogleComputeRegionHealthCheckSslHealthCheckOutputReference</a>

---

##### `tcpHealthCheck`<sup>Required</sup> <a name="tcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tcpHealthCheck"></a>

```typescript
public readonly tcpHealthCheck: GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference">GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionHealthCheckTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference">GoogleComputeRegionHealthCheckTimeoutsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `checkIntervalSecInput`<sup>Optional</sup> <a name="checkIntervalSecInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.checkIntervalSecInput"></a>

```typescript
public readonly checkIntervalSecInput: number;
```

- *Type:* number

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `grpcHealthCheckInput`<sup>Optional</sup> <a name="grpcHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.grpcHealthCheckInput"></a>

```typescript
public readonly grpcHealthCheckInput: GoogleComputeRegionHealthCheckGrpcHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a>

---

##### `healthyThresholdInput`<sup>Optional</sup> <a name="healthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthyThresholdInput"></a>

```typescript
public readonly healthyThresholdInput: number;
```

- *Type:* number

---

##### `http2HealthCheckInput`<sup>Optional</sup> <a name="http2HealthCheckInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.http2HealthCheckInput"></a>

```typescript
public readonly http2HealthCheckInput: GoogleComputeRegionHealthCheckHttp2HealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a>

---

##### `httpHealthCheckInput`<sup>Optional</sup> <a name="httpHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpHealthCheckInput"></a>

```typescript
public readonly httpHealthCheckInput: GoogleComputeRegionHealthCheckHttpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a>

---

##### `httpsHealthCheckInput`<sup>Optional</sup> <a name="httpsHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.httpsHealthCheckInput"></a>

```typescript
public readonly httpsHealthCheckInput: GoogleComputeRegionHealthCheckHttpsHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `logConfigInput`<sup>Optional</sup> <a name="logConfigInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.logConfigInput"></a>

```typescript
public readonly logConfigInput: GoogleComputeRegionHealthCheckLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `sslHealthCheckInput`<sup>Optional</sup> <a name="sslHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.sslHealthCheckInput"></a>

```typescript
public readonly sslHealthCheckInput: GoogleComputeRegionHealthCheckSslHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a>

---

##### `tcpHealthCheckInput`<sup>Optional</sup> <a name="tcpHealthCheckInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tcpHealthCheckInput"></a>

```typescript
public readonly tcpHealthCheckInput: GoogleComputeRegionHealthCheckTcpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a>

---

##### `timeoutSecInput`<sup>Optional</sup> <a name="timeoutSecInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutSecInput"></a>

```typescript
public readonly timeoutSecInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleComputeRegionHealthCheckTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a>

---

##### `unhealthyThresholdInput`<sup>Optional</sup> <a name="unhealthyThresholdInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.unhealthyThresholdInput"></a>

```typescript
public readonly unhealthyThresholdInput: number;
```

- *Type:* number

---

##### `checkIntervalSec`<sup>Required</sup> <a name="checkIntervalSec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.checkIntervalSec"></a>

```typescript
public readonly checkIntervalSec: number;
```

- *Type:* number

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `healthyThreshold`<sup>Required</sup> <a name="healthyThreshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `timeoutSec`<sup>Required</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.timeoutSec"></a>

```typescript
public readonly timeoutSec: number;
```

- *Type:* number

---

##### `unhealthyThreshold`<sup>Required</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheck.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleComputeRegionHealthCheckConfig <a name="GoogleComputeRegionHealthCheckConfig" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

const googleComputeRegionHealthCheckConfig: googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.name">name</a></code> | <code>string</code> | Name of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.checkIntervalSec">checkIntervalSec</a></code> | <code>number</code> | How often (in seconds) to send a health check. The default value is 5 seconds. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.description">description</a></code> | <code>string</code> | An optional description of this resource. Provide this property when you create the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.grpcHealthCheck">grpcHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a></code> | grpc_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.healthyThreshold">healthyThreshold</a></code> | <code>number</code> | A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.http2HealthCheck">http2HealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a></code> | http2_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.httpHealthCheck">httpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a></code> | http_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.httpsHealthCheck">httpsHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a></code> | https_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#id GoogleComputeRegionHealthCheck#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.logConfig">logConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a></code> | log_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#project GoogleComputeRegionHealthCheck#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.region">region</a></code> | <code>string</code> | The Region in which the created health check should reside. If it is not provided, the provider region is used. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.sslHealthCheck">sslHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a></code> | ssl_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.tcpHealthCheck">tcpHealthCheck</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a></code> | tcp_health_check block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.timeoutSec">timeoutSec</a></code> | <code>number</code> | How long (in seconds) to wait before claiming failure. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.unhealthyThreshold">unhealthyThreshold</a></code> | <code>number</code> | A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035.  Specifically, the name must be 1-63 characters long and
match the regular expression '[a-z]([-a-z0-9]*[a-z0-9])?' which means
the first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the
last character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#name GoogleComputeRegionHealthCheck#name}

---

##### `checkIntervalSec`<sup>Optional</sup> <a name="checkIntervalSec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.checkIntervalSec"></a>

```typescript
public readonly checkIntervalSec: number;
```

- *Type:* number

How often (in seconds) to send a health check. The default value is 5 seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#check_interval_sec GoogleComputeRegionHealthCheck#check_interval_sec}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

An optional description of this resource. Provide this property when you create the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#description GoogleComputeRegionHealthCheck#description}

---

##### `grpcHealthCheck`<sup>Optional</sup> <a name="grpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.grpcHealthCheck"></a>

```typescript
public readonly grpcHealthCheck: GoogleComputeRegionHealthCheckGrpcHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a>

grpc_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#grpc_health_check GoogleComputeRegionHealthCheck#grpc_health_check}

---

##### `healthyThreshold`<sup>Optional</sup> <a name="healthyThreshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.healthyThreshold"></a>

```typescript
public readonly healthyThreshold: number;
```

- *Type:* number

A so-far unhealthy instance will be marked healthy after this many consecutive successes. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#healthy_threshold GoogleComputeRegionHealthCheck#healthy_threshold}

---

##### `http2HealthCheck`<sup>Optional</sup> <a name="http2HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.http2HealthCheck"></a>

```typescript
public readonly http2HealthCheck: GoogleComputeRegionHealthCheckHttp2HealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a>

http2_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#http2_health_check GoogleComputeRegionHealthCheck#http2_health_check}

---

##### `httpHealthCheck`<sup>Optional</sup> <a name="httpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.httpHealthCheck"></a>

```typescript
public readonly httpHealthCheck: GoogleComputeRegionHealthCheckHttpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a>

http_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#http_health_check GoogleComputeRegionHealthCheck#http_health_check}

---

##### `httpsHealthCheck`<sup>Optional</sup> <a name="httpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.httpsHealthCheck"></a>

```typescript
public readonly httpsHealthCheck: GoogleComputeRegionHealthCheckHttpsHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a>

https_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#https_health_check GoogleComputeRegionHealthCheck#https_health_check}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#id GoogleComputeRegionHealthCheck#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `logConfig`<sup>Optional</sup> <a name="logConfig" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.logConfig"></a>

```typescript
public readonly logConfig: GoogleComputeRegionHealthCheckLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a>

log_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#log_config GoogleComputeRegionHealthCheck#log_config}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#project GoogleComputeRegionHealthCheck#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The Region in which the created health check should reside. If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#region GoogleComputeRegionHealthCheck#region}

---

##### `sslHealthCheck`<sup>Optional</sup> <a name="sslHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.sslHealthCheck"></a>

```typescript
public readonly sslHealthCheck: GoogleComputeRegionHealthCheckSslHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a>

ssl_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#ssl_health_check GoogleComputeRegionHealthCheck#ssl_health_check}

---

##### `tcpHealthCheck`<sup>Optional</sup> <a name="tcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.tcpHealthCheck"></a>

```typescript
public readonly tcpHealthCheck: GoogleComputeRegionHealthCheckTcpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a>

tcp_health_check block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#tcp_health_check GoogleComputeRegionHealthCheck#tcp_health_check}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleComputeRegionHealthCheckTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#timeouts GoogleComputeRegionHealthCheck#timeouts}

---

##### `timeoutSec`<sup>Optional</sup> <a name="timeoutSec" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.timeoutSec"></a>

```typescript
public readonly timeoutSec: number;
```

- *Type:* number

How long (in seconds) to wait before claiming failure.

The default value is 5 seconds.  It is invalid for timeoutSec to have
greater value than checkIntervalSec.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#timeout_sec GoogleComputeRegionHealthCheck#timeout_sec}

---

##### `unhealthyThreshold`<sup>Optional</sup> <a name="unhealthyThreshold" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckConfig.property.unhealthyThreshold"></a>

```typescript
public readonly unhealthyThreshold: number;
```

- *Type:* number

A so-far healthy instance will be marked unhealthy after this many consecutive failures. The default value is 2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#unhealthy_threshold GoogleComputeRegionHealthCheck#unhealthy_threshold}

---

### GoogleComputeRegionHealthCheckGrpcHealthCheck <a name="GoogleComputeRegionHealthCheckGrpcHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

const googleComputeRegionHealthCheckGrpcHealthCheck: googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.grpcServiceName">grpcServiceName</a></code> | <code>string</code> | The gRPC service name for the health check. The value of grpcServiceName has the following meanings by convention:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.port">port</a></code> | <code>number</code> | The port number for the health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |

---

##### `grpcServiceName`<sup>Optional</sup> <a name="grpcServiceName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.grpcServiceName"></a>

```typescript
public readonly grpcServiceName: string;
```

- *Type:* string

The gRPC service name for the health check. The value of grpcServiceName has the following meanings by convention:.

* Empty serviceName means the overall status of all services at the backend.
* Non-empty serviceName means the health of that gRPC service, as defined by the owner of the service.

The grpcServiceName can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#grpc_service_name GoogleComputeRegionHealthCheck#grpc_service_name}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The port number for the health check request.

Must be specified if portName and portSpecification are not set
or if port_specification is USE_FIXED_PORT. Valid values are 1 through 65535.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, gRPC health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

### GoogleComputeRegionHealthCheckHttp2HealthCheck <a name="GoogleComputeRegionHealthCheckHttp2HealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

const googleComputeRegionHealthCheckHttp2HealthCheck: googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.host">host</a></code> | <code>string</code> | The value of the host header in the HTTP2 health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the HTTP2 health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.requestPath">requestPath</a></code> | <code>string</code> | The request path of the HTTP2 health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The value of the host header in the HTTP2 health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the HTTP2 health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, HTTP2 health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

The request path of the HTTP2 health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckHttpHealthCheck <a name="GoogleComputeRegionHealthCheckHttpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

const googleComputeRegionHealthCheckHttpHealthCheck: googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.host">host</a></code> | <code>string</code> | The value of the host header in the HTTP health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the HTTP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.requestPath">requestPath</a></code> | <code>string</code> | The request path of the HTTP health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The value of the host header in the HTTP health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the HTTP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, HTTP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

The request path of the HTTP health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckHttpsHealthCheck <a name="GoogleComputeRegionHealthCheckHttpsHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

const googleComputeRegionHealthCheckHttpsHealthCheck: googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.host">host</a></code> | <code>string</code> | The value of the host header in the HTTPS health check request. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the HTTPS health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.requestPath">requestPath</a></code> | <code>string</code> | The request path of the HTTPS health check request. The default value is /. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

The value of the host header in the HTTPS health check request.

If left empty (default value), the public IP on behalf of which this health
check is performed will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#host GoogleComputeRegionHealthCheck#host}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the HTTPS health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, HTTPS health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `requestPath`<sup>Optional</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

The request path of the HTTPS health check request. The default value is /.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#request_path GoogleComputeRegionHealthCheck#request_path}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckLogConfig <a name="GoogleComputeRegionHealthCheckLogConfig" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

const googleComputeRegionHealthCheckLogConfig: googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether or not to export logs. |

---

##### `enable`<sup>Optional</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether or not to export logs.

This is false by default,
which means no health check logging will be done.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#enable GoogleComputeRegionHealthCheck#enable}

---

### GoogleComputeRegionHealthCheckSslHealthCheck <a name="GoogleComputeRegionHealthCheckSslHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

const googleComputeRegionHealthCheckSslHealthCheck: googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the SSL health check request. The default value is 443. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.request">request</a></code> | <code>string</code> | The application data to send once the SSL connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the SSL health check request. The default value is 443.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, SSL health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

The application data to send once the SSL connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#request GoogleComputeRegionHealthCheck#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckTcpHealthCheck <a name="GoogleComputeRegionHealthCheckTcpHealthCheck" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

const googleComputeRegionHealthCheckTcpHealthCheck: googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.port">port</a></code> | <code>number</code> | The TCP port number for the TCP health check request. The default value is 80. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.portName">portName</a></code> | <code>string</code> | Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.portSpecification">portSpecification</a></code> | <code>string</code> | Specifies how port is selected for health checking, can be one of the following values:. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | Specifies the type of proxy header to append before sending data to the backend. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.request">request</a></code> | <code>string</code> | The application data to send once the TCP connection has been established (default value is empty). |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.response">response</a></code> | <code>string</code> | The bytes to match against the beginning of the response data. |

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port number for the TCP health check request. The default value is 80.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port GoogleComputeRegionHealthCheck#port}

---

##### `portName`<sup>Optional</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

Port name as defined in InstanceGroup#NamedPort#name. If both port and port_name are defined, port takes precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port_name GoogleComputeRegionHealthCheck#port_name}

---

##### `portSpecification`<sup>Optional</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

Specifies how port is selected for health checking, can be one of the following values:.

* 'USE_FIXED_PORT': The port number in 'port' is used for health checking.

  * 'USE_NAMED_PORT': The 'portName' is used for health checking.

  * 'USE_SERVING_PORT': For NetworkEndpointGroup, the port specified for each
  network endpoint is used for health checking. For other backends, the
  port or named port specified in the Backend Service is used for health
  checking.

If not specified, TCP health check follows behavior specified in 'port' and
'portName' fields. Possible values: ["USE_FIXED_PORT", "USE_NAMED_PORT", "USE_SERVING_PORT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#port_specification GoogleComputeRegionHealthCheck#port_specification}

---

##### `proxyHeader`<sup>Optional</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

Specifies the type of proxy header to append before sending data to the backend.

Default value: "NONE" Possible values: ["NONE", "PROXY_V1"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#proxy_header GoogleComputeRegionHealthCheck#proxy_header}

---

##### `request`<sup>Optional</sup> <a name="request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

The application data to send once the TCP connection has been established (default value is empty).

If both request and response are
empty, the connection establishment alone will indicate health. The request
data can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#request GoogleComputeRegionHealthCheck#request}

---

##### `response`<sup>Optional</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

The bytes to match against the beginning of the response data.

If left empty
(the default value), any response will indicate health. The response data
can only be ASCII.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#response GoogleComputeRegionHealthCheck#response}

---

### GoogleComputeRegionHealthCheckTimeouts <a name="GoogleComputeRegionHealthCheckTimeouts" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

const googleComputeRegionHealthCheckTimeouts: googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#create GoogleComputeRegionHealthCheck#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#delete GoogleComputeRegionHealthCheck#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#update GoogleComputeRegionHealthCheck#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#create GoogleComputeRegionHealthCheck#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#delete GoogleComputeRegionHealthCheck#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.26.0/docs/resources/google_compute_region_health_check#update GoogleComputeRegionHealthCheck#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

new googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName">resetGrpcServiceName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrpcServiceName` <a name="resetGrpcServiceName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetGrpcServiceName"></a>

```typescript
public resetGrpcServiceName(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput">grpcServiceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName">grpcServiceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `grpcServiceNameInput`<sup>Optional</sup> <a name="grpcServiceNameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceNameInput"></a>

```typescript
public readonly grpcServiceNameInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `grpcServiceName`<sup>Required</sup> <a name="grpcServiceName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.grpcServiceName"></a>

```typescript
public readonly grpcServiceName: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionHealthCheckGrpcHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckGrpcHealthCheck">GoogleComputeRegionHealthCheckGrpcHealthCheck</a>

---


### GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

new googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetRequestPath"></a>

```typescript
public resetRequestPath(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPathInput"></a>

```typescript
public readonly requestPathInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionHealthCheckHttp2HealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttp2HealthCheck">GoogleComputeRegionHealthCheckHttp2HealthCheck</a>

---


### GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

new googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetRequestPath"></a>

```typescript
public resetRequestPath(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPathInput"></a>

```typescript
public readonly requestPathInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionHealthCheckHttpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpHealthCheck">GoogleComputeRegionHealthCheckHttpHealthCheck</a>

---


### GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

new googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetRequestPath">resetRequestPath</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetHost` <a name="resetHost" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetHost"></a>

```typescript
public resetHost(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequestPath` <a name="resetRequestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetRequestPath"></a>

```typescript
public resetRequestPath(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.hostInput">hostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput">requestPathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.host">host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPath">requestPath</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.hostInput"></a>

```typescript
public readonly hostInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestPathInput`<sup>Optional</sup> <a name="requestPathInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPathInput"></a>

```typescript
public readonly requestPathInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.host"></a>

```typescript
public readonly host: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `requestPath`<sup>Required</sup> <a name="requestPath" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.requestPath"></a>

```typescript
public readonly requestPath: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionHealthCheckHttpsHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckHttpsHealthCheck">GoogleComputeRegionHealthCheckHttpsHealthCheck</a>

---


### GoogleComputeRegionHealthCheckLogConfigOutputReference <a name="GoogleComputeRegionHealthCheckLogConfigOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

new googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resetEnable">resetEnable</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnable` <a name="resetEnable" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.resetEnable"></a>

```typescript
public resetEnable(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.enableInput">enableInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.enable">enable</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableInput`<sup>Optional</sup> <a name="enableInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.enableInput"></a>

```typescript
public readonly enableInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enable`<sup>Required</sup> <a name="enable" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.enable"></a>

```typescript
public readonly enable: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionHealthCheckLogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckLogConfig">GoogleComputeRegionHealthCheckLogConfig</a>

---


### GoogleComputeRegionHealthCheckSslHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckSslHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

new googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetRequest">resetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequest` <a name="resetRequest" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetRequest"></a>

```typescript
public resetRequest(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.requestInput">requestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.request">request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.requestInput"></a>

```typescript
public readonly requestInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionHealthCheckSslHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckSslHealthCheck">GoogleComputeRegionHealthCheckSslHealthCheck</a>

---


### GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference <a name="GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

new googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortName">resetPortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortSpecification">resetPortSpecification</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetProxyHeader">resetProxyHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetRequest">resetRequest</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetResponse">resetResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetPortName` <a name="resetPortName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortName"></a>

```typescript
public resetPortName(): void
```

##### `resetPortSpecification` <a name="resetPortSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetPortSpecification"></a>

```typescript
public resetPortSpecification(): void
```

##### `resetProxyHeader` <a name="resetProxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetProxyHeader"></a>

```typescript
public resetProxyHeader(): void
```

##### `resetRequest` <a name="resetRequest" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetRequest"></a>

```typescript
public resetRequest(): void
```

##### `resetResponse` <a name="resetResponse" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.resetResponse"></a>

```typescript
public resetResponse(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portNameInput">portNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput">portSpecificationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput">proxyHeaderInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.requestInput">requestInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.responseInput">responseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portName">portName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecification">portSpecification</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeader">proxyHeader</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.request">request</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.response">response</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `portNameInput`<sup>Optional</sup> <a name="portNameInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portNameInput"></a>

```typescript
public readonly portNameInput: string;
```

- *Type:* string

---

##### `portSpecificationInput`<sup>Optional</sup> <a name="portSpecificationInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecificationInput"></a>

```typescript
public readonly portSpecificationInput: string;
```

- *Type:* string

---

##### `proxyHeaderInput`<sup>Optional</sup> <a name="proxyHeaderInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeaderInput"></a>

```typescript
public readonly proxyHeaderInput: string;
```

- *Type:* string

---

##### `requestInput`<sup>Optional</sup> <a name="requestInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.requestInput"></a>

```typescript
public readonly requestInput: string;
```

- *Type:* string

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.responseInput"></a>

```typescript
public readonly responseInput: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `portName`<sup>Required</sup> <a name="portName" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portName"></a>

```typescript
public readonly portName: string;
```

- *Type:* string

---

##### `portSpecification`<sup>Required</sup> <a name="portSpecification" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.portSpecification"></a>

```typescript
public readonly portSpecification: string;
```

- *Type:* string

---

##### `proxyHeader`<sup>Required</sup> <a name="proxyHeader" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.proxyHeader"></a>

```typescript
public readonly proxyHeader: string;
```

- *Type:* string

---

##### `request`<sup>Required</sup> <a name="request" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.request"></a>

```typescript
public readonly request: string;
```

- *Type:* string

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.response"></a>

```typescript
public readonly response: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheckOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleComputeRegionHealthCheckTcpHealthCheck;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTcpHealthCheck">GoogleComputeRegionHealthCheckTcpHealthCheck</a>

---


### GoogleComputeRegionHealthCheckTimeoutsOutputReference <a name="GoogleComputeRegionHealthCheckTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleComputeRegionHealthCheck } from '@cdktf/provider-google-beta'

new googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleComputeRegionHealthCheckTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleComputeRegionHealthCheck.GoogleComputeRegionHealthCheckTimeouts">GoogleComputeRegionHealthCheckTimeouts</a>

---




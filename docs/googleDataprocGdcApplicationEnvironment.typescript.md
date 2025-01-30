# `googleDataprocGdcApplicationEnvironment` Submodule <a name="`googleDataprocGdcApplicationEnvironment` Submodule" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocGdcApplicationEnvironment <a name="GoogleDataprocGdcApplicationEnvironment" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment google_dataproc_gdc_application_environment}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer"></a>

```typescript
import { googleDataprocGdcApplicationEnvironment } from '@cdktf/provider-google-beta'

new googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment(scope: Construct, id: string, config: GoogleDataprocGdcApplicationEnvironmentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig">putSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetApplicationEnvironmentId">resetApplicationEnvironmentId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetSparkApplicationEnvironmentConfig">resetSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSparkApplicationEnvironmentConfig` <a name="putSparkApplicationEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig"></a>

```typescript
public putSparkApplicationEnvironmentConfig(value: GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putSparkApplicationEnvironmentConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataprocGdcApplicationEnvironmentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetAnnotations"></a>

```typescript
public resetAnnotations(): void
```

##### `resetApplicationEnvironmentId` <a name="resetApplicationEnvironmentId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetApplicationEnvironmentId"></a>

```typescript
public resetApplicationEnvironmentId(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetNamespace"></a>

```typescript
public resetNamespace(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSparkApplicationEnvironmentConfig` <a name="resetSparkApplicationEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetSparkApplicationEnvironmentConfig"></a>

```typescript
public resetSparkApplicationEnvironmentConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocGdcApplicationEnvironment resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isConstruct"></a>

```typescript
import { googleDataprocGdcApplicationEnvironment } from '@cdktf/provider-google-beta'

googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformElement"></a>

```typescript
import { googleDataprocGdcApplicationEnvironment } from '@cdktf/provider-google-beta'

googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformResource"></a>

```typescript
import { googleDataprocGdcApplicationEnvironment } from '@cdktf/provider-google-beta'

googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport"></a>

```typescript
import { googleDataprocGdcApplicationEnvironment } from '@cdktf/provider-google-beta'

googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataprocGdcApplicationEnvironment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataprocGdcApplicationEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataprocGdcApplicationEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocGdcApplicationEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfig">sparkApplicationEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference">GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotationsInput">annotationsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentIdInput">applicationEnvironmentIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespaceInput">namespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstanceInput">serviceinstanceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfigInput">sparkApplicationEnvironmentConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentId">applicationEnvironmentId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespace">namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstance">serviceinstance</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveAnnotations"></a>

```typescript
public readonly effectiveAnnotations: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `sparkApplicationEnvironmentConfig`<sup>Required</sup> <a name="sparkApplicationEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfig"></a>

```typescript
public readonly sparkApplicationEnvironmentConfig: GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference</a>

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference">GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotationsInput"></a>

```typescript
public readonly annotationsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `applicationEnvironmentIdInput`<sup>Optional</sup> <a name="applicationEnvironmentIdInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentIdInput"></a>

```typescript
public readonly applicationEnvironmentIdInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespaceInput"></a>

```typescript
public readonly namespaceInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceinstanceInput`<sup>Optional</sup> <a name="serviceinstanceInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstanceInput"></a>

```typescript
public readonly serviceinstanceInput: string;
```

- *Type:* string

---

##### `sparkApplicationEnvironmentConfigInput`<sup>Optional</sup> <a name="sparkApplicationEnvironmentConfigInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.sparkApplicationEnvironmentConfigInput"></a>

```typescript
public readonly sparkApplicationEnvironmentConfigInput: GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataprocGdcApplicationEnvironmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `applicationEnvironmentId`<sup>Required</sup> <a name="applicationEnvironmentId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.applicationEnvironmentId"></a>

```typescript
public readonly applicationEnvironmentId: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.serviceinstance"></a>

```typescript
public readonly serviceinstance: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironment.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocGdcApplicationEnvironmentConfig <a name="GoogleDataprocGdcApplicationEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.Initializer"></a>

```typescript
import { googleDataprocGdcApplicationEnvironment } from '@cdktf/provider-google-beta'

const googleDataprocGdcApplicationEnvironmentConfig: googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.location">location</a></code> | <code>string</code> | The location of the application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.serviceinstance">serviceinstance</a></code> | <code>string</code> | The id of the service instance to which this application environment belongs. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.annotations">annotations</a></code> | <code>{[ key: string ]: string}</code> | The annotations to associate with this application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.applicationEnvironmentId">applicationEnvironmentId</a></code> | <code>string</code> | The id of the application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.displayName">displayName</a></code> | <code>string</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#id GoogleDataprocGdcApplicationEnvironment#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels to associate with this application environment. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.namespace">namespace</a></code> | <code>string</code> | The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#project GoogleDataprocGdcApplicationEnvironment#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.sparkApplicationEnvironmentConfig">sparkApplicationEnvironmentConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | spark_application_environment_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#location GoogleDataprocGdcApplicationEnvironment#location}

---

##### `serviceinstance`<sup>Required</sup> <a name="serviceinstance" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.serviceinstance"></a>

```typescript
public readonly serviceinstance: string;
```

- *Type:* string

The id of the service instance to which this application environment belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#serviceinstance GoogleDataprocGdcApplicationEnvironment#serviceinstance}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.annotations"></a>

```typescript
public readonly annotations: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The annotations to associate with this application environment.

Annotations may be used to store client information, but are not used by the server.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#annotations GoogleDataprocGdcApplicationEnvironment#annotations}

---

##### `applicationEnvironmentId`<sup>Optional</sup> <a name="applicationEnvironmentId" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.applicationEnvironmentId"></a>

```typescript
public readonly applicationEnvironmentId: string;
```

- *Type:* string

The id of the application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#application_environment_id GoogleDataprocGdcApplicationEnvironment#application_environment_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#display_name GoogleDataprocGdcApplicationEnvironment#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#id GoogleDataprocGdcApplicationEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels to associate with this application environment. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#labels GoogleDataprocGdcApplicationEnvironment#labels}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.namespace"></a>

```typescript
public readonly namespace: string;
```

- *Type:* string

The name of the namespace in which to create this ApplicationEnvironment. This namespace must already exist in the cluster.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#namespace GoogleDataprocGdcApplicationEnvironment#namespace}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#project GoogleDataprocGdcApplicationEnvironment#project}.

---

##### `sparkApplicationEnvironmentConfig`<sup>Optional</sup> <a name="sparkApplicationEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.sparkApplicationEnvironmentConfig"></a>

```typescript
public readonly sparkApplicationEnvironmentConfig: GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

spark_application_environment_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#spark_application_environment_config GoogleDataprocGdcApplicationEnvironment#spark_application_environment_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataprocGdcApplicationEnvironmentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#timeouts GoogleDataprocGdcApplicationEnvironment#timeouts}

---

### GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig <a name="GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.Initializer"></a>

```typescript
import { googleDataprocGdcApplicationEnvironment } from '@cdktf/provider-google-beta'

const googleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig: googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultProperties">defaultProperties</a></code> | <code>{[ key: string ]: string}</code> | A map of default Spark properties to apply to workloads in this application environment. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultVersion">defaultVersion</a></code> | <code>string</code> | The default Dataproc version to use for applications submitted to this application environment. |

---

##### `defaultProperties`<sup>Optional</sup> <a name="defaultProperties" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultProperties"></a>

```typescript
public readonly defaultProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A map of default Spark properties to apply to workloads in this application environment.

These defaults may be overridden by per-application properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#default_properties GoogleDataprocGdcApplicationEnvironment#default_properties}

---

##### `defaultVersion`<sup>Optional</sup> <a name="defaultVersion" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig.property.defaultVersion"></a>

```typescript
public readonly defaultVersion: string;
```

- *Type:* string

The default Dataproc version to use for applications submitted to this application environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#default_version GoogleDataprocGdcApplicationEnvironment#default_version}

---

### GoogleDataprocGdcApplicationEnvironmentTimeouts <a name="GoogleDataprocGdcApplicationEnvironmentTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.Initializer"></a>

```typescript
import { googleDataprocGdcApplicationEnvironment } from '@cdktf/provider-google-beta'

const googleDataprocGdcApplicationEnvironmentTimeouts: googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#create GoogleDataprocGdcApplicationEnvironment#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#delete GoogleDataprocGdcApplicationEnvironment#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#update GoogleDataprocGdcApplicationEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#create GoogleDataprocGdcApplicationEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#delete GoogleDataprocGdcApplicationEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.18.1/docs/resources/google_dataproc_gdc_application_environment#update GoogleDataprocGdcApplicationEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference <a name="GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer"></a>

```typescript
import { googleDataprocGdcApplicationEnvironment } from '@cdktf/provider-google-beta'

new googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultProperties">resetDefaultProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultVersion">resetDefaultVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefaultProperties` <a name="resetDefaultProperties" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultProperties"></a>

```typescript
public resetDefaultProperties(): void
```

##### `resetDefaultVersion` <a name="resetDefaultVersion" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.resetDefaultVersion"></a>

```typescript
public resetDefaultVersion(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultPropertiesInput">defaultPropertiesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersionInput">defaultVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultProperties">defaultProperties</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersion">defaultVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultPropertiesInput`<sup>Optional</sup> <a name="defaultPropertiesInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultPropertiesInput"></a>

```typescript
public readonly defaultPropertiesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultVersionInput`<sup>Optional</sup> <a name="defaultVersionInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersionInput"></a>

```typescript
public readonly defaultVersionInput: string;
```

- *Type:* string

---

##### `defaultProperties`<sup>Required</sup> <a name="defaultProperties" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultProperties"></a>

```typescript
public readonly defaultProperties: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `defaultVersion`<sup>Required</sup> <a name="defaultVersion" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.defaultVersion"></a>

```typescript
public readonly defaultVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig">GoogleDataprocGdcApplicationEnvironmentSparkApplicationEnvironmentConfig</a>

---


### GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference <a name="GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataprocGdcApplicationEnvironment } from '@cdktf/provider-google-beta'

new googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataprocGdcApplicationEnvironmentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocGdcApplicationEnvironment.GoogleDataprocGdcApplicationEnvironmentTimeouts">GoogleDataprocGdcApplicationEnvironmentTimeouts</a>

---




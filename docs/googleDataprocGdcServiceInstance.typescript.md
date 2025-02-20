# `googleDataprocGdcServiceInstance` Submodule <a name="`googleDataprocGdcServiceInstance` Submodule" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocGdcServiceInstance <a name="GoogleDataprocGdcServiceInstance" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance google_dataproc_gdc_service_instance}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer"></a>

```typescript
import { googleDataprocGdcServiceInstance } from '@cdktf/provider-google-beta'

new googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance(scope: Construct, id: string, config: GoogleDataprocGdcServiceInstanceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig">GoogleDataprocGdcServiceInstanceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig">GoogleDataprocGdcServiceInstanceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putGdceCluster">putGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putSparkServiceInstanceConfig">putSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetGdceCluster">resetGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetServiceAccount">resetServiceAccount</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetSparkServiceInstanceConfig">resetSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putGdceCluster` <a name="putGdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putGdceCluster"></a>

```typescript
public putGdceCluster(value: GoogleDataprocGdcServiceInstanceGdceCluster): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putGdceCluster.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

---

##### `putSparkServiceInstanceConfig` <a name="putSparkServiceInstanceConfig" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putSparkServiceInstanceConfig"></a>

```typescript
public putSparkServiceInstanceConfig(value: GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putSparkServiceInstanceConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataprocGdcServiceInstanceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetGdceCluster` <a name="resetGdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetGdceCluster"></a>

```typescript
public resetGdceCluster(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetServiceAccount` <a name="resetServiceAccount" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetServiceAccount"></a>

```typescript
public resetServiceAccount(): void
```

##### `resetSparkServiceInstanceConfig` <a name="resetSparkServiceInstanceConfig" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetSparkServiceInstanceConfig"></a>

```typescript
public resetSparkServiceInstanceConfig(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a GoogleDataprocGdcServiceInstance resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isConstruct"></a>

```typescript
import { googleDataprocGdcServiceInstance } from '@cdktf/provider-google-beta'

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformElement"></a>

```typescript
import { googleDataprocGdcServiceInstance } from '@cdktf/provider-google-beta'

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformResource"></a>

```typescript
import { googleDataprocGdcServiceInstance } from '@cdktf/provider-google-beta'

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport"></a>

```typescript
import { googleDataprocGdcServiceInstance } from '@cdktf/provider-google-beta'

googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a GoogleDataprocGdcServiceInstance resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the GoogleDataprocGdcServiceInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing GoogleDataprocGdcServiceInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the GoogleDataprocGdcServiceInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveLabels">effectiveLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveServiceAccount">effectiveServiceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceCluster">gdceCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference">GoogleDataprocGdcServiceInstanceGdceClusterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.reconciling">reconciling</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.requestedState">requestedState</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfig">sparkServiceInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformLabels">terraformLabels</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference">GoogleDataprocGdcServiceInstanceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceClusterInput">gdceClusterInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccountInput">serviceAccountInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceIdInput">serviceInstanceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfigInput">sparkServiceInstanceConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceId">serviceInstanceId</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveLabels"></a>

```typescript
public readonly effectiveLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `effectiveServiceAccount`<sup>Required</sup> <a name="effectiveServiceAccount" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.effectiveServiceAccount"></a>

```typescript
public readonly effectiveServiceAccount: string;
```

- *Type:* string

---

##### `gdceCluster`<sup>Required</sup> <a name="gdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceCluster"></a>

```typescript
public readonly gdceCluster: GoogleDataprocGdcServiceInstanceGdceClusterOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference">GoogleDataprocGdcServiceInstanceGdceClusterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `reconciling`<sup>Required</sup> <a name="reconciling" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.reconciling"></a>

```typescript
public readonly reconciling: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `requestedState`<sup>Required</sup> <a name="requestedState" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.requestedState"></a>

```typescript
public readonly requestedState: string;
```

- *Type:* string

---

##### `sparkServiceInstanceConfig`<sup>Required</sup> <a name="sparkServiceInstanceConfig" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfig"></a>

```typescript
public readonly sparkServiceInstanceConfig: GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.terraformLabels"></a>

```typescript
public readonly terraformLabels: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataprocGdcServiceInstanceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference">GoogleDataprocGdcServiceInstanceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `gdceClusterInput`<sup>Optional</sup> <a name="gdceClusterInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.gdceClusterInput"></a>

```typescript
public readonly gdceClusterInput: GoogleDataprocGdcServiceInstanceGdceCluster;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccountInput"></a>

```typescript
public readonly serviceAccountInput: string;
```

- *Type:* string

---

##### `serviceInstanceIdInput`<sup>Optional</sup> <a name="serviceInstanceIdInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceIdInput"></a>

```typescript
public readonly serviceInstanceIdInput: string;
```

- *Type:* string

---

##### `sparkServiceInstanceConfigInput`<sup>Optional</sup> <a name="sparkServiceInstanceConfigInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.sparkServiceInstanceConfigInput"></a>

```typescript
public readonly sparkServiceInstanceConfigInput: GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | GoogleDataprocGdcServiceInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

---

##### `serviceInstanceId`<sup>Required</sup> <a name="serviceInstanceId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.serviceInstanceId"></a>

```typescript
public readonly serviceInstanceId: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstance.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocGdcServiceInstanceConfig <a name="GoogleDataprocGdcServiceInstanceConfig" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.Initializer"></a>

```typescript
import { googleDataprocGdcServiceInstance } from '@cdktf/provider-google-beta'

const googleDataprocGdcServiceInstanceConfig: googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.location">location</a></code> | <code>string</code> | Location of the resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceInstanceId">serviceInstanceId</a></code> | <code>string</code> | Id of the service instance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.displayName">displayName</a></code> | <code>string</code> | User-provided human-readable name to be used in user interfaces. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.gdceCluster">gdceCluster</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a></code> | gdce_cluster block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#id GoogleDataprocGdcServiceInstance#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The labels to associate with this service instance. Labels may be used for filtering and billing tracking. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#project GoogleDataprocGdcServiceInstance#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceAccount">serviceAccount</a></code> | <code>string</code> | Requested service account to associate with ServiceInstance. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.sparkServiceInstanceConfig">sparkServiceInstanceConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | spark_service_instance_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

Location of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#location GoogleDataprocGdcServiceInstance#location}

---

##### `serviceInstanceId`<sup>Required</sup> <a name="serviceInstanceId" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceInstanceId"></a>

```typescript
public readonly serviceInstanceId: string;
```

- *Type:* string

Id of the service instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#service_instance_id GoogleDataprocGdcServiceInstance#service_instance_id}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

User-provided human-readable name to be used in user interfaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#display_name GoogleDataprocGdcServiceInstance#display_name}

---

##### `gdceCluster`<sup>Optional</sup> <a name="gdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.gdceCluster"></a>

```typescript
public readonly gdceCluster: GoogleDataprocGdcServiceInstanceGdceCluster;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

gdce_cluster block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#gdce_cluster GoogleDataprocGdcServiceInstance#gdce_cluster}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#id GoogleDataprocGdcServiceInstance#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The labels to associate with this service instance. Labels may be used for filtering and billing tracking.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#labels GoogleDataprocGdcServiceInstance#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#project GoogleDataprocGdcServiceInstance#project}.

---

##### `serviceAccount`<sup>Optional</sup> <a name="serviceAccount" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.serviceAccount"></a>

```typescript
public readonly serviceAccount: string;
```

- *Type:* string

Requested service account to associate with ServiceInstance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#service_account GoogleDataprocGdcServiceInstance#service_account}

---

##### `sparkServiceInstanceConfig`<sup>Optional</sup> <a name="sparkServiceInstanceConfig" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.sparkServiceInstanceConfig"></a>

```typescript
public readonly sparkServiceInstanceConfig: GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

spark_service_instance_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#spark_service_instance_config GoogleDataprocGdcServiceInstance#spark_service_instance_config}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataprocGdcServiceInstanceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#timeouts GoogleDataprocGdcServiceInstance#timeouts}

---

### GoogleDataprocGdcServiceInstanceGdceCluster <a name="GoogleDataprocGdcServiceInstanceGdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster.Initializer"></a>

```typescript
import { googleDataprocGdcServiceInstance } from '@cdktf/provider-google-beta'

const googleDataprocGdcServiceInstanceGdceCluster: googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster.property.gdceCluster">gdceCluster</a></code> | <code>string</code> | Gdce cluster resource id. |

---

##### `gdceCluster`<sup>Required</sup> <a name="gdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster.property.gdceCluster"></a>

```typescript
public readonly gdceCluster: string;
```

- *Type:* string

Gdce cluster resource id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#gdce_cluster GoogleDataprocGdcServiceInstance#gdce_cluster}

---

### GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig <a name="GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig.Initializer"></a>

```typescript
import { googleDataprocGdcServiceInstance } from '@cdktf/provider-google-beta'

const googleDataprocGdcServiceInstanceSparkServiceInstanceConfig: googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig = { ... }
```


### GoogleDataprocGdcServiceInstanceTimeouts <a name="GoogleDataprocGdcServiceInstanceTimeouts" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.Initializer"></a>

```typescript
import { googleDataprocGdcServiceInstance } from '@cdktf/provider-google-beta'

const googleDataprocGdcServiceInstanceTimeouts: googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#create GoogleDataprocGdcServiceInstance#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#delete GoogleDataprocGdcServiceInstance#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#update GoogleDataprocGdcServiceInstance#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#create GoogleDataprocGdcServiceInstance#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#delete GoogleDataprocGdcServiceInstance#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google-beta/6.21.0/docs/resources/google_dataproc_gdc_service_instance#update GoogleDataprocGdcServiceInstance#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocGdcServiceInstanceGdceClusterOutputReference <a name="GoogleDataprocGdcServiceInstanceGdceClusterOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer"></a>

```typescript
import { googleDataprocGdcServiceInstance } from '@cdktf/provider-google-beta'

new googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceClusterInput">gdceClusterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceCluster">gdceCluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `gdceClusterInput`<sup>Optional</sup> <a name="gdceClusterInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceClusterInput"></a>

```typescript
public readonly gdceClusterInput: string;
```

- *Type:* string

---

##### `gdceCluster`<sup>Required</sup> <a name="gdceCluster" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.gdceCluster"></a>

```typescript
public readonly gdceCluster: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceClusterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocGdcServiceInstanceGdceCluster;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceGdceCluster">GoogleDataprocGdcServiceInstanceGdceCluster</a>

---


### GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference <a name="GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer"></a>

```typescript
import { googleDataprocGdcServiceInstance } from '@cdktf/provider-google-beta'

new googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig">GoogleDataprocGdcServiceInstanceSparkServiceInstanceConfig</a>

---


### GoogleDataprocGdcServiceInstanceTimeoutsOutputReference <a name="GoogleDataprocGdcServiceInstanceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataprocGdcServiceInstance } from '@cdktf/provider-google-beta'

new googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataprocGdcServiceInstanceTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocGdcServiceInstance.GoogleDataprocGdcServiceInstanceTimeouts">GoogleDataprocGdcServiceInstanceTimeouts</a>

---




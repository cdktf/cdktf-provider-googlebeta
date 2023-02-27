# `googleDataprocMetastoreService` Submodule <a name="`googleDataprocMetastoreService` Submodule" id="@cdktf/provider-google-beta.googleDataprocMetastoreService"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GoogleDataprocMetastoreService <a name="GoogleDataprocMetastoreService" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService"></a>

Represents a {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service google_dataproc_metastore_service}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreService(scope: Construct, id: string, config: GoogleDataprocMetastoreServiceConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig">GoogleDataprocMetastoreServiceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig">GoogleDataprocMetastoreServiceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putEncryptionConfig">putEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putHiveMetastoreConfig">putHiveMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMetadataIntegration">putMetadataIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putNetworkConfig">putNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTelemetryConfig">putTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetDatabaseType">resetDatabaseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetEncryptionConfig">resetEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetHiveMetastoreConfig">resetHiveMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetMetadataIntegration">resetMetadataIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetNetworkConfig">resetNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetReleaseChannel">resetReleaseChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTelemetryConfig">resetTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTier">resetTier</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEncryptionConfig` <a name="putEncryptionConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putEncryptionConfig"></a>

```typescript
public putEncryptionConfig(value: GoogleDataprocMetastoreServiceEncryptionConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putEncryptionConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a>

---

##### `putHiveMetastoreConfig` <a name="putHiveMetastoreConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putHiveMetastoreConfig"></a>

```typescript
public putHiveMetastoreConfig(value: GoogleDataprocMetastoreServiceHiveMetastoreConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putHiveMetastoreConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMaintenanceWindow"></a>

```typescript
public putMaintenanceWindow(value: GoogleDataprocMetastoreServiceMaintenanceWindow): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a>

---

##### `putMetadataIntegration` <a name="putMetadataIntegration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMetadataIntegration"></a>

```typescript
public putMetadataIntegration(value: GoogleDataprocMetastoreServiceMetadataIntegration): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putMetadataIntegration.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a>

---

##### `putNetworkConfig` <a name="putNetworkConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putNetworkConfig"></a>

```typescript
public putNetworkConfig(value: GoogleDataprocMetastoreServiceNetworkConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putNetworkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a>

---

##### `putTelemetryConfig` <a name="putTelemetryConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTelemetryConfig"></a>

```typescript
public putTelemetryConfig(value: GoogleDataprocMetastoreServiceTelemetryConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTelemetryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTimeouts"></a>

```typescript
public putTimeouts(value: GoogleDataprocMetastoreServiceTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a>

---

##### `resetDatabaseType` <a name="resetDatabaseType" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetDatabaseType"></a>

```typescript
public resetDatabaseType(): void
```

##### `resetEncryptionConfig` <a name="resetEncryptionConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetEncryptionConfig"></a>

```typescript
public resetEncryptionConfig(): void
```

##### `resetHiveMetastoreConfig` <a name="resetHiveMetastoreConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetHiveMetastoreConfig"></a>

```typescript
public resetHiveMetastoreConfig(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLocation` <a name="resetLocation" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetLocation"></a>

```typescript
public resetLocation(): void
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetMaintenanceWindow"></a>

```typescript
public resetMaintenanceWindow(): void
```

##### `resetMetadataIntegration` <a name="resetMetadataIntegration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetMetadataIntegration"></a>

```typescript
public resetMetadataIntegration(): void
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetNetwork"></a>

```typescript
public resetNetwork(): void
```

##### `resetNetworkConfig` <a name="resetNetworkConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetNetworkConfig"></a>

```typescript
public resetNetworkConfig(): void
```

##### `resetPort` <a name="resetPort" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetPort"></a>

```typescript
public resetPort(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetReleaseChannel` <a name="resetReleaseChannel" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetReleaseChannel"></a>

```typescript
public resetReleaseChannel(): void
```

##### `resetTelemetryConfig` <a name="resetTelemetryConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTelemetryConfig"></a>

```typescript
public resetTelemetryConfig(): void
```

##### `resetTier` <a name="resetTier" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTier"></a>

```typescript
public resetTier(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isConstruct"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

googleDataprocMetastoreService.GoogleDataprocMetastoreService.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformElement"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformResource"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.artifactGcsUri">artifactGcsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference">GoogleDataprocMetastoreServiceEncryptionConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.endpointUri">endpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.hiveMetastoreConfig">hiveMetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference">GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.metadataIntegration">metadataIntegration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference">GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference">GoogleDataprocMetastoreServiceNetworkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.state">state</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.stateMessage">stateMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference">GoogleDataprocMetastoreServiceTelemetryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference">GoogleDataprocMetastoreServiceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.uid">uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.databaseTypeInput">databaseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.encryptionConfigInput">encryptionConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.hiveMetastoreConfigInput">hiveMetastoreConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.metadataIntegrationInput">metadataIntegrationInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkConfigInput">networkConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkInput">networkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.portInput">portInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.releaseChannelInput">releaseChannelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.serviceIdInput">serviceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.telemetryConfigInput">telemetryConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tierInput">tierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.releaseChannel">releaseChannel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.serviceId">serviceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tier">tier</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `artifactGcsUri`<sup>Required</sup> <a name="artifactGcsUri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.artifactGcsUri"></a>

```typescript
public readonly artifactGcsUri: string;
```

- *Type:* string

---

##### `encryptionConfig`<sup>Required</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: GoogleDataprocMetastoreServiceEncryptionConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference">GoogleDataprocMetastoreServiceEncryptionConfigOutputReference</a>

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

---

##### `hiveMetastoreConfig`<sup>Required</sup> <a name="hiveMetastoreConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.hiveMetastoreConfig"></a>

```typescript
public readonly hiveMetastoreConfig: GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference</a>

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference">GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference</a>

---

##### `metadataIntegration`<sup>Required</sup> <a name="metadataIntegration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.metadataIntegration"></a>

```typescript
public readonly metadataIntegration: GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference">GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `networkConfig`<sup>Required</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleDataprocMetastoreServiceNetworkConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference">GoogleDataprocMetastoreServiceNetworkConfigOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.state"></a>

```typescript
public readonly state: string;
```

- *Type:* string

---

##### `stateMessage`<sup>Required</sup> <a name="stateMessage" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.stateMessage"></a>

```typescript
public readonly stateMessage: string;
```

- *Type:* string

---

##### `telemetryConfig`<sup>Required</sup> <a name="telemetryConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.telemetryConfig"></a>

```typescript
public readonly telemetryConfig: GoogleDataprocMetastoreServiceTelemetryConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference">GoogleDataprocMetastoreServiceTelemetryConfigOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataprocMetastoreServiceTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference">GoogleDataprocMetastoreServiceTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.uid"></a>

```typescript
public readonly uid: string;
```

- *Type:* string

---

##### `databaseTypeInput`<sup>Optional</sup> <a name="databaseTypeInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.databaseTypeInput"></a>

```typescript
public readonly databaseTypeInput: string;
```

- *Type:* string

---

##### `encryptionConfigInput`<sup>Optional</sup> <a name="encryptionConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.encryptionConfigInput"></a>

```typescript
public readonly encryptionConfigInput: GoogleDataprocMetastoreServiceEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a>

---

##### `hiveMetastoreConfigInput`<sup>Optional</sup> <a name="hiveMetastoreConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.hiveMetastoreConfigInput"></a>

```typescript
public readonly hiveMetastoreConfigInput: GoogleDataprocMetastoreServiceHiveMetastoreConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.maintenanceWindowInput"></a>

```typescript
public readonly maintenanceWindowInput: GoogleDataprocMetastoreServiceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a>

---

##### `metadataIntegrationInput`<sup>Optional</sup> <a name="metadataIntegrationInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.metadataIntegrationInput"></a>

```typescript
public readonly metadataIntegrationInput: GoogleDataprocMetastoreServiceMetadataIntegration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a>

---

##### `networkConfigInput`<sup>Optional</sup> <a name="networkConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkConfigInput"></a>

```typescript
public readonly networkConfigInput: GoogleDataprocMetastoreServiceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.networkInput"></a>

```typescript
public readonly networkInput: string;
```

- *Type:* string

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.portInput"></a>

```typescript
public readonly portInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `releaseChannelInput`<sup>Optional</sup> <a name="releaseChannelInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.releaseChannelInput"></a>

```typescript
public readonly releaseChannelInput: string;
```

- *Type:* string

---

##### `serviceIdInput`<sup>Optional</sup> <a name="serviceIdInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.serviceIdInput"></a>

```typescript
public readonly serviceIdInput: string;
```

- *Type:* string

---

##### `telemetryConfigInput`<sup>Optional</sup> <a name="telemetryConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.telemetryConfigInput"></a>

```typescript
public readonly telemetryConfigInput: GoogleDataprocMetastoreServiceTelemetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a>

---

##### `tierInput`<sup>Optional</sup> <a name="tierInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tierInput"></a>

```typescript
public readonly tierInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: GoogleDataprocMetastoreServiceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a> | cdktf.IResolvable

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `releaseChannel`<sup>Required</sup> <a name="releaseChannel" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.releaseChannel"></a>

```typescript
public readonly releaseChannel: string;
```

- *Type:* string

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

---

##### `tier`<sup>Required</sup> <a name="tier" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreService.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### GoogleDataprocMetastoreServiceConfig <a name="GoogleDataprocMetastoreServiceConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreServiceConfig: googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.serviceId">serviceId</a></code> | <code>string</code> | The ID of the metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.databaseType">databaseType</a></code> | <code>string</code> | The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.encryptionConfig">encryptionConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a></code> | encryption_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.hiveMetastoreConfig">hiveMetastoreConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a></code> | hive_metastore_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#id GoogleDataprocMetastoreService#id}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | User-defined labels for the metastore service. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.location">location</a></code> | <code>string</code> | The location where the metastore service should reside. The default value is 'global'. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a></code> | maintenance_window block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.metadataIntegration">metadataIntegration</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a></code> | metadata_integration block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.network">network</a></code> | <code>string</code> | The relative resource name of the VPC network on which the instance can be accessed. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.networkConfig">networkConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a></code> | network_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.port">port</a></code> | <code>number</code> | The TCP port at which the metastore service is reached. Default: 9083. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#project GoogleDataprocMetastoreService#project}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.releaseChannel">releaseChannel</a></code> | <code>string</code> | The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.telemetryConfig">telemetryConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a></code> | telemetry_config block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.tier">tier</a></code> | <code>string</code> | The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `serviceId`<sup>Required</sup> <a name="serviceId" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.serviceId"></a>

```typescript
public readonly serviceId: string;
```

- *Type:* string

The ID of the metastore service.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (_),
and hyphens (-). Cannot begin or end with underscore or hyphen. Must consist of between
3 and 63 characters.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#service_id GoogleDataprocMetastoreService#service_id}

---

##### `databaseType`<sup>Optional</sup> <a name="databaseType" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

The database type that the Metastore service stores its data. Default value: "MYSQL" Possible values: ["MYSQL", "SPANNER"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#database_type GoogleDataprocMetastoreService#database_type}

---

##### `encryptionConfig`<sup>Optional</sup> <a name="encryptionConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.encryptionConfig"></a>

```typescript
public readonly encryptionConfig: GoogleDataprocMetastoreServiceEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a>

encryption_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#encryption_config GoogleDataprocMetastoreService#encryption_config}

---

##### `hiveMetastoreConfig`<sup>Optional</sup> <a name="hiveMetastoreConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.hiveMetastoreConfig"></a>

```typescript
public readonly hiveMetastoreConfig: GoogleDataprocMetastoreServiceHiveMetastoreConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

hive_metastore_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#hive_metastore_config GoogleDataprocMetastoreService#hive_metastore_config}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#id GoogleDataprocMetastoreService#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

User-defined labels for the metastore service.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#labels GoogleDataprocMetastoreService#labels}

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The location where the metastore service should reside. The default value is 'global'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#location GoogleDataprocMetastoreService#location}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.maintenanceWindow"></a>

```typescript
public readonly maintenanceWindow: GoogleDataprocMetastoreServiceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a>

maintenance_window block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#maintenance_window GoogleDataprocMetastoreService#maintenance_window}

---

##### `metadataIntegration`<sup>Optional</sup> <a name="metadataIntegration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.metadataIntegration"></a>

```typescript
public readonly metadataIntegration: GoogleDataprocMetastoreServiceMetadataIntegration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a>

metadata_integration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#metadata_integration GoogleDataprocMetastoreService#metadata_integration}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

The relative resource name of the VPC network on which the instance can be accessed.

It is specified in the following form:

"projects/{projectNumber}/global/networks/{network_id}".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#network GoogleDataprocMetastoreService#network}

---

##### `networkConfig`<sup>Optional</sup> <a name="networkConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.networkConfig"></a>

```typescript
public readonly networkConfig: GoogleDataprocMetastoreServiceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a>

network_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#network_config GoogleDataprocMetastoreService#network_config}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

The TCP port at which the metastore service is reached. Default: 9083.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#port GoogleDataprocMetastoreService#port}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#project GoogleDataprocMetastoreService#project}.

---

##### `releaseChannel`<sup>Optional</sup> <a name="releaseChannel" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.releaseChannel"></a>

```typescript
public readonly releaseChannel: string;
```

- *Type:* string

The release channel of the service. If unspecified, defaults to 'STABLE'. Default value: "STABLE" Possible values: ["CANARY", "STABLE"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#release_channel GoogleDataprocMetastoreService#release_channel}

---

##### `telemetryConfig`<sup>Optional</sup> <a name="telemetryConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.telemetryConfig"></a>

```typescript
public readonly telemetryConfig: GoogleDataprocMetastoreServiceTelemetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a>

telemetry_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#telemetry_config GoogleDataprocMetastoreService#telemetry_config}

---

##### `tier`<sup>Optional</sup> <a name="tier" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.tier"></a>

```typescript
public readonly tier: string;
```

- *Type:* string

The tier of the service. Possible values: ["DEVELOPER", "ENTERPRISE"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#tier GoogleDataprocMetastoreService#tier}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceConfig.property.timeouts"></a>

```typescript
public readonly timeouts: GoogleDataprocMetastoreServiceTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#timeouts GoogleDataprocMetastoreService#timeouts}

---

### GoogleDataprocMetastoreServiceEncryptionConfig <a name="GoogleDataprocMetastoreServiceEncryptionConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreServiceEncryptionConfig: googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig.property.kmsKey">kmsKey</a></code> | <code>string</code> | The fully qualified customer provided Cloud KMS key name to use for customer data encryption. Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'. |

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

The fully qualified customer provided Cloud KMS key name to use for customer data encryption. Use the following format: 'projects/([^/]+)/locations/([^/]+)/keyRings/([^/]+)/cryptoKeys/([^/]+)'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#kms_key GoogleDataprocMetastoreService#kms_key}

---

### GoogleDataprocMetastoreServiceHiveMetastoreConfig <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreServiceHiveMetastoreConfig: googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.version">version</a></code> | <code>string</code> | The Hive metastore schema version. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.auxiliaryVersions">auxiliaryVersions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>[]</code> | auxiliary_versions block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.configOverrides">configOverrides</a></code> | <code>{[ key: string ]: string}</code> | A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden). |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.endpointProtocol">endpointProtocol</a></code> | <code>string</code> | The protocol to use for the metastore service endpoint. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.kerberosConfig">kerberosConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | kerberos_config block. |

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Hive metastore schema version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#version GoogleDataprocMetastoreService#version}

---

##### `auxiliaryVersions`<sup>Optional</sup> <a name="auxiliaryVersions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.auxiliaryVersions"></a>

```typescript
public readonly auxiliaryVersions: IResolvable | GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>[]

auxiliary_versions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#auxiliary_versions GoogleDataprocMetastoreService#auxiliary_versions}

---

##### `configOverrides`<sup>Optional</sup> <a name="configOverrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.configOverrides"></a>

```typescript
public readonly configOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of Hive metastore configuration key-value pairs to apply to the Hive metastore (configured in hive-site.xml). The mappings override system defaults (some keys cannot be overridden).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#config_overrides GoogleDataprocMetastoreService#config_overrides}

---

##### `endpointProtocol`<sup>Optional</sup> <a name="endpointProtocol" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.endpointProtocol"></a>

```typescript
public readonly endpointProtocol: string;
```

- *Type:* string

The protocol to use for the metastore service endpoint.

If unspecified, defaults to 'THRIFT'. Default value: "THRIFT" Possible values: ["THRIFT", "GRPC"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#endpoint_protocol GoogleDataprocMetastoreService#endpoint_protocol}

---

##### `kerberosConfig`<sup>Optional</sup> <a name="kerberosConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig.property.kerberosConfig"></a>

```typescript
public readonly kerberosConfig: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

kerberos_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#kerberos_config GoogleDataprocMetastoreService#kerberos_config}

---

### GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions: googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#key GoogleDataprocMetastoreService#key}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.version">version</a></code> | <code>string</code> | The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.configOverrides">configOverrides</a></code> | <code>{[ key: string ]: string}</code> | A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#key GoogleDataprocMetastoreService#key}.

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

The Hive metastore version of the auxiliary service. It must be less than the primary Hive metastore service's version.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#version GoogleDataprocMetastoreService#version}

---

##### `configOverrides`<sup>Optional</sup> <a name="configOverrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions.property.configOverrides"></a>

```typescript
public readonly configOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

A mapping of Hive metastore configuration key-value pairs to apply to the auxiliary Hive metastore (configured in hive-site.xml) in addition to the primary version's overrides. If keys are present in both the auxiliary version's overrides and the primary version's overrides, the value from the auxiliary version's overrides takes precedence.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#config_overrides GoogleDataprocMetastoreService#config_overrides}

---

### GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig: googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.keytab">keytab</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | keytab block. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.krb5ConfigGcsUri">krb5ConfigGcsUri</a></code> | <code>string</code> | A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.principal">principal</a></code> | <code>string</code> | A Kerberos principal that exists in the both the keytab the KDC to authenticate as. |

---

##### `keytab`<sup>Required</sup> <a name="keytab" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.keytab"></a>

```typescript
public readonly keytab: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

keytab block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#keytab GoogleDataprocMetastoreService#keytab}

---

##### `krb5ConfigGcsUri`<sup>Required</sup> <a name="krb5ConfigGcsUri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.krb5ConfigGcsUri"></a>

```typescript
public readonly krb5ConfigGcsUri: string;
```

- *Type:* string

A Cloud Storage URI that specifies the path to a krb5.conf file. It is of the form gs://{bucket_name}/path/to/krb5.conf, although the file does not need to be named krb5.conf explicitly.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#krb5_config_gcs_uri GoogleDataprocMetastoreService#krb5_config_gcs_uri}

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

A Kerberos principal that exists in the both the keytab the KDC to authenticate as.

A typical principal is of the form "primary/instance@REALM", but there is no exact format.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#principal GoogleDataprocMetastoreService#principal}

---

### GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab: googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.property.cloudSecret">cloudSecret</a></code> | <code>string</code> | The relative resource name of a Secret Manager secret version, in the following form:. |

---

##### `cloudSecret`<sup>Required</sup> <a name="cloudSecret" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab.property.cloudSecret"></a>

```typescript
public readonly cloudSecret: string;
```

- *Type:* string

The relative resource name of a Secret Manager secret version, in the following form:.

"projects/{projectNumber}/secrets/{secret_id}/versions/{version_id}".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#cloud_secret GoogleDataprocMetastoreService#cloud_secret}

---

### GoogleDataprocMetastoreServiceMaintenanceWindow <a name="GoogleDataprocMetastoreServiceMaintenanceWindow" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreServiceMaintenanceWindow: googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"]. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | The hour of day (0-23) when the window starts. |

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

The day of week, when the window starts. Possible values: ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#day_of_week GoogleDataprocMetastoreService#day_of_week}

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

The hour of day (0-23) when the window starts.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#hour_of_day GoogleDataprocMetastoreService#hour_of_day}

---

### GoogleDataprocMetastoreServiceMetadataIntegration <a name="GoogleDataprocMetastoreServiceMetadataIntegration" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreServiceMetadataIntegration: googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration.property.dataCatalogConfig">dataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | data_catalog_config block. |

---

##### `dataCatalogConfig`<sup>Required</sup> <a name="dataCatalogConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration.property.dataCatalogConfig"></a>

```typescript
public readonly dataCatalogConfig: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

data_catalog_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#data_catalog_config GoogleDataprocMetastoreService#data_catalog_config}

---

### GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig <a name="GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig: googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Defines whether the metastore metadata should be synced to Data Catalog. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Defines whether the metastore metadata should be synced to Data Catalog.

The default value is to disable syncing metastore metadata to Data Catalog.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#enabled GoogleDataprocMetastoreService#enabled}

---

### GoogleDataprocMetastoreServiceNetworkConfig <a name="GoogleDataprocMetastoreServiceNetworkConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreServiceNetworkConfig: googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig.property.consumers">consumers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>[]</code> | consumers block. |

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig.property.consumers"></a>

```typescript
public readonly consumers: IResolvable | GoogleDataprocMetastoreServiceNetworkConfigConsumers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>[]

consumers block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#consumers GoogleDataprocMetastoreService#consumers}

---

### GoogleDataprocMetastoreServiceNetworkConfigConsumers <a name="GoogleDataprocMetastoreServiceNetworkConfigConsumers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreServiceNetworkConfigConsumers: googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers.property.subnetwork">subnetwork</a></code> | <code>string</code> | The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint. |

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

The subnetwork of the customer project from which an IP address is reserved and used as the Dataproc Metastore service's endpoint.

It is accessible to hosts in the subnet and to all hosts in a subnet in the same region and same network.
There must be at least one IP address available in the subnet's primary range. The subnet is specified in the following form:
'projects/{projectNumber}/regions/{region_id}/subnetworks/{subnetwork_id}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#subnetwork GoogleDataprocMetastoreService#subnetwork}

---

### GoogleDataprocMetastoreServiceTelemetryConfig <a name="GoogleDataprocMetastoreServiceTelemetryConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreServiceTelemetryConfig: googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig.property.logFormat">logFormat</a></code> | <code>string</code> | The output format of the Dataproc Metastore service's logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"]. |

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

The output format of the Dataproc Metastore service's logs. Default value: "JSON" Possible values: ["LEGACY", "JSON"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#log_format GoogleDataprocMetastoreService#log_format}

---

### GoogleDataprocMetastoreServiceTimeouts <a name="GoogleDataprocMetastoreServiceTimeouts" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

const googleDataprocMetastoreServiceTimeouts: googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#create GoogleDataprocMetastoreService#create}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#delete GoogleDataprocMetastoreService#delete}. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#update GoogleDataprocMetastoreService#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#create GoogleDataprocMetastoreService#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#delete GoogleDataprocMetastoreService#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google-beta/r/google_dataproc_metastore_service#update GoogleDataprocMetastoreService#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GoogleDataprocMetastoreServiceEncryptionConfigOutputReference <a name="GoogleDataprocMetastoreServiceEncryptionConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKeyInput">kmsKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey">kmsKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `kmsKeyInput`<sup>Optional</sup> <a name="kmsKeyInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKeyInput"></a>

```typescript
public readonly kmsKeyInput: string;
```

- *Type:* string

---

##### `kmsKey`<sup>Required</sup> <a name="kmsKey" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.kmsKey"></a>

```typescript
public readonly kmsKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocMetastoreServiceEncryptionConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceEncryptionConfig">GoogleDataprocMetastoreServiceEncryptionConfig</a>

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get"></a>

```typescript
public get(index: number): GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>[]

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resetConfigOverrides">resetConfigOverrides</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConfigOverrides` <a name="resetConfigOverrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.resetConfigOverrides"></a>

```typescript
public resetConfigOverrides(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverridesInput">configOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverrides">configOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `configOverridesInput`<sup>Optional</sup> <a name="configOverridesInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverridesInput"></a>

```typescript
public readonly configOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `configOverrides`<sup>Required</sup> <a name="configOverrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.configOverrides"></a>

```typescript
public readonly configOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a> | cdktf.IResolvable

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecretInput">cloudSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret">cloudSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `cloudSecretInput`<sup>Optional</sup> <a name="cloudSecretInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecretInput"></a>

```typescript
public readonly cloudSecretInput: string;
```

- *Type:* string

---

##### `cloudSecret`<sup>Required</sup> <a name="cloudSecret" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.cloudSecret"></a>

```typescript
public readonly cloudSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab">putKeytab</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKeytab` <a name="putKeytab" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab"></a>

```typescript
public putKeytab(value: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.putKeytab.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab">keytab</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytabInput">keytabInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUriInput">krb5ConfigGcsUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principalInput">principalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri">krb5ConfigGcsUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal">principal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keytab`<sup>Required</sup> <a name="keytab" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytab"></a>

```typescript
public readonly keytab: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytabOutputReference</a>

---

##### `keytabInput`<sup>Optional</sup> <a name="keytabInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.keytabInput"></a>

```typescript
public readonly keytabInput: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigKeytab</a>

---

##### `krb5ConfigGcsUriInput`<sup>Optional</sup> <a name="krb5ConfigGcsUriInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUriInput"></a>

```typescript
public readonly krb5ConfigGcsUriInput: string;
```

- *Type:* string

---

##### `principalInput`<sup>Optional</sup> <a name="principalInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principalInput"></a>

```typescript
public readonly principalInput: string;
```

- *Type:* string

---

##### `krb5ConfigGcsUri`<sup>Required</sup> <a name="krb5ConfigGcsUri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.krb5ConfigGcsUri"></a>

```typescript
public readonly krb5ConfigGcsUri: string;
```

- *Type:* string

---

##### `principal`<sup>Required</sup> <a name="principal" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.principal"></a>

```typescript
public readonly principal: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---


### GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference <a name="GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putAuxiliaryVersions">putAuxiliaryVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig">putKerberosConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetAuxiliaryVersions">resetAuxiliaryVersions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetConfigOverrides">resetConfigOverrides</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetEndpointProtocol">resetEndpointProtocol</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetKerberosConfig">resetKerberosConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuxiliaryVersions` <a name="putAuxiliaryVersions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putAuxiliaryVersions"></a>

```typescript
public putAuxiliaryVersions(value: IResolvable | GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putAuxiliaryVersions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>[]

---

##### `putKerberosConfig` <a name="putKerberosConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig"></a>

```typescript
public putKerberosConfig(value: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.putKerberosConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---

##### `resetAuxiliaryVersions` <a name="resetAuxiliaryVersions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetAuxiliaryVersions"></a>

```typescript
public resetAuxiliaryVersions(): void
```

##### `resetConfigOverrides` <a name="resetConfigOverrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetConfigOverrides"></a>

```typescript
public resetConfigOverrides(): void
```

##### `resetEndpointProtocol` <a name="resetEndpointProtocol" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetEndpointProtocol"></a>

```typescript
public resetEndpointProtocol(): void
```

##### `resetKerberosConfig` <a name="resetKerberosConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.resetKerberosConfig"></a>

```typescript
public resetKerberosConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersions">auxiliaryVersions</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig">kerberosConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersionsInput">auxiliaryVersionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverridesInput">configOverridesInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocolInput">endpointProtocolInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfigInput">kerberosConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.versionInput">versionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides">configOverrides</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocol">endpointProtocol</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version">version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `auxiliaryVersions`<sup>Required</sup> <a name="auxiliaryVersions" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersions"></a>

```typescript
public readonly auxiliaryVersions: GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersionsList</a>

---

##### `kerberosConfig`<sup>Required</sup> <a name="kerberosConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfig"></a>

```typescript
public readonly kerberosConfig: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfigOutputReference</a>

---

##### `auxiliaryVersionsInput`<sup>Optional</sup> <a name="auxiliaryVersionsInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.auxiliaryVersionsInput"></a>

```typescript
public readonly auxiliaryVersionsInput: IResolvable | GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions">GoogleDataprocMetastoreServiceHiveMetastoreConfigAuxiliaryVersions</a>[]

---

##### `configOverridesInput`<sup>Optional</sup> <a name="configOverridesInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverridesInput"></a>

```typescript
public readonly configOverridesInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `endpointProtocolInput`<sup>Optional</sup> <a name="endpointProtocolInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocolInput"></a>

```typescript
public readonly endpointProtocolInput: string;
```

- *Type:* string

---

##### `kerberosConfigInput`<sup>Optional</sup> <a name="kerberosConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.kerberosConfigInput"></a>

```typescript
public readonly kerberosConfigInput: GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfigKerberosConfig</a>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.versionInput"></a>

```typescript
public readonly versionInput: string;
```

- *Type:* string

---

##### `configOverrides`<sup>Required</sup> <a name="configOverrides" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.configOverrides"></a>

```typescript
public readonly configOverrides: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `endpointProtocol`<sup>Required</sup> <a name="endpointProtocol" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.endpointProtocol"></a>

```typescript
public readonly endpointProtocol: string;
```

- *Type:* string

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.version"></a>

```typescript
public readonly version: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocMetastoreServiceHiveMetastoreConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceHiveMetastoreConfig">GoogleDataprocMetastoreServiceHiveMetastoreConfig</a>

---


### GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference <a name="GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeekInput">dayOfWeekInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDayInput">hourOfDayInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek">dayOfWeek</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay">hourOfDay</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dayOfWeekInput`<sup>Optional</sup> <a name="dayOfWeekInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeekInput"></a>

```typescript
public readonly dayOfWeekInput: string;
```

- *Type:* string

---

##### `hourOfDayInput`<sup>Optional</sup> <a name="hourOfDayInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDayInput"></a>

```typescript
public readonly hourOfDayInput: number;
```

- *Type:* number

---

##### `dayOfWeek`<sup>Required</sup> <a name="dayOfWeek" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.dayOfWeek"></a>

```typescript
public readonly dayOfWeek: string;
```

- *Type:* string

---

##### `hourOfDay`<sup>Required</sup> <a name="hourOfDay" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.hourOfDay"></a>

```typescript
public readonly hourOfDay: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindowOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocMetastoreServiceMaintenanceWindow;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMaintenanceWindow">GoogleDataprocMetastoreServiceMaintenanceWindow</a>

---


### GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference <a name="GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

---


### GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference <a name="GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.putDataCatalogConfig">putDataCatalogConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDataCatalogConfig` <a name="putDataCatalogConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.putDataCatalogConfig"></a>

```typescript
public putDataCatalogConfig(value: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.putDataCatalogConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfig">dataCatalogConfig</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfigInput">dataCatalogConfigInput</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `dataCatalogConfig`<sup>Required</sup> <a name="dataCatalogConfig" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfig"></a>

```typescript
public readonly dataCatalogConfig: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfigOutputReference</a>

---

##### `dataCatalogConfigInput`<sup>Optional</sup> <a name="dataCatalogConfigInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.dataCatalogConfigInput"></a>

```typescript
public readonly dataCatalogConfigInput: GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig">GoogleDataprocMetastoreServiceMetadataIntegrationDataCatalogConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegrationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocMetastoreServiceMetadataIntegration;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceMetadataIntegration">GoogleDataprocMetastoreServiceMetadataIntegration</a>

---


### GoogleDataprocMetastoreServiceNetworkConfigConsumersList <a name="GoogleDataprocMetastoreServiceNetworkConfigConsumersList" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.get"></a>

```typescript
public get(index: number): GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | GoogleDataprocMetastoreServiceNetworkConfigConsumers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>[]

---


### GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference <a name="GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri">endpointUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetworkInput">subnetworkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork">subnetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `endpointUri`<sup>Required</sup> <a name="endpointUri" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.endpointUri"></a>

```typescript
public readonly endpointUri: string;
```

- *Type:* string

---

##### `subnetworkInput`<sup>Optional</sup> <a name="subnetworkInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetworkInput"></a>

```typescript
public readonly subnetworkInput: string;
```

- *Type:* string

---

##### `subnetwork`<sup>Required</sup> <a name="subnetwork" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.subnetwork"></a>

```typescript
public readonly subnetwork: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocMetastoreServiceNetworkConfigConsumers | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a> | cdktf.IResolvable

---


### GoogleDataprocMetastoreServiceNetworkConfigOutputReference <a name="GoogleDataprocMetastoreServiceNetworkConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.putConsumers">putConsumers</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConsumers` <a name="putConsumers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.putConsumers"></a>

```typescript
public putConsumers(value: IResolvable | GoogleDataprocMetastoreServiceNetworkConfigConsumers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.putConsumers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>[]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumers">consumers</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList">GoogleDataprocMetastoreServiceNetworkConfigConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumersInput">consumersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumers`<sup>Required</sup> <a name="consumers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumers"></a>

```typescript
public readonly consumers: GoogleDataprocMetastoreServiceNetworkConfigConsumersList;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumersList">GoogleDataprocMetastoreServiceNetworkConfigConsumersList</a>

---

##### `consumersInput`<sup>Optional</sup> <a name="consumersInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.consumersInput"></a>

```typescript
public readonly consumersInput: IResolvable | GoogleDataprocMetastoreServiceNetworkConfigConsumers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigConsumers">GoogleDataprocMetastoreServiceNetworkConfigConsumers</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocMetastoreServiceNetworkConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceNetworkConfig">GoogleDataprocMetastoreServiceNetworkConfig</a>

---


### GoogleDataprocMetastoreServiceTelemetryConfigOutputReference <a name="GoogleDataprocMetastoreServiceTelemetryConfigOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resetLogFormat">resetLogFormat</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.resetLogFormat"></a>

```typescript
public resetLogFormat(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat">logFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormatInput"></a>

```typescript
public readonly logFormatInput: string;
```

- *Type:* string

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.logFormat"></a>

```typescript
public readonly logFormat: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocMetastoreServiceTelemetryConfig;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTelemetryConfig">GoogleDataprocMetastoreServiceTelemetryConfig</a>

---


### GoogleDataprocMetastoreServiceTimeoutsOutputReference <a name="GoogleDataprocMetastoreServiceTimeoutsOutputReference" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer"></a>

```typescript
import { googleDataprocMetastoreService } from '@cdktf/provider-google-beta'

new googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: GoogleDataprocMetastoreServiceTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google-beta.googleDataprocMetastoreService.GoogleDataprocMetastoreServiceTimeouts">GoogleDataprocMetastoreServiceTimeouts</a> | cdktf.IResolvable

---



